import React from 'react';
import { Question } from '@/types/hr-interview';
import { MessageCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div className="card-elevated p-8 animate-slide-up">
      {/* Question badge */}
      <div className="flex items-center gap-2 mb-6">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: 'var(--gradient-hero)' }}
        >
          <MessageCircle className="w-4 h-4 text-primary-foreground" />
          <span className="text-primary-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
      </div>

      {/* Question text */}
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
        "{question.text}"
      </h2>

      {/* Tip */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
        <p className="text-sm text-muted-foreground">
          💡 <span className="font-medium">Tip:</span> Take a breath, structure your thoughts, and speak clearly.
          You have 60 seconds to answer.
        </p>
      </div>
    </div>
  );
};

export default QuestionCard;
