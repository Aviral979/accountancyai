import { useState, useRef, useEffect } from "react";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdBanner } from "@/components/ui/AdBanner";
import { ChatMessage, ChatInput, EmptyState } from "@/components/chat";
import { toast } from "sonner";
import { useOCR } from "@/hooks/useOCR";
import { supabase } from "@/integrations/supabase/client";

interface SolutionStep {
  title: string;
  content: string;
}

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  steps?: SolutionStep[];
  finalAnswer?: string;
  isLoading?: boolean;
}

// Parse AI response into structured steps
const parseAIResponse = (aiResponse: string): { steps: SolutionStep[]; finalAnswer: string } => {
  const steps: SolutionStep[] = [];
  
  // Extract Step 1: Journal Entry
  const journalMatch = aiResponse.match(/\*\*Step 1: Journal Entry\*\*([\s\S]*?)(?=\*\*Step 2:|$)/i);
  if (journalMatch) {
    steps.push({ title: "Journal Entry", content: journalMatch[1].trim() });
  }
  
  // Extract Step 2: Ledger Posting
  const ledgerMatch = aiResponse.match(/\*\*Step 2: Ledger Posting\*\*([\s\S]*?)(?=\*\*Step 3:|$)/i);
  if (ledgerMatch) {
    steps.push({ title: "Ledger Posting", content: ledgerMatch[1].trim() });
  }
  
  // Extract Step 3: Trial Balance
  const trialMatch = aiResponse.match(/\*\*Step 3: Trial Balance\*\*([\s\S]*?)(?=\*\*Step 4:|$)/i);
  if (trialMatch) {
    steps.push({ title: "Trial Balance", content: trialMatch[1].trim() });
  }
  
  // Extract Step 4: Calculations
  const calcMatch = aiResponse.match(/\*\*Step 4: Calculations\*\*([\s\S]*?)(?=\*\*Final Answer:|$)/i);
  if (calcMatch) {
    steps.push({ title: "Calculations", content: calcMatch[1].trim() });
  }
  
  // Extract Final Answer
  const finalMatch = aiResponse.match(/\*\*Final Answer:\*\*([\s\S]*?)$/i);
  const finalAnswer = finalMatch ? finalMatch[1].trim() : "Solution generated successfully.";
  
  // If parsing failed, use the whole response
  if (steps.length === 0) {
    steps.push({ title: "Solution", content: aiResponse });
  }
  
  return { steps, finalAnswer };
};

export default function AskQuestion() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAdForDownload, setShowAdForDownload] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { extractText, isProcessing: isOCRProcessing, progress: ocrProgress } = useOCR();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue.trim(),
    };

    // Add user message and loading AI message
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: "",
      isLoading: true,
    };

    setMessages(prev => [...prev, userMessage, loadingMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("solve-question", {
        body: { question: userMessage.content }
      });

      if (error) {
        console.error("Edge function error:", error);
        toast.error(error.message || "Failed to generate solution");
        // Remove loading message
        setMessages(prev => prev.filter(m => m.id !== loadingMessage.id));
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        setMessages(prev => prev.filter(m => m.id !== loadingMessage.id));
        return;
      }

      if (data?.solution) {
        const { steps, finalAnswer } = parseAIResponse(data.solution);
        
        // Update loading message with actual content
        setMessages(prev => prev.map(m => 
          m.id === loadingMessage.id
            ? { ...m, isLoading: false, steps, finalAnswer, content: data.solution }
            : m
        ));
        toast.success("Solution generated!");
      } else {
        toast.error("No solution received from AI");
        setMessages(prev => prev.filter(m => m.id !== loadingMessage.id));
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to connect to AI service");
      setMessages(prev => prev.filter(m => m.id !== loadingMessage.id));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    // Check if it's an image
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file (JPG, PNG, etc.)");
      return;
    }

    toast.info("Extracting text from image...");

    try {
      const extractedText = await extractText(file);
      
      if (extractedText.trim()) {
        setInputValue(extractedText.trim());
        toast.success("Text extracted! You can now get the solution.");
      } else {
        toast.error("No text found in the image. Please try a clearer image.");
      }
    } catch (err) {
      console.error("OCR error:", err);
      toast.error("Failed to extract text from image");
    }
  };

  const handleExampleClick = (question: string) => {
    setInputValue(question);
  };

  const handleDownload = () => {
    setShowAdForDownload(true);
  };

  const proceedWithDownload = () => {
    // Get the last AI message with steps
    const lastAIMessage = [...messages].reverse().find(m => m.type === "ai" && m.steps);
    if (!lastAIMessage) return;
    
    // Find the corresponding user message
    const aiIndex = messages.findIndex(m => m.id === lastAIMessage.id);
    const userMessage = messages.slice(0, aiIndex).reverse().find(m => m.type === "user");
    
    // Create PDF
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;
    let yPosition = 20;
    
    // Helper function to add text with word wrap
    const addText = (text: string, fontSize: number, isBold: boolean = false) => {
      pdf.setFontSize(fontSize);
      pdf.setFont("helvetica", isBold ? "bold" : "normal");
      const lines = pdf.splitTextToSize(text, maxWidth);
      
      lines.forEach((line: string) => {
        if (yPosition > 270) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.text(line, margin, yPosition);
        yPosition += fontSize * 0.5;
      });
      yPosition += 5;
    };
    
    // Title
    pdf.setTextColor(79, 70, 229); // Primary color
    addText("ACCOUNTANCY SOLUTION", 18, true);
    pdf.setTextColor(0, 0, 0);
    
    // Divider line
    pdf.setDrawColor(200, 200, 200);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;
    
    // Question
    addText("QUESTION:", 12, true);
    addText(userMessage?.content || "N/A", 11);
    yPosition += 5;
    
    // Steps
    lastAIMessage.steps?.forEach((step, i) => {
      pdf.setTextColor(79, 70, 229);
      addText(`STEP ${i + 1}: ${step.title}`, 12, true);
      pdf.setTextColor(0, 0, 0);
      
      // Clean up content and add
      const cleanContent = step.content.replace(/\*\*/g, "").replace(/\*/g, "");
      addText(cleanContent, 10);
      yPosition += 3;
    });
    
    // Final Answer
    pdf.setDrawColor(200, 200, 200);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;
    
    pdf.setTextColor(16, 185, 129); // Accent/green color
    addText("FINAL ANSWER:", 12, true);
    pdf.setTextColor(0, 0, 0);
    addText(lastAIMessage.finalAnswer || "", 11);
    
    // Footer
    yPosition += 15;
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(9);
    pdf.text("Generated by AccountancyAI - CBSE Class 11 & 12 Accountancy Solutions", margin, yPosition);
    
    // Save PDF
    pdf.save("accountancy-solution.pdf");
    
    setShowAdForDownload(false);
    toast.success("Solution downloaded as PDF!");
  };

  const hasMessages = messages.length > 0;
  const hasAISolution = messages.some(m => m.type === "ai" && m.steps);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-background">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl py-6">
          {!hasMessages ? (
            <EmptyState onExampleClick={handleExampleClick} />
          ) : (
            <div className="space-y-6 pb-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  type={message.type}
                  content={message.content}
                  steps={message.steps}
                  finalAnswer={message.finalAnswer}
                  isLoading={message.isLoading}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border bg-background/80 backdrop-blur-sm py-4">
        {/* Download Button - Show only when there's a solution */}
        {hasAISolution && (
          <div className="container max-w-3xl mb-3 flex justify-center">
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="gap-2 border-border text-foreground hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
              Download Solution
            </Button>
          </div>
        )}

        {/* Chat Input */}
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}
          onFileUpload={handleFileUpload}
          isLoading={isLoading}
          isOCRProcessing={isOCRProcessing}
          ocrProgress={ocrProgress}
        />

        {/* Ad Banner - Non-intrusive */}
        <div className="container max-w-3xl mt-4">
          <AdBanner className="opacity-80" />
        </div>
      </div>

      {/* Download Ad Modal */}
      {showAdForDownload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
          <Card className="w-full max-w-md border-border bg-card animate-scale-in">
            <CardHeader>
              <CardTitle className="text-foreground">Watch Ad to Download</CardTitle>
              <CardDescription className="text-muted-foreground">
                Please view the advertisement below to proceed with download
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AdBanner variant="inline" />
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowAdForDownload(false)}
                  className="flex-1 border-border text-foreground hover:bg-secondary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={proceedWithDownload}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Download Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
