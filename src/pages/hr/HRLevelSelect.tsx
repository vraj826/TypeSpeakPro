
import React, { useState } from 'react';
import { InterviewLevel } from '@/types/hr-interview';
import { useInterview } from '@/context/InterviewContext';
import LevelCard from '@/components/hr/LevelCard';
import Logo from '@/components/hr/Logo';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Sparkles } from 'lucide-react';

interface HRLevelSelectProps {
    onStart: (config: any) => void;
}

const HRLevelSelect: React.FC<HRLevelSelectProps> = ({ onStart }) => {
    const [selectedLevel, setSelectedLevel] = useState<InterviewLevel | null>(null);
    const { startInterview } = useInterview();

    const handleStart = () => {
        if (selectedLevel) {
            startInterview(selectedLevel);
            onStart({ level: selectedLevel });
        }
    };

    const levels: InterviewLevel[] = ['fresher', 'professional', 'managerial'];

    return (
        <div className="min-h-screen py-12 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <Logo size="lg" />

                    <h1 className="font-heading text-4xl md:text-5xl font-bold mt-8 mb-4 text-foreground">
                        HR Interview <span className="gradient-text">Practice</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Master your interview skills with AI-powered voice practice.
                        Get real-time feedback on grammar, fluency, confidence, and more.
                    </p>
                </div>

                {/* Language badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                        <Globe className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Language: English</span>
                        <span className="text-xs text-muted-foreground">(Fixed)</span>
                    </div>
                </div>

                {/* Level selection */}
                <div className="mb-12">
                    <h2 className="font-heading text-xl font-semibold text-center mb-6 text-foreground">
                        Select Your Experience Level
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {levels.map((level, index) => (
                            <div
                                key={level}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <LevelCard
                                    level={level}
                                    isSelected={selectedLevel === level}
                                    onSelect={setSelectedLevel}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Start button */}
                <div className="flex flex-col items-center gap-4">
                    <Button
                        onClick={handleStart}
                        disabled={!selectedLevel}
                        variant="default"
                        size="lg" // 'xl' might not exist in shadcn default, changed to lg
                        className="min-w-[200px]"
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Start Interview
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    {!selectedLevel && (
                        <p className="text-sm text-muted-foreground animate-pulse">
                            ↑ Select a level to begin
                        </p>
                    )}
                </div>

                {/* Features preview */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
                    {[
                        { icon: '🎤', title: 'Voice-Based', desc: 'Practice speaking naturally' },
                        { icon: '🤖', title: 'AI Feedback', desc: 'Get instant analysis' },
                        { icon: '📈', title: 'Track Progress', desc: 'Improve with each session' },
                    ].map((feature, index) => (
                        <div
                            key={feature.title}
                            className="p-6 rounded-xl bg-muted/30 animate-fade-in"
                            style={{ animationDelay: `${(index + 3) * 100}ms` }}
                        >
                            <span className="text-3xl mb-3 block">{feature.icon}</span>
                            <h3 className="font-heading font-semibold mb-1 text-foreground">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HRLevelSelect;
