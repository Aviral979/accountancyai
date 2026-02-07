export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface Quiz {
  id: string;
  chapterId: string;
  title: string;
  questions: QuizQuestion[];
}

import { class11Quizzes } from "./quizzes-class11";
import { class12Quizzes } from "./quizzes-class12";

export const quizzes: Quiz[] = [...class11Quizzes, ...class12Quizzes];
