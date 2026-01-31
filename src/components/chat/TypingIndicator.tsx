import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <Bot className="h-4 w-4 text-accent" />
        </div>
        <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              <span 
                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
                style={{ animationDelay: "0ms", animationDuration: "0.6s" }} 
              />
              <span 
                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
                style={{ animationDelay: "150ms", animationDuration: "0.6s" }} 
              />
              <span 
                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
                style={{ animationDelay: "300ms", animationDuration: "0.6s" }} 
              />
            </div>
            <span className="text-sm">AI is thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
