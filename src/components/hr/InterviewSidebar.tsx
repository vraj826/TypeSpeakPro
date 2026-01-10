import React from 'react';
import { useInterview } from '@/context/InterviewContext';
import { levelInfo } from '@/data/hr-questions';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { LogOut, Clock, Target } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface InterviewSidebarProps {
  onExit: () => void;
}

const InterviewSidebar: React.FC<InterviewSidebarProps> = ({ onExit }) => {
  const { session, getProgress } = useInterview();
  const progress = getProgress();

  if (!session) return null;

  const levelData = levelInfo[session.level];
  const progressPercentage = (progress.current / progress.total) * 100;

  return (
    <aside className="w-72 bg-card border-r border-border flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Logo size="md" />
      </div>

      {/* Level info */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{levelData.icon}</span>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Level</p>
            <p className="font-semibold text-foreground">{levelData.title}</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Progress</span>
        </div>

        {/* Progress bar */}
        <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-2">
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
            style={{
              width: `${progressPercentage}%`,
              background: 'var(--gradient-hero)',
            }}
          />
        </div>

        <p className="text-sm text-muted-foreground">
          Question <span className="font-semibold text-foreground">{progress.current}</span> of {progress.total}
        </p>
      </div>

      {/* Stats */}
      <div className="p-6 flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-foreground">Session Info</span>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Language: <span className="font-medium text-foreground">English</span></p>
          <p>Completed: <span className="font-medium text-foreground">{session.answers.length}</span></p>
        </div>
      </div>

      {/* Exit button */}
      <div className="p-6 border-t border-border">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full" size="lg">
              <LogOut className="w-4 h-4 mr-2" />
              End Interview
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>End Interview?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to end this interview? Your progress will be saved and you'll see your summary.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Continue Interview</AlertDialogCancel>
              <AlertDialogAction onClick={onExit}>
                End & View Summary
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </aside>
  );
};

export default InterviewSidebar;
