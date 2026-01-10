import React from 'react';
import { QuestionFeedback } from '@/types/hr-interview';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Lightbulb, ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeedbackPanelProps {
  feedback: QuestionFeedback;
  onNext: () => void;
  isLastQuestion: boolean;
}

const FeedbackPanel: React.FC<FeedbackPanelProps> = ({ feedback, onNext, isLastQuestion }) => {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'high';
    if (score >= 5) return 'medium';
    return 'low';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    if (score >= 4) return 'Fair';
    return 'Needs Work';
  };

  const scores = [
    { label: 'Grammar', value: feedback.scores.grammar },
    { label: 'Fluency', value: feedback.scores.fluency },
    { label: 'Confidence', value: feedback.scores.confidence },
    { label: 'Relevance', value: feedback.scores.relevance },
  ];

  const averageScore = (
    feedback.scores.grammar +
    feedback.scores.fluency +
    feedback.scores.confidence +
    feedback.scores.relevance
  ) / 4;

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Overall Score */}
      <div className="card-elevated p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Overall Score</span>
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="font-heading text-5xl font-bold gradient-text">
            {averageScore.toFixed(1)}
          </span>
          <span className="text-2xl text-muted-foreground">/10</span>
        </div>
        <span className={cn(
          'score-badge mt-2',
          getScoreColor(averageScore)
        )}>
          {getScoreLabel(averageScore)}
        </span>
      </div>

      {/* Score breakdown */}
      <div className="card-elevated p-6">
        <h3 className="font-heading font-semibold mb-4 text-foreground">Score Breakdown</h3>
        <div className="grid grid-cols-2 gap-4">
          {scores.map((score) => (
            <div key={score.label} className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">{score.label}</p>
              <p className="font-heading text-2xl font-bold text-foreground">{score.value}</p>
              <span className={cn('score-badge text-xs mt-1', getScoreColor(score.value))}>
                {getScoreLabel(score.value)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transcribed Answer */}
      <div className="card-elevated p-6">
        <div className="flex items-center gap-2 mb-3">
          <MessageIcon className="w-5 h-5 text-primary" />
          <h3 className="font-heading font-semibold text-foreground">Your Answer</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed bg-muted/30 p-4 rounded-lg">
          "{feedback.transcribedAnswer}"
        </p>
      </div>

      {/* Corrections */}
      {feedback.corrections.length > 0 && (
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-warning" />
            <h3 className="font-heading font-semibold text-foreground">Suggested Corrections</h3>
          </div>
          <ul className="space-y-2">
            {feedback.corrections.map((correction, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-warning">•</span>
                <span className="text-muted-foreground">{correction}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Better Answer */}
      {feedback.betterAnswer && (
        <div className="card-elevated p-6 border-l-4 border-success">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-success" />
            <h3 className="font-heading font-semibold text-foreground">Suggested Better Answer</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed italic">
            "{feedback.betterAnswer}"
          </p>
        </div>
      )}

      {/* Improvement Tips */}
      {feedback.improvementTips.length > 0 && (
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-secondary" />
            <h3 className="font-heading font-semibold text-foreground">Improvement Tips</h3>
          </div>
          <ul className="space-y-3">
            {feedback.improvementTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-secondary/10 rounded-lg">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-medium text-secondary">
                  {index + 1}
                </span>
                <span className="text-sm text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Next button */}
      <Button
        onClick={onNext}
        variant="hero"
        size="lg"
        className="w-full"
      >
        {isLastQuestion ? 'View Summary' : 'Next Question'}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};

const MessageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default FeedbackPanel;
