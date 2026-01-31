import { Bot, User, Copy, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SolutionStep {
  title: string;
  content: string;
}

interface ChatMessageProps {
  type: "user" | "ai";
  content: string;
  steps?: SolutionStep[];
  finalAnswer?: string;
  isLoading?: boolean;
}

export function ChatMessage({ type, content, steps, finalAnswer, isLoading }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);
  const [openSteps, setOpenSteps] = useState<number[]>([0]); // First step open by default

  const handleCopy = () => {
    const fullContent = steps
      ? `${content}\n\n${steps.map((s, i) => `Step ${i + 1}: ${s.title}\n${s.content}`).join("\n\n")}\n\nFinal Answer: ${finalAnswer}`
      : content;
    
    navigator.clipboard.writeText(fullContent);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleStep = (index: number) => {
    setOpenSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (type === "user") {
    return (
      <div className="flex justify-end animate-fade-in">
        <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%]">
          <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
            <p className="text-sm md:text-base whitespace-pre-wrap">{content}</p>
          </div>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start animate-fade-in">
      <div className="flex items-start gap-3 max-w-[85%] md:max-w-[80%]">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <Bot className="h-4 w-4 text-accent" />
        </div>
        <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm space-y-3">
          {isLoading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-sm">Generating solution...</span>
            </div>
          ) : (
            <>
              {steps && steps.length > 0 && (
                <div className="space-y-2">
                  {steps.map((step, index) => (
                    <Collapsible
                      key={index}
                      open={openSteps.includes(index)}
                      onOpenChange={() => toggleStep(index)}
                    >
                      <CollapsibleTrigger className="flex items-center gap-2 w-full text-left hover:bg-muted/50 rounded-lg p-2 -mx-2 transition-colors">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                          {index + 1}
                        </span>
                        <span className="font-medium text-sm text-foreground flex-1">{step.title}</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform",
                          openSteps.includes(index) && "rotate-180"
                        )} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-8 pt-2">
                        <pre className="whitespace-pre-wrap font-mono text-xs md:text-sm text-foreground bg-muted p-3 rounded-lg overflow-x-auto">
                          {step.content}
                        </pre>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              )}

              {finalAnswer && (
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-accent mb-1">Final Answer</p>
                      <p className="text-sm text-foreground">{finalAnswer}</p>
                    </div>
                  </div>
                </div>
              )}

              {!steps && content && (
                <p className="text-sm md:text-base text-foreground whitespace-pre-wrap">{content}</p>
              )}

              <div className="flex justify-end pt-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-7 px-2 text-muted-foreground hover:text-foreground"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
