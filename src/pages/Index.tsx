import { useNavigate, Link } from "react-router-dom";
import { BookOpen, FileQuestion, GraduationCap, Sparkles, CheckCircle } from "lucide-react";
import AdSense from "@/components/ui/AdSense";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileQuestion,
      title: "AI Question Solver",
      description: "Upload any accountancy question and get step-by-step CBSE-aligned solutions instantly.",
      path: "/ask"
    },
    {
      icon: BookOpen,
      title: "Chapter Notes",
      description: "Access comprehensive notes for all Class 11 & 12 chapters with examples and explanations.",
      path: "/notes"
    },
    {
      icon: GraduationCap,
      title: "Practice Quizzes",
      description: "Test your knowledge with chapter-wise MCQs and get instant feedback on your performance.",
      path: "/quiz"
    }
  ];

  const benefits = [
    "Step-by-step solutions for Journal, Ledger, Trial Balance",
    "100% aligned with CBSE syllabus",
    "Free access to Chapters 1 & 2",
    "PDF download for offline study",
    "No login or personal data required"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered CBSE Accountancy Help
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Master <span className="text-primary">Accountancy</span> with AI-Powered Learning
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Get instant, step-by-step solutions for Class 11 & 12 CBSE Accountancy questions. 
              Access chapter notes, practice quizzes, and ace your exams!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate("/ask")}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <FileQuestion className="h-5 w-5" />
                Ask a Question
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/notes")}
                className="gap-2 border-border text-foreground hover:bg-secondary"
              >
                <BookOpen className="h-5 w-5" />
                Browse Notes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need to Excel
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our comprehensive platform covers all aspects of CBSE Accountancy curriculum 
              with AI-powered assistance at your fingertips.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => navigate(feature.path)}
              />
            ))}
          </div>
          <AdSense className="mt-12" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y border-border bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Why Choose AccountancyAI?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-4 text-sm font-medium text-muted-foreground">Sample Solution</div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-foreground">
                    <span className="text-primary">Step 1:</span> Journal Entry
                  </div>
                  <div className="rounded bg-muted p-3 text-muted-foreground">
                    Furniture A/C Dr 50,000<br />
                    &nbsp;&nbsp;To Cash A/C 50,000
                  </div>
                  <div className="text-foreground">
                    <span className="text-primary">Step 2:</span> Ledger Posting
                  </div>
                  <div className="rounded bg-muted p-3 text-muted-foreground">
                    Furniture A/C: Dr ₹50,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to Start Learning?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Upload your first question and experience the power of AI-assisted accountancy learning.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate("/ask")}
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Sparkles className="h-5 w-5" />
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-8">
        <div className="container">
          <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/gdpr-notice" className="text-muted-foreground hover:text-primary transition-colors">GDPR Notice</Link>
            <Link to="/ccpa-notice" className="text-muted-foreground hover:text-primary transition-colors">CCPA Notice</Link>
            <Link to="/contact-us" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AccountancyAI Online. Designed for CBSE Class 11 & 12 Students.</p>
            <p className="mt-2">No login required. Your privacy is protected.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
