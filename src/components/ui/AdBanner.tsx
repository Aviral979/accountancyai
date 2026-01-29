import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
  variant?: "banner" | "inline";
}

export function AdBanner({ className, variant = "banner" }: AdBannerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed border-muted-foreground/30 bg-muted/50 text-muted-foreground",
        variant === "banner" ? "h-20 w-full" : "h-32 w-full max-w-sm",
        className
      )}
    >
      <span className="text-sm font-medium">Advertisement Space</span>
    </div>
  );
}
