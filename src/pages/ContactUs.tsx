import { Mail, Globe, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12 md:py-20">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
        <p className="mb-8 text-muted-foreground">We would love to hear from you. Feel free to reach out with any questions, suggestions, or feedback.</p>

        <div className="space-y-8 text-foreground">
          <section>
            <p>
              Thank you for visiting AccountancyAI Online. Whether you have a question about our features, need help with the website, want to report an issue, or simply want to share your feedback, we are here to help.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Email Us</h3>
                <a href="mailto:aviralkumar9793@gmail.com" className="text-primary underline">aviralkumar9793@gmail.com</a>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Website</h3>
                <a href="https://accountancyai.online" className="text-primary underline">accountancyai.online</a>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Response Time</h3>
                <p className="text-muted-foreground">Within 48 hours</p>
              </CardContent>
            </Card>
          </div>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">What Can You Contact Us About?</h2>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Questions about how to use the website or its features</li>
              <li>Reporting errors in AI-generated solutions or notes</li>
              <li>Suggestions for new features or improvements</li>
              <li>Copyright concerns regarding any content on the website</li>
              <li>Privacy-related queries or data requests (GDPR/CCPA)</li>
              <li>Partnership or collaboration inquiries</li>
              <li>Technical issues or bugs on the website</li>
              <li>General feedback about your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Before You Contact Us</h2>
            <p>
              You may find answers to common questions by exploring our website. Our AI-powered tools, chapter notes, and quizzes are all accessible without login. If you encounter an issue with an AI-generated answer, try re-uploading the question with a clearer image for better results.
            </p>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-3 text-xl font-semibold">Get in Touch</h2>
            <p className="mb-4 text-muted-foreground">
              For any queries or feedback, please send us an email. We value every message and will do our best to respond within 48 hours.
            </p>
            <p className="font-medium">
              Email: <a href="mailto:aviralkumar9793@gmail.com" className="text-primary underline">aviralkumar9793@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
