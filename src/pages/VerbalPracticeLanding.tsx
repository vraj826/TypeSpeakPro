
import { useNavigate } from 'react-router-dom';
import { verbalCategories, Category } from '../data/verbalQuestions';
import { ArrowLeft, Brain, Sparkles, BookOpen, MessageSquare, Quote, MoveRight, PenTool, Megaphone, Repeat, Blocks, Clock, Type, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VerbalPracticeLanding = () => {
    const navigate = useNavigate();

    const getIcon = (iconName: string) => {
        // Since we stored emojis/strings in data, we can just render them or map to Lucide icons if we change data
        // specific mapping for Lucide icons based on category ID for better visual
        return iconName;
    };

    const getLucideIcon = (id: string) => {
        switch (id) {
            case 'synonyms': return <BookOpen className="w-8 h-8" />;
            case 'antonyms': return <MoveRight className="w-8 h-8" />;
            case 'one-word': return <Brain className="w-8 h-8" />;
            case 'idioms': return <MessageSquare className="w-8 h-8" />;
            case 'spelling': return <Quote className="w-8 h-8" />; // Using quote as a placeholder or maybe TYPE
            case 'sentence-correction': return <PenTool className="w-8 h-8" />;
            case 'voice-change': return <Megaphone className="w-8 h-8" />;
            case 'narration': return <Repeat className="w-8 h-8" />;
            case 'parts-of-speech': return <Blocks className="w-8 h-8" />;
            case 'tense': return <Clock className="w-8 h-8" />;
            case 'articles': return <Type className="w-8 h-8" />;
            case 'prepositions': return <MapPin className="w-8 h-8" />;
            default: return <Sparkles className="w-8 h-8" />;
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar forceOpaque={true} />
            <main className="flex-1 p-6 md:p-8 pt-24">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-12">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Dashboard
                    </button>

                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-xs font-medium text-primary uppercase tracking-wider">Skill Building</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading">
                            Verbal Ability Practice
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Master English vocabulary and grammar through interactive challenges.
                            Choose a category to start your 20-second sprint per question.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {verbalCategories.map((category: Category) => (
                        <div
                            key={category.id}
                            onClick={() => navigate(`/verbal-practice/${category.id}`)}
                            className="group relative cursor-pointer"
                        >
                            {/* Card Content */}
                            <div className="h-full bg-card hover:bg-accent/5 transition-all duration-300 border border-border/50 hover:border-primary/50 rounded-2xl p-6 overflow-hidden relative">
                                {/* Gradient Background Effect on Hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${category.color}`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {getLucideIcon(category.id)}
                                        </div>
                                        <div className="bg-background/80 backdrop-blur px-3 py-1 rounded-full border border-border/50">
                                            <span className="text-xs font-semibold text-muted-foreground">
                                                {category.questions.length} Qs
                                            </span>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="space-y-2 mb-8 flex-grow">
                                        <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* Footer Action */}
                                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        Start Practice <MoveRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default VerbalPracticeLanding;
