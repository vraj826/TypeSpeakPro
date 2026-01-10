export type InterviewLevel = 'fresher' | 'professional' | 'managerial';

export interface Question {
  id: number;
  text: string;
  level: InterviewLevel;
}

export interface FeedbackScores {
  grammar: number;
  fluency: number;
  confidence: number;
  relevance: number;
}

export interface QuestionFeedback {
  questionId: number;
  transcribedAnswer: string;
  scores: FeedbackScores;
  corrections: string[];
  improvementTips: string[];
  betterAnswer?: string;
}

export interface InterviewSession {
  level: InterviewLevel;
  currentQuestionIndex: number;
  questions: Question[];
  answers: QuestionFeedback[];
  startTime: Date;
  isComplete: boolean;
}

export interface InterviewSummary {
  totalQuestions: number;
  averageScores: FeedbackScores;
  strongAreas: string[];
  weakAreas: string[];
  overallScore: number;
  duration: number; // in minutes
}
