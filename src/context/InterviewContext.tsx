
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { InterviewLevel, InterviewSession, QuestionFeedback, Question } from '@/types/hr-interview';
import { questions } from '@/data/hr-questions';

interface InterviewContextType {
    session: InterviewSession | null;
    startInterview: (level: InterviewLevel) => void;
    submitAnswer: (feedback: QuestionFeedback) => void;
    nextQuestion: () => void;
    endInterview: () => void;
    getCurrentQuestion: () => Question | null;
    getProgress: () => { current: number; total: number };
    resetInterview: () => void;
}

const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

export const InterviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<InterviewSession | null>(null);

    const startInterview = useCallback((level: InterviewLevel) => {
        // Determine questions key. The source file likely exports an object with keys matching InterviewLevel
        // TypeScript might complain if keys don't match exactly. Assuming questions object has keys: fresher, professional, managerial
        const levelQuestions = questions[level as keyof typeof questions] || [];

        setSession({
            level,
            currentQuestionIndex: 0,
            questions: levelQuestions,
            answers: [],
            startTime: new Date(),
            isComplete: false,
        });
    }, []);

    const submitAnswer = useCallback((feedback: QuestionFeedback) => {
        setSession((prev) => {
            if (!prev) return null;
            return {
                ...prev,
                answers: [...prev.answers, feedback],
            };
        });
    }, []);

    const nextQuestion = useCallback(() => {
        setSession((prev) => {
            if (!prev) return null;
            const nextIndex = prev.currentQuestionIndex + 1;
            if (nextIndex >= prev.questions.length) {
                return {
                    ...prev,
                    isComplete: true,
                };
            }
            return {
                ...prev,
                currentQuestionIndex: nextIndex,
            };
        });
    }, []);

    const endInterview = useCallback(() => {
        setSession((prev) => {
            if (!prev) return null;
            return {
                ...prev,
                isComplete: true,
            };
        });
    }, []);

    const getCurrentQuestion = useCallback(() => {
        if (!session) return null;
        return session.questions[session.currentQuestionIndex] || null;
    }, [session]);

    const getProgress = useCallback(() => {
        if (!session) return { current: 0, total: 0 };
        return {
            current: session.currentQuestionIndex + 1,
            total: session.questions.length,
        };
    }, [session]);

    const resetInterview = useCallback(() => {
        setSession(null);
    }, []);

    return (
        <InterviewContext.Provider
            value={{
                session,
                startInterview,
                submitAnswer,
                nextQuestion,
                endInterview,
                getCurrentQuestion,
                getProgress,
                resetInterview,
            }}
        >
            {children}
        </InterviewContext.Provider>
    );
};

export const useInterview = () => {
    const context = useContext(InterviewContext);
    if (context === undefined) {
        throw new Error('useInterview must be used within an InterviewProvider');
    }
    return context;
};
