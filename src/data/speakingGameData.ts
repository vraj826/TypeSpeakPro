export type Language = 'English' | 'Hindi' | 'Spanish' | 'French';
export type Level = 'Beginner' | 'Intermediate' | 'Advanced';
export type AvatarId = 'adventurer' | 'professional' | 'student' | 'robot';

export interface UserProfile {
    name: string;
    language: Language;
    level: Level;
    avatar: AvatarId;
    xp: number;
    coins: number;
    streak: number;
    unlockedZones: number[]; // Zone IDs
}

export const AVATARS = [
    { id: 'adventurer', name: 'The Explorer', emoji: '🧭', style: 'bg-orange-500/10 border-orange-500/50 text-orange-400' },
    { id: 'professional', name: 'The Pro', emoji: '💼', style: 'bg-blue-500/10 border-blue-500/50 text-blue-400' },
    { id: 'student', name: 'The Learner', emoji: '📚', style: 'bg-green-500/10 border-green-500/50 text-green-400' },
    { id: 'robot', name: 'The Bot', emoji: '🤖', style: 'bg-purple-500/10 border-purple-500/50 text-purple-400' },
] as const;

export const ZONES = [
    { id: 1, name: 'Home & Daily Life', icon: '🏠', levelReq: 'Beginner', description: 'Master basic greetings and daily routines.' },
    { id: 2, name: 'Market & Shopping', icon: '🛒', levelReq: 'Beginner', description: 'Learn to bargain and buy essentials.' },
    { id: 3, name: 'Travel & Transport', icon: '✈️', levelReq: 'Intermediate', description: 'Navigate airports, stations, and asking directions.' },
    { id: 4, name: 'Office & Workplace', icon: '🏢', levelReq: 'Intermediate', description: 'Meetings, emails, and watercooler chats.' },
    { id: 5, name: 'Public Speaking', icon: '🎤', levelReq: 'Advanced', description: 'Confidence in front of a crowd.' },
];
