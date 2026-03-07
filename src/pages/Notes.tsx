import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Lock, Unlock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { chapters, Chapter } from "@/data/chapters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import AdSense from "@/components/ui/AdSense";

export default function Notes() {
  const navigate = useNavigate();
  const [showAdModal, setShowAdModal] = useState(false);
  const [pendingChapter, setPendingChapter] = useState<Chapter | null>(null);

  const class11Chapters = chapters.filter((c) => c.class === 11);
  const class12Chapters = chapters.filter((c) => c.class === 12);

  const handleChapterClick = (chapter: Chapter) => {
    if (chapter.isFree) {
      navigate(`/notes/${chapter.id}`);
    } else {
      setPendingChapter(chapter);
      setShowAdModal(true);
    }
  };

  const proceedAfterAd = () => {
    if (pendingChapter) {
      navigate(`/notes/${pendingChapter.id}`);
      setPendingChapter(null);
    }
    setShowAdModal(false);
    toast.success("Content unlocked!");
  };

  const ChapterList = ({ chapters }: { chapters: Chapter[] }) => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {chapters.map((chapter) => (
        <Card
          key={chapter.id}
          className="cursor-pointer border-border transition-all hover:shadow-md hover:border-primary/50"
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


        <Tabs defaultValue="class11" className="w-full">
          <TabsList className="mb-6 grid w-full max-w-md mx-auto grid-cols-2">
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
                <AdSense className="my-4" />
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
