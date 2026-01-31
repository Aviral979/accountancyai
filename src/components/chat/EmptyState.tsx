import { BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onExampleClick: (question: string) => void;
}

const exampleQuestions = [
  "Prepare journal entries for purchase of machinery on credit ₹50,000",
  "Explain depreciation methods with examples",
  "Trial balance from given ledger accounts",
  "Bank reconciliation statement preparation",
  "Rectification of errors in trial balance",
];

export function EmptyState({ onExampleClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 animate-fade-in">
      {/* Logo */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
          <BookOpen className="h-8 w-8 text-primary-foreground" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
          <Sparkles className="h-3 w-3 text-accent-foreground" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
        AccountancyAI
      </h1>
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Ask any CBSE Class 11 & 12 Accountancy question and get step-by-step solutions instantly
      </p>

      {/* Example Questions */}
      <div className="w-full max-w-2xl">
        <p className="text-sm text-muted-foreground text-center mb-4">
          Try asking:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {exampleQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => onExampleClick(question)}
              className="text-xs md:text-sm h-auto py-2 px-3 rounded-full border-border hover:border-primary hover:bg-primary/5 text-foreground whitespace-normal text-left"
            >
              {question}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
