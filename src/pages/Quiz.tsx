import { useState } from "react";
import { GraduationCap, CheckCircle2, XCircle, Trophy, RotateCcw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { quizzes, Quiz, QuizQuestion } from "@/data/quizzes";
import { chapters } from "@/data/chapters";
import { toast } from "sonner";
import AdSense from "@/components/ui/AdSense";

const difficultyColors = {
  easy: "bg-accent/20 text-accent border-accent",
  medium: "bg-amber-500/20 text-amber-600 border-amber-500",
  hard: "bg-destructive/20 text-destructive border-destructive"
};

const difficultyLabels = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard"
};

export default function QuizPage() {
  const [selectedClass, setSelectedClass] = useState<"11" | "12">("11");
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showAdForResults, setShowAdForResults] = useState(false);

  const class11Quizzes = quizzes.filter(q => q.chapterId.startsWith("11-"));
  const class12Quizzes = quizzes.filter(q => q.chapterId.startsWith("12-"));

  const handleQuizSelect = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (selectedQuiz && currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowAdForResults(true);
  };

  const showQuizResults = () => {
    setShowAdForResults(false);
    setShowResults(true);
    toast.success("Quiz completed!");
  };

  const calculateScore = () => {
    if (!selectedQuiz) return { correct: 0, total: 0, percentage: 0, byDifficulty: { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } } };
    
    let correct = 0;
    const byDifficulty = {
      easy: { correct: 0, total: 0 },
      medium: { correct: 0, total: 0 },
      hard: { correct: 0, total: 0 }
    };

    selectedQuiz.questions.forEach((q) => {
      byDifficulty[q.difficulty].total++;
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
        byDifficulty[q.difficulty].correct++;
      }
    });
    
    return {
      correct,
      total: selectedQuiz.questions.length,
      percentage: Math.round((correct / selectedQuiz.questions.length) * 100),
      byDifficulty
    };
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const currentQuestion: QuizQuestion | undefined = selectedQuiz?.questions[currentQuestionIndex];
  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = selectedQuiz ? (answeredCount / selectedQuiz.questions.length) * 100 : 0;

  const renderQuizList = (quizList: Quiz[]) => (
    <div className="grid gap-4 md:grid-cols-2">
      {quizList.map((quiz) => {
        const chapter = chapters.find((c) => c.id === quiz.chapterId);
        const easyCount = quiz.questions.filter(q => q.difficulty === "easy").length;
        const mediumCount = quiz.questions.filter(q => q.difficulty === "medium").length;
        const hardCount = quiz.questions.filter(q => q.difficulty === "hard").length;
        
        return (
          <Card
            key={quiz.id}
            className="cursor-pointer border-border transition-all hover:shadow-md hover:border-primary/50"
            onClick={() => handleQuizSelect(quiz)}
          >
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <CardTitle className="text-foreground text-lg">{quiz.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {chapter && `Chapter ${chapter.number}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge variant="secondary">{quiz.questions.length} Questions</Badge>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">{easyCount} Easy</span>
                <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-600">{mediumCount} Medium</span>
                <span className="text-xs px-2 py-1 rounded-full bg-destructive/20 text-destructive">{hardCount} Hard</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Practice Quizzes</h1>
          <p className="text-muted-foreground">
            Test your knowledge with chapter-wise MCQs
          </p>
        </div>

        {!selectedQuiz ? (
          // Quiz Selection with Class Tabs
          <Tabs value={selectedClass} onValueChange={(v) => setSelectedClass(v as "11" | "12")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="11" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Class 11
              </TabsTrigger>
              <TabsTrigger value="12" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Class 12
              </TabsTrigger>
            </TabsList>
            <TabsContent value="11">
              {class11Quizzes.length > 0 ? (
                renderQuizList(class11Quizzes)
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No quizzes available for Class 11 yet.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="12">
              {class12Quizzes.length > 0 ? (
                renderQuizList(class12Quizzes)
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No quizzes available for Class 12 yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        ) : showResults ? (
          // Results View with Difficulty
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Quiz Complete!</CardTitle>
              <CardDescription className="text-muted-foreground">
                {selectedQuiz.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary">
                  {calculateScore().percentage}%
                </div>
                <p className="mt-2 text-muted-foreground">
                  {calculateScore().correct} out of {calculateScore().total} correct
                </p>
              </div>

              {/* Score by Difficulty */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="text-lg font-bold text-accent">
                    {calculateScore().byDifficulty.easy.correct}/{calculateScore().byDifficulty.easy.total}
                  </div>
                  <p className="text-xs text-muted-foreground">Easy</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <div className="text-lg font-bold text-amber-600">
                    {calculateScore().byDifficulty.medium.correct}/{calculateScore().byDifficulty.medium.total}
                  </div>
                  <p className="text-xs text-muted-foreground">Medium</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <div className="text-lg font-bold text-destructive">
                    {calculateScore().byDifficulty.hard.correct}/{calculateScore().byDifficulty.hard.total}
                  </div>
                  <p className="text-xs text-muted-foreground">Hard</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Review Answers:</h3>
                {selectedQuiz.questions.map((question, index) => {
                  const isCorrect = selectedAnswers[question.id] === question.correctAnswer;
                  return (
                    <Card key={question.id} className={`border-l-4 ${isCorrect ? "border-l-accent" : "border-l-destructive"}`}>
                      <CardContent className="pt-4">
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                          ) : (
                            <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium text-foreground">
                                Q{index + 1}: {question.question}
                              </p>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${difficultyColors[question.difficulty]}`}
                              >
                                {difficultyLabels[question.difficulty]}
                              </Badge>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Correct: {question.options[question.correctAnswer]}
                            </p>
                            {!isCorrect && (
                              <p className="mt-1 text-sm text-destructive">
                                Your answer: {question.options[selectedAnswers[question.id]]}
                              </p>
                            )}
                            <p className="mt-2 text-sm text-muted-foreground italic">
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Button onClick={resetQuiz} className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <RotateCcw className="h-4 w-4" />
                Take Another Quiz
              </Button>
            </CardContent>
          </Card>
        ) : (
          // Quiz Questions (difficulty hidden)
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={resetQuiz}
                className="text-muted-foreground hover:text-foreground"
              >
                ← Back to Quizzes
              </Button>
              <Badge variant="secondary">
                {answeredCount}/{selectedQuiz.questions.length} Answered
              </Badge>
            </div>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">{selectedQuiz.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
                  </span>
                </div>
                <Progress value={progress} className="mt-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                {currentQuestion && (
                  <>
                    <p className="text-lg font-medium text-foreground">
                      {currentQuestion.question}
                    </p>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswers[currentQuestion.id] === index;
                        return (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                            className={`w-full rounded-lg border p-4 text-left transition-all ${
                              isSelected
                                ? "border-primary bg-primary/10 text-foreground"
                                : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-secondary"
                            }`}
                          >
                            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-sm">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="flex-1 border-border text-foreground hover:bg-secondary"
                  >
                    Previous
                  </Button>
                  {currentQuestionIndex < selectedQuiz.questions.length - 1 ? (
                    <Button
                      onClick={handleNextQuestion}
                      disabled={selectedAnswers[currentQuestion?.id || ""] === undefined}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmitQuiz}
                      disabled={answeredCount !== selectedQuiz.questions.length}
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Submit Quiz
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Ad Modal for Results */}
        {showAdForResults && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
            <Card className="w-full max-w-md border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">View Your Results</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Watch a short ad to see your quiz score and answers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <AdSense className="my-4" />
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowAdForResults(false)}
                    className="flex-1 border-border text-foreground hover:bg-secondary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={showQuizResults}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    View Results
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
