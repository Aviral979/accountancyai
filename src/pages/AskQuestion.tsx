import { useState, useRef } from "react";
import { Upload, FileText, Loader2, Download, Sparkles, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { StepDisplay } from "@/components/StepDisplay";
import { AdBanner } from "@/components/ui/AdBanner";
import { toast } from "sonner";
import { useOCR } from "@/hooks/useOCR";
import { supabase } from "@/integrations/supabase/client";

interface SolutionStep {
  title: string;
  content: string;
}

interface Solution {
  question: string;
  steps: SolutionStep[];
  finalAnswer: string;
}

// Parse AI response into structured steps
const parseAIResponse = (question: string, aiResponse: string): Solution => {
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
  
  return { question, steps, finalAnswer };
};

export default function AskQuestion() {
  const [question, setQuestion] = useState("");
  const [solution, setSolution] = useState<Solution | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdForDownload, setShowAdForDownload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { extractText, isProcessing: isOCRProcessing, progress: ocrProgress } = useOCR();

  const handleSubmit = async () => {
    if (!question.trim()) {
      toast.error("Please enter a question");
      return;
    }

    setIsLoading(true);
    setSolution(null);

    try {
      const { data, error } = await supabase.functions.invoke('solve-question', {
        body: { question: question.trim() }
      });

      if (error) {
        console.error("Edge function error:", error);
        toast.error(error.message || "Failed to generate solution");
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      if (data?.solution) {
        const parsedSolution = parseAIResponse(question, data.solution);
        setSolution(parsedSolution);
        toast.success("Solution generated!");
      } else {
        toast.error("No solution received from AI");
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to connect to AI service");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file (JPG, PNG, etc.)");
      return;
    }

    toast.info("Extracting text from image...");

    try {
      const extractedText = await extractText(file);
      
      if (extractedText.trim()) {
        setQuestion(extractedText.trim());
        toast.success("Text extracted! You can now get the solution.");
      } else {
        toast.error("No text found in the image. Please try a clearer image.");
      }
    } catch (err) {
      console.error("OCR error:", err);
      toast.error("Failed to extract text from image");
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownload = () => {
    setShowAdForDownload(true);
  };

  const proceedWithDownload = () => {
    if (!solution) return;
    
    const content = `
ACCOUNTANCY SOLUTION
====================

QUESTION:
${solution.question}

${solution.steps.map((step, i) => `
STEP ${i + 1}: ${step.title}
${'-'.repeat(40)}
${step.content}
`).join('\n')}

FINAL ANSWER:
${solution.finalAnswer}

---
Generated by AccountancyAI
CBSE Class 11 & 12 Accountancy Solutions
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'accountancy-solution.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    setShowAdForDownload(false);
    toast.success("Solution downloaded!");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Ask a Question</h1>
          <p className="text-muted-foreground">
            Upload or type your CBSE Accountancy question and get step-by-step solutions
          </p>
        </div>

        <AdBanner className="mb-8" />

        <Card className="mb-8 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <FileText className="h-5 w-5 text-primary" />
              Enter Your Question
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Type your question or upload an image of your problem
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Example: Prepare journal entries and ledger for purchase of furniture on credit Rs. 50,000"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[120px] border-input bg-background text-foreground"
              disabled={isOCRProcessing}
            />
            
            {/* OCR Progress Bar */}
            {isOCRProcessing && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ImageIcon className="h-4 w-4 animate-pulse" />
                  <span>Extracting text from image... {ocrProgress}%</span>
                </div>
                <Progress value={ocrProgress} className="h-2" />
              </div>
            )}
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={handleSubmit}
                disabled={isLoading || isOCRProcessing || !question.trim()}
                className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating Solution...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Get Solution
                  </>
                )}
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={isOCRProcessing || isLoading}
                className="gap-2 border-border text-foreground hover:bg-secondary"
              >
                {isOCRProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4" />
                    Upload Image
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {solution && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Solution</h2>
              <Button
                onClick={handleDownload}
                variant="outline"
                className="gap-2 border-border text-foreground hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
            
            <StepDisplay
              question={solution.question}
              steps={solution.steps}
              finalAnswer={solution.finalAnswer}
            />
          </div>
        )}

        {/* Download Ad Modal */}
        {showAdForDownload && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
            <Card className="w-full max-w-md border-border bg-card">
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
    </div>
  );
}
