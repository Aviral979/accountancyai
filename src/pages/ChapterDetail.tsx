import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { chapters } from "@/data/chapters";
import { toast } from "sonner";

export default function ChapterDetail() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();

  const chapter = chapters.find((c) => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => navigate("/notes")}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Notes
          </Button>
          <Card className="border-border">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">Chapter not found</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    if (chapter.pdfUrl) {
      const link = document.createElement("a");
      link.href = chapter.pdfUrl;
      link.download = `class-${chapter.class}-chapter-${chapter.number}-notes.pdf`;
      link.click();
      toast.success("PDF notes downloaded!");
      return;
    }

    // Fallback to text content for chapters without PDF
    const content = `
CBSE CLASS ${chapter.class} ACCOUNTANCY
CHAPTER ${chapter.number}: ${chapter.title}
${"=".repeat(50)}

${chapter.description}

TOPICS COVERED:
${chapter.topics.map((topic, i) => `${i + 1}. ${topic}`).join("\n")}

---
Notes from AccountancyAI
For CBSE Class ${chapter.class} Students
    `.trim();

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chapter-${chapter.number}-notes.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Notes downloaded!");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/notes")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Notes
        </Button>

        {/* Chapter Header */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    Class {chapter.class}
                  </Badge>
                  <CardTitle className="text-xl text-foreground">
                    Chapter {chapter.number}: {chapter.title}
                  </CardTitle>
                </div>
              </div>
              <Button onClick={handleDownload} className="gap-2">
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">{chapter.description}</p>
            <div>
              <h4 className="mb-2 font-medium text-foreground">
                Topics Covered:
              </h4>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {chapter.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* PDF Viewer */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-foreground">
              <FileText className="h-5 w-5" />
              Chapter Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {chapter.pdfUrl ? (
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  src={chapter.pdfUrl}
                  className="h-[600px] w-full md:h-[800px]"
                  title={`Chapter ${chapter.number} Notes`}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
                <FileText className="mb-4 h-12 w-12 text-muted-foreground" />
                <p className="mb-2 text-lg font-medium text-foreground">
                  PDF Notes Coming Soon
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  PDF notes for this chapter are not available yet.
                </p>
                <Button variant="outline" onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Text Notes
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
