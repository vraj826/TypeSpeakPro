import { Question, InterviewLevel } from '@/types/interview';

export const questions: Record<InterviewLevel, Question[]> = {
  fresher: [
    { id: 1, text: "Tell me about yourself.", level: 'fresher' },
    { id: 2, text: "What are your greatest strengths?", level: 'fresher' },
    { id: 3, text: "Why should we hire you?", level: 'fresher' },
    { id: 4, text: "What are your career goals for the next 5 years?", level: 'fresher' },
    { id: 5, text: "What is your biggest weakness and how do you manage it?", level: 'fresher' },
    { id: 6, text: "Why are you interested in this role?", level: 'fresher' },
    { id: 7, text: "How do you handle stress and pressure?", level: 'fresher' },
    { id: 8, text: "Describe a challenging project you worked on during your studies.", level: 'fresher' },
    { id: 9, text: "What makes you unique compared to other candidates?", level: 'fresher' },
    { id: 10, text: "Do you have any questions for us?", level: 'fresher' },
  ],
  professional: [
    { id: 1, text: "Walk me through your professional journey so far.", level: 'professional' },
    { id: 2, text: "Describe a challenging situation you handled at work and how you resolved it.", level: 'professional' },
    { id: 3, text: "Why are you considering leaving your current position?", level: 'professional' },
    { id: 4, text: "How do you handle pressure and tight deadlines?", level: 'professional' },
    { id: 5, text: "Tell me about a time you worked effectively in a team.", level: 'professional' },
    { id: 6, text: "How do you prioritize multiple competing tasks?", level: 'professional' },
    { id: 7, text: "Describe a time when you had to learn something new quickly.", level: 'professional' },
    { id: 8, text: "How do you handle feedback and criticism?", level: 'professional' },
    { id: 9, text: "What achievements are you most proud of in your career?", level: 'professional' },
    { id: 10, text: "Where do you see yourself in the next 3-5 years?", level: 'professional' },
  ],
  managerial: [
    { id: 1, text: "How would you describe your leadership style?", level: 'managerial' },
    { id: 2, text: "Tell me about a time you resolved a conflict within your team.", level: 'managerial' },
    { id: 3, text: "How do you motivate underperforming team members?", level: 'managerial' },
    { id: 4, text: "Describe a difficult decision you had to make as a leader.", level: 'managerial' },
    { id: 5, text: "How do you delegate tasks and ensure accountability?", level: 'managerial' },
    { id: 6, text: "Tell me about a project where you led a team to success.", level: 'managerial' },
    { id: 7, text: "How do you handle disagreements with upper management?", level: 'managerial' },
    { id: 8, text: "What strategies do you use to develop and mentor your team?", level: 'managerial' },
    { id: 9, text: "How do you balance strategic thinking with day-to-day operations?", level: 'managerial' },
    { id: 10, text: "What is your approach to managing organizational change?", level: 'managerial' },
  ],
};

export const levelInfo: Record<InterviewLevel, { title: string; description: string; icon: string }> = {
  fresher: {
    title: 'Fresher',
    description: 'Entry-level candidates and recent graduates preparing for their first job interviews.',
    icon: '🎓',
  },
  professional: {
    title: 'Working Professional',
    description: 'Professionals with 1-5 years of experience looking to advance their careers.',
    icon: '💼',
  },
  managerial: {
    title: 'Managerial',
    description: 'Team leads and managers preparing for senior leadership positions.',
    icon: '👔',
  },
};
