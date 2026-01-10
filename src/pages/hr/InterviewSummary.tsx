
import React from 'react';
import { useInterview } from '@/context/InterviewContext';
import SummaryReport from '@/components/hr/SummaryReport';

interface InterviewSummaryProps {
    onRestart: () => void;
}

const InterviewSummary: React.FC<InterviewSummaryProps> = ({ onRestart }) => {
    const { resetInterview, session } = useInterview();

    const handleRestart = () => {
        resetInterview();
        onRestart(); // Go back to level select
    };

    const handleHome = () => {
        resetInterview();
        onRestart(); // Same as restart for now, or use navigation if we had it.
    };

    // If no session data, usually redirect, but PracticeHub handles state.
    if (!session) return null;

    return <SummaryReport onRestart={handleRestart} onHome={handleHome} />;
};

export default InterviewSummary;
