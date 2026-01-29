import { useState, useRef } from "react";
import { Upload, FileText, Loader2, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { StepDisplay } from "@/components/StepDisplay";
import { AdBanner } from "@/components/ui/AdBanner";
import { toast } from "sonner";

interface SolutionStep {
  title: string;
  content: string;
}

interface Solution {
  question: string;
  steps: SolutionStep[];
  finalAnswer: string;
}

// Simulated AI response - in production, this would call an actual AI API
const generateSolution = (question: string): Solution => {
  // Parse the question to generate appropriate response
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes("furniture") && lowerQuestion.includes("credit")) {
    return {
      question: question,
      steps: [
        {
          title: "Journal Entry",
          content: `Date        Particulars                      L.F.    Debit (₹)    Credit (₹)
────────────────────────────────────────────────────────────────────────────
            Furniture A/C                     Dr      50,000
                To Creditor A/C                                   50,000
            (Being furniture purchased on credit)`
        },
        {
          title: "Ledger Posting",
          content: `                    FURNITURE ACCOUNT
────────────────────────────────────────────────────────────────────────────
Dr.                                                                      Cr.
Date    Particulars     J.F.    Amount(₹) │ Date    Particulars    J.F.   Amount(₹)
────────────────────────────────────────────────────────────────────────────
        To Creditor A/c          50,000   │
────────────────────────────────────────────────────────────────────────────

                    CREDITOR ACCOUNT
────────────────────────────────────────────────────────────────────────────
Dr.                                                                      Cr.
Date    Particulars     J.F.    Amount(₹) │ Date    Particulars    J.F.   Amount(₹)
────────────────────────────────────────────────────────────────────────────
                                          │         By Furniture A/c       50,000
────────────────────────────────────────────────────────────────────────────`
        },
        {
          title: "Trial Balance (Extract)",
          content: `                    TRIAL BALANCE
                    as on [Date]
────────────────────────────────────────────────────────────────────────────
Account Name                              Debit (₹)        Credit (₹)
────────────────────────────────────────────────────────────────────────────
Furniture                                 50,000           
Creditor                                                   50,000
────────────────────────────────────────────────────────────────────────────
Total                                     50,000           50,000`
        },
        {
          title: "Calculations",
          content: `No additional calculations required for this transaction.

Note: 
- Furniture is a Fixed Asset (Real Account) - Debit what comes in
- Creditor is a Personal Account - Credit the giver`
        }
      ],
      finalAnswer: "Furniture purchased on credit for ₹50,000 has been recorded. The Furniture Account is debited (asset increases) and Creditor Account is credited (liability increases). The trial balance is balanced."
    };
  }
  
  // Default response for other questions
  return {
    question: question,
    steps: [
      {
        title: "Journal Entry",
        content: `Analyzing your question...

Please provide the specific transaction details for accurate journal entries.
Include: Amount, nature of transaction, cash/credit, and parties involved.`
      },
      {
        title: "Ledger Posting",
        content: `Ledger entries will be prepared based on the journal entries.

Format:
- Real Account: Debit what comes in, Credit what goes out
- Personal Account: Debit the receiver, Credit the giver
- Nominal Account: Debit expenses/losses, Credit incomes/gains`
      },
      {
        title: "Trial Balance",
        content: `Trial Balance will be extracted showing:
- All debit balances in the Debit column
- All credit balances in the Credit column
- Total of both columns should match`
      },
      {
        title: "Calculations",
        content: `Please provide complete transaction details for specific calculations.

Common calculations include:
- Depreciation
- Interest calculations
- Ratio analysis
- Profit/Loss computation`
      }
    ],
    finalAnswer: "Please provide complete transaction details for a comprehensive step-by-step solution aligned with CBSE syllabus."
  };
};

export default function AskQuestion() {
  const [question, setQuestion] = useState("");
  const [solution, setSolution] = useState<Solution | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdForDownload, setShowAdForDownload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (!question.trim()) {
      toast.error("Please enter a question");
      return;
    }

    setIsLoading(true);
    setSolution(null);

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = generateSolution(question);
    setSolution(result);
    setIsLoading(false);
    toast.success("Solution generated!");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, we would use OCR or document parsing
      toast.info("File uploaded! Processing...");
      setQuestion(`[Uploaded: ${file.name}] Please solve the accountancy problem shown in this file.`);
    }
  };

  const handleDownload = () => {
    setShowAdForDownload(true);
  };

  const proceedWithDownload = () => {
    if (!solution) return;
    
    // Create text content for PDF
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
              Type your question or upload an image/PDF of your problem
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Example: Prepare journal entries and ledger for purchase of furniture on credit Rs. 50,000"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[120px] border-input bg-background text-foreground"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={handleSubmit}
                disabled={isLoading || !question.trim()}
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
                accept="image/*,.pdf"
                className="hidden"
              />
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="gap-2 border-border text-foreground hover:bg-secondary"
              >
                <Upload className="h-4 w-4" />
                Upload File
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
