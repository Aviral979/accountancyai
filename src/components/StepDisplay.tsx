import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

interface Step {
  title: string;
  content: string;
}

interface StepDisplayProps {
  question: string;
  steps: Step[];
  finalAnswer: string;
}

export function StepDisplay({ question, steps, finalAnswer }: StepDisplayProps) {
  return (
    <div className="space-y-4">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-foreground">Question</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{question}</p>
        </CardContent>
      </Card>

      {steps.map((step, index) => (
        <Card key={index} className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                {index + 1}
              </span>
              {step.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap font-mono text-sm text-foreground bg-muted p-4 rounded-lg overflow-x-auto">
              {step.content}
            </pre>
          </CardContent>
        </Card>
      ))}

      <Card className="border-accent bg-accent/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-accent">
            <CheckCircle2 className="h-6 w-6" />
            Final Answer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium text-foreground">{finalAnswer}</p>
        </CardContent>
      </Card>
    </div>
  );
}
