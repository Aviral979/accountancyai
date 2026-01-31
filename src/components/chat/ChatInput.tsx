import { useRef, useState, useEffect } from "react";
import { Send, Paperclip, Loader2, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onFileUpload: (file: File) => void;
  isLoading: boolean;
  isOCRProcessing: boolean;
  ocrProgress: number;
  disabled?: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  onFileUpload,
  isLoading,
  isOCRProcessing,
  ocrProgress,
  disabled
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && !isOCRProcessing && value.trim()) {
        onSubmit();
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isDisabled = disabled || isLoading || isOCRProcessing;

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* OCR Progress Overlay */}
      {isOCRProcessing && (
        <div className="mb-3 bg-card border border-border rounded-xl p-3 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <ImageIcon className="h-4 w-4 animate-pulse text-primary" />
            <span>Extracting text from image... {ocrProgress}%</span>
          </div>
          <Progress value={ocrProgress} className="h-1.5" />
        </div>
      )}

      {/* Input Container */}
      <div
        className={cn(
          "relative flex items-end gap-2 bg-card border rounded-2xl p-2 transition-all duration-200",
          isFocused ? "border-primary ring-2 ring-primary/20" : "border-border",
          isDisabled && "opacity-60"
        )}
      >
        {/* File Upload Button */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => fileInputRef.current?.click()}
          disabled={isDisabled}
          className="flex-shrink-0 h-9 w-9 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted"
        >
          <Paperclip className="h-5 w-5" />
        </Button>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type your accountancy question..."
          disabled={isDisabled}
          rows={1}
          className={cn(
            "flex-1 resize-none bg-transparent border-0 outline-none text-sm md:text-base text-foreground placeholder:text-muted-foreground",
            "min-h-[36px] max-h-[200px] py-2 px-1"
          )}
        />

        {/* Send Button */}
        <Button
          type="button"
          size="icon"
          onClick={onSubmit}
          disabled={isDisabled || !value.trim()}
          className={cn(
            "flex-shrink-0 h-9 w-9 rounded-xl transition-all",
            value.trim() && !isDisabled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-muted-foreground"
          )}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Helper Text */}
      <p className="text-xs text-muted-foreground text-center mt-2">
        Press Enter to send, Shift+Enter for new line
      </p>
    </div>
  );
}
