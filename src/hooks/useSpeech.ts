import { useState, useEffect, useCallback, useRef } from 'react';

// Type definitions for Web Speech API
interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start: () => void;
    stop: () => void;
    abort: () => void;
    onresult: (event: any) => void;
    onerror: (event: any) => void;
    onend: () => void;
}

declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

interface UseSpeechReturn {
    isListening: boolean;
    transcript: string;
    interimTranscript: string;
    startListening: () => void;
    stopListening: () => void;
    resetTranscript: () => void;
    speak: (text: string, lang?: string) => void;
    isSpeaking: boolean;
    cancelSpeech: () => void;
    hasRecognitionSupport: boolean;
    hasSynthesisSupport: boolean;
}

export const useSpeech = (language: string = 'en-US'): UseSpeechReturn => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [interimTranscript, setInterimTranscript] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);

    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const hasRecognitionSupport = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    const hasSynthesisSupport = 'speechSynthesis' in window;

    useEffect(() => {
        if (!hasRecognitionSupport) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = language;

        recognition.onresult = (event: any) => {
            let finalTranscript = '';
            let currentInterim = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    currentInterim += event.results[i][0].transcript;
                }
            }

            if (finalTranscript) {
                setTranscript(prev => prev + ' ' + finalTranscript);
            }
            setInterimTranscript(currentInterim);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = recognition;

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
        };
    }, [language, hasRecognitionSupport]);

    const startListening = useCallback(() => {
        if (recognitionRef.current && !isListening) {
            try {
                recognitionRef.current.start();
                setIsListening(true);
            } catch (error) {
                console.error('Error starting recognition:', error);
            }
        }
    }, [isListening]);

    const stopListening = useCallback(() => {
        if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
    }, [isListening]);

    const resetTranscript = useCallback(() => {
        setTranscript('');
        setInterimTranscript('');
    }, []);

    const speak = useCallback((text: string, lang: string = language) => {
        if (!hasSynthesisSupport) return;

        // Cancel any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;

        // Try to find a specific voice for this language
        const voices = window.speechSynthesis.getVoices();
        // Priority: Exact match -> Includes identifier -> Standard fallback
        const targetVoice = voices.find(v => v.lang === lang)
            || voices.find(v => v.lang.includes(lang.replace('-', '_'))) // Android/some browsers use underscore
            || voices.find(v => v.name.includes('India') && lang === 'en-IN') // Specific fallback for Indian English if labeled by name
            || voices.find(v => v.lang.startsWith(lang.split('-')[0]));

        if (targetVoice) {
            utterance.voice = targetVoice;
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    }, [language, hasSynthesisSupport]);

    const cancelSpeech = useCallback(() => {
        if (hasSynthesisSupport) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    }, [hasSynthesisSupport]);

    return {
        isListening,
        transcript: transcript.trim(),
        interimTranscript,
        startListening,
        stopListening,
        resetTranscript,
        speak,
        isSpeaking,
        cancelSpeech,
        hasRecognitionSupport,
        hasSynthesisSupport
    };
};
