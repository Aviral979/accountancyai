import { useState } from "react";
import { BookOpen, Download, Lock, Unlock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdBanner } from "@/components/ui/AdBanner";
import { chapters, Chapter } from "@/data/chapters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function Notes() {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [showAdModal, setShowAdModal] = useState(false);
  const [pendingChapter, setPendingChapter] = useState<Chapter | null>(null);

  const class11Chapters = chapters.filter((c) => c.class === 11);
  const class12Chapters = chapters.filter((c) => c.class === 12);

  const handleChapterClick = (chapter: Chapter) => {
    if (chapter.isFree) {
      setSelectedChapter(chapter);
    } else {
      setPendingChapter(chapter);
      setShowAdModal(true);
    }
  };

  const proceedAfterAd = () => {
    if (pendingChapter) {
      setSelectedChapter(pendingChapter);
      setPendingChapter(null);
    }
    setShowAdModal(false);
    toast.success("Content unlocked!");
  };

  const handleDownload = (chapter: Chapter) => {
    const content = `
CBSE CLASS ${chapter.class} ACCOUNTANCY
CHAPTER ${chapter.number}: ${chapter.title}
${'='.repeat(50)}

${chapter.description}

TOPICS COVERED:
${chapter.topics.map((topic, i) => `${i + 1}. ${topic}`).join('\n')}

---
Notes from AccountancyAI
For CBSE Class ${chapter.class} Students
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chapter-${chapter.number}-notes.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Notes downloaded!");
  };

  const ChapterList = ({ chapters }: { chapters: Chapter[] }) => (
    <div className="grid gap-4 md:grid-cols-2">
      {chapters.map((chapter) => (
        <Card
          key={chapter.id}
          className={`cursor-pointer border-border transition-all hover:shadow-md ${
            selectedChapter?.id === chapter.id ? "ring-2 ring-primary" : ""
          }`}
          onClick={() => handleChapterClick(chapter)}
        >
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <Badge
                variant={chapter.isFree ? "default" : "secondary"}
                className={chapter.isFree ? "bg-accent text-accent-foreground" : ""}
              >
                {chapter.isFree ? (
                  <>
                    <Unlock className="mr-1 h-3 w-3" /> Free
                  </>
                ) : (
                  <>
                    <Lock className="mr-1 h-3 w-3" /> Watch Ad
                  </>
                )}
              </Badge>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
            <CardTitle className="mt-2 text-lg text-foreground">
              Chapter {chapter.number}: {chapter.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-2 text-muted-foreground">
              {chapter.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Chapter Notes</h1>
          <p className="text-muted-foreground">
            Comprehensive notes for CBSE Class 11 & 12 Accountancy
          </p>
        </div>

        <AdBanner className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Chapter List */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="class11" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-2">
                <TabsTrigger value="class11">Class 11</TabsTrigger>
                <TabsTrigger value="class12">Class 12</TabsTrigger>
              </TabsList>
              <TabsContent value="class11">
                <ChapterList chapters={class11Chapters} />
              </TabsContent>
              <TabsContent value="class12">
                <ChapterList chapters={class12Chapters} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Selected Chapter Details */}
          <div className="lg:col-span-1">
            {selectedChapter ? (
              <Card className="sticky top-24 border-border">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-foreground">
                    Chapter {selectedChapter.number}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground">
                    {selectedChapter.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{selectedChapter.description}</p>
                  
                  <div>
                    <h4 className="mb-2 font-medium text-foreground">Topics Covered:</h4>
                    <ul className="space-y-1.5">
                      {selectedChapter.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleDownload(selectedChapter)}
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" />
                    Download Notes
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="sticky top-24 border-dashed border-border">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Select a chapter to view details
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Ad Modal for Locked Content */}
        {showAdModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
            <Card className="w-full max-w-md border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Unlock Chapter</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Watch a short ad to access this chapter's content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <AdBanner variant="inline" />
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowAdModal(false);
                      setPendingChapter(null);
                    }}
                    className="flex-1 border-border text-foreground hover:bg-secondary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={proceedAfterAd}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Continue
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
