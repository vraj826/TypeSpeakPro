
export interface PracticeModule {
    id: string;
    title: string;
    description: string;
    flow: 'level-topic' | 'skill' | 'role-mode';
    options: {
        levels?: { id: string; title: string; description: string }[];
        skills?: { id: string; title: string; description: string; icon?: string }[];
        roles?: { id: string; title: string; description: string }[];
        topics?: { id: string; title: string; description: string; type: string }[];
        modes?: { id: string; title: string; description: string; type: string }[];
    };
}

export const VOICE_DATA: Record<string, PracticeModule> = {
    communication: {
        id: 'communication',
        title: 'Communication Practice',
        description: 'Improve real-life communication, clarity, tone, and listening.',
        flow: 'level-topic',
        options: {
            levels: [
                { id: 'beginner', title: 'Beginner', description: 'Simple daily talk' },
                { id: 'intermediate', title: 'Intermediate', description: 'Situational speaking' },
                { id: 'advanced', title: 'Advanced', description: 'Natural conversation' }
            ],
            topics: [
                { id: 'active_listening', title: 'Active Listening', description: 'AI plays audio, you summarize.', type: 'listening' },
                { id: 'concise', title: 'Concise Speaking', description: 'Speak clearly within 10 seconds.', type: 'rapid' },
                { id: 'tone', title: 'Tone Control', description: 'Practice speaking with specific emotions.', type: 'tone' },
                { id: 'daily', title: 'Daily Conversation', description: 'General practice on everyday topics.', type: 'speak' }
            ]
        }
    },
    verbal: {
        id: 'verbal',
        title: 'Verbal Practice',
        description: 'Improve pronunciation, pace, and voice control.',
        flow: 'skill',
        options: {
            skills: [
                { id: 'tongue_twisters', title: 'Tongue Twisters', description: 'Repeat difficult phrases accurately.', icon: 'Wind' },
                { id: 'pace', title: 'Pace Training', description: 'Control your speaking speed.', icon: 'Timer' },
                { id: 'volume', title: 'Volume Modulation', description: 'Practice speaking softly and loudly.', icon: 'Volume2' }
            ]
        }
    },
    hr: {
        id: 'hr',
        title: 'HR Preparation',
        description: 'Prepare for job interviews and confidence speaking.',
        flow: 'role-mode',
        options: {
            roles: [
                { id: 'entry', title: 'Entry Level', description: '0-2 years experience' },
                { id: 'senior', title: 'Senior Level', description: '5+ years experience' },
                { id: 'manager', title: 'Managerial', description: 'Leadership roles' }
            ],
            modes: [
                { id: 'mock', title: 'Mock Interview', description: 'Standard Q&A session.', type: 'interview' },
                { id: 'star', title: 'STAR Method', description: 'Guided Situation-Task-Action-Result practice.', type: 'star' },
                { id: 'negotiation', title: 'Salary Negotiation', description: 'Simulated negotiation scenarios.', type: 'roleplay' }
            ]
        }
    }
};

// Data structure: strings[] indexed by [topic_id/mode_id][level_id/role_id]
export const PROMPTS_DATA: Record<string, Record<string, string[]>> = {
    // Communication Topics
    'daily': {
        'beginner': [
            "What is your favorite color and why?", "Talk about your best friend.", "Describe your favorite food.",
            "What do you like to do on weekends?", "Tell me about your pet.", "Who is your favorite family member?",
            "What is your favorite season?", "Do you like waking up early?", "How do you travel to school/work?",
            "What is your favorite fruit?", "What games do you like to play?", "Describe your bedroom.",
            "What is your favorite animal?", "Do you like to draw or paint?", "What is your favorite holiday?",
            "Do you prefer tea or coffee?", "What was the last book you read?", "Describe your favorite outfit.",
            "Do you like music?", "What is your favorite movie?", "Tell me about a park you visit.",
            "Do you like to dance?", "What is your favorite subject?", "Describe your morning routine.",
            "Do you like rain?", "What is your dream car?", "What makes you happy?",
            "Do you like to cook?", "Where do you want to travel?", "Who is your role model?"
        ],
        'intermediate': [
            "Describe a memorable birthday celebration.", "Explain how to cook your favorite meal.", "Talk about a recent trip you took.",
            "What are the benefits of reading?", "Compare living in a city versus a village.", "Describe your dream job.",
            "How do you handle stress?", "Talk about a hobby you want to learn.", "What is your opinion on social media?",
            "Describe a challenge you overcame.", "Who inspired you the most in your life?", "What defines a good friend?",
            "Talk about a historical event.", "How has technology changed our lives?", "Describe your ideal house.",
            "What are your healthy habits?", "Explain a tradition in your culture.", "Talk about a movie that changed your perspective.",
            "What are the qualities of a good leader?", "How do you spend your free time effectively?", "Describe a funny incident.",
            "What is the importance of education?", "Talk about environmental conservation.", "Describe a skill you are proud of.",
            "What is your favorite cuisine and why?", "How do you stay motivated?", "Talk about the importance of family.",
            "Describe your favorite festival.", "What are your goals for next year?", "How do you make new friends?"
        ],
        'advanced': [
            "Discuss the impact of AI on future jobs.", "Is space exploration worth the cost? Why?", "Analyze the importance of mental health awareness.",
            "Should education be free for everyone?", "Discuss the pros and cons of remote work.", "How can we solve climate change?",
            "What separates a good leader from a great one?", "Is social media uniting or dividing us?", "Discuss the future of renewable energy.",
            "What is the meaning of success to you?", "Should voting be mandatory?", "Discuss the role of art in society.",
            "How does globalization affect culture?", "Is privacy a thing of the past?", "Discuss the ethics of genetic engineering.",
            "What is the most significant invention of the 21st century?", "Should universal basic income be implemented?", "Analyze the impact of fake news.",
            "Discuss the challenges of modern parenting.", "Is happiness a choice or a result of circumstances?", "What is the future of transportation?",
            "Discuss the importance of emotional intelligence.", "Should plastic be banned globally?", "How can we achieve gender equality?",
            "Discuss the philosophy of stoicism.", "Is competition healthy or harmful?", "What is the role of the UN in modern times?",
            "Discuss the impact of fast fashion.", "Should we colonize Mars?", "What is the legacy you want to leave behind?"
        ]
    },
    'active_listening': {
        'beginner': [
            "Listen: 'The cat is sleeping on the red mat.' (Summarize)", "Listen: 'Please buy milk, eggs, and bread.' (Repeat the list)",
            "Listen: 'Meet me at the park at 5 PM.' (When and where?)", "Listen: 'My favorite color is blue.' (What color?)",
            "Listen: 'The dog barked loudly.' (What happened?)", "Listen: 'I have two brothers and one sister.' (How many siblings?)",
            "Listen: 'Put the book on the table.' (Where?)", "Listen: 'It is raining outside today.' (Weather?)",
            "Listen: 'She is wearing a yellow dress.' (What is she wearing?)", "Listen: 'Call me tomorrow morning.' (When?)",
            "Listen: 'The car is black.' (Color?)", "Listen: 'I like to eat apples.' (Fruit?)",
            "Listen: 'Open the window please.' (Action?)", "Listen: 'The bus arrives at 8 AM.' (Time?)",
            "Listen: 'He is playing football.' (Sport?)", "Listen: 'I am tired.' (Feeling?)",
            "Listen: 'She sings beautifully.' (Action?)", "Listen: 'The sky is blue.' (Color?)",
            "Listen: 'I drink water every day.' (What?)", "Listen: 'Close the door.' (Action?)",
            "Listen: 'The bird is flying.' (What is flying?)", "Listen: 'I study English.' (Subject?)",
            "Listen: 'He has a red bag.' (Object?)", "Listen: 'We are going home.' (Where?)",
            "Listen: 'It is cold today.' (Temperature?)", "Listen: 'She likes chocolate.' (Food?)",
            "Listen: 'The phone is ringing.' (What is happenning?)", "Listen: 'I run every morning.' (When?)",
            "Listen: 'My name is John.' (Name?)", "Listen: 'Stop the car.' (Action?)"
        ],
        'intermediate': [
            "Listen to a short story about a lost puppy and summarize the ending.", "Listen to instructions for a recipe and list the ingredients.",
            "Listen to a weather forecast and suggest what to wear.", "Listen to a voicemail about a meeting change and confirm the new time.",
            "Listen to a description of a person and identify them.", "Listen to a news snippet and state the main headline.",
            "Listen to a dialogue between two friends and explain their conflict.", "Listen to directions to a library and draw a map mentally.",
            "Listen to a movie plot summary and guess the genre.", "Listen to a product review and list one pro and one con.",
            "Listen to an announcement at a train station and identify the platform.", "Listen to a request from a boss and prioritize the tasks.",
            "Listen to a customer complaint and suggest a solution.", "Listen to a description of a holiday and guess the destination.",
            "Listen to a sports commentary and name the winning team.", "Listen to a tech tutorial and explain one step.",
            "Listen to a biography snippet and name the famous person.", "Listen to a joke and explain why it is funny.",
            "Listen to a fable and state the moral.", "Listen to a sales pitch and identify the key selling point.",
            "Listen to a teacher's instructions for homework.", "Listen to a doctor's advice and list the precautions.",
            "Listen to a waiter reciting specials and choose a dish.", "Listen to a flight attendant's safety briefing.",
            "Listen to a podcast intro and guess the topic.", "Listen to a song verse and paraphrase the meaning.",
            "Listen to a debate opening statement.", "Listen to a tourist asking for help.",
            "Listen to a child explaining a game.", "Listen to a weather warning."
        ],
        'advanced': [
            "Listen to a lecture on quantum physics and summarize the main theory.", "Listen to a complex legal argument and identify the loophole.",
            "Listen to a fast-paced auction and track the final bid.", "Listen to a philosophical debate and counter one argument.",
            "Listen to a technical breakdown of a software bug.", "Listen to stock market analysis and predict the trend.",
            "Listen to a medical diagnosis and explain the symptoms.", "Listen to a diplomatic speech and identify the hidden subtext.",
            "Listen to a rapid-fire interview and recall specific details.", "Listen to a poem and analyze the metaphor.",
            "Listen to a crisis management briefing.", "Listen to a historical analysis of a war.",
            "Listen to a scientific paper abstract.", "Listen to a CEO's earnings call.",
            "Listen to a debate on ethics.", "Listen to a detailed architectural description.",
            "Listen to a play's monologue and analyze the emotion.", "Listen to a technical support call.",
            "Listen to a negotiation between diplomats.", "Listen to a sermon or spiritual talk.",
            "Listen to a comedy routine and analyze the timing.", "Listen to a court verdict reading.",
            "Listen to a detailed product specification.", "Listen to a linguistic analysis.",
            "Listen to an earnings report.", "Listen to a strategic military briefing.",
            "Listen to a complex instructions for assembly.", "Listen to a psychological profile.",
            "Listen to a critique of modern art.", "Listen to a satire piece."
        ]
    },
    'concise': {
        'beginner': [
            "Describe an apple in 3 words.", "Say your name and age quickly.", "What is your favorite color? (1 sentence)",
            "Describe your mood right now.", "What did you eat for breakfast? (Short)", "Name 3 animals fast.",
            "Where do you live? (City only)", "How is the weather? (1 word)", "Do you like sports? (Yes/No + why)",
            "What time is it?", "Name a fruit.", "Say 'Hello' in a unique way.",
            "What is 2+2?", "Name a color.", "Say your favorite number.",
            "Hot or Cold?", "Day or Night?", "Cat or Dog?",
            "Tea or Coffee?", "Summer or Winter?", "Red or Blue?",
            "Car or Bike?", "Pen or Pencil?", "Book or Movie?",
            "Sun or Moon?", "Big or Small?", "Fast or Slow?",
            "Happy or Sad?", "Up or Down?", "Left or Right?"
        ],
        'intermediate': [
            "Summarize your day in 10 seconds.", "Explain 'gravity' in one sentence.", "Pitch your favorite movie in 15 seconds.",
            "Describe your job/school in 2 sentences.", "Give directions to the nearest store concisely.", "Explain why you are learning English.",
            "Sell this pen in 20 seconds.", "Describe your best friend in 3 adjectives.", "Explain how to make tea quickly.",
            "What is the best advice you've received? (Short)", "Define 'success' in 5 words.", "Summarize the last news you heard.",
            "Describe the internet to a caveman.", "Explain a smartphone in one sentence.", "Why is water important? (Briefly)",
            "Describe your dream vacation in 10s.", "Explain why you like this app.", "What is your talent?",
            "Describe a rainbow.", "Explain 'happiness'.", "Why do we sleep?",
            "What represents you?", "Describe silence.", "Explain 'time'.",
            "Why do birds fly?", "What is a cloud?", "Describe a mirror.",
            "Explain 'music'.", "What is a friend?", "Define 'trust'."
        ],
        'advanced': [
            "Explain the theory of relativity in 20 seconds.", "Summarize the plot of 'Inception' in 2 sentences.", "Pitch a startup idea in 30 seconds.",
            "Explain the concept of 'blockchain' simply.", "Argue for/against AI in 15 seconds.", "Define 'existentialism' briefly.",
            "Explain 'democracy' to a child.", "Summarize a global issue in 1 sentence.", "Deliver an elevator pitch for yourself.",
            "Explain 'inflation' in 10 seconds.", "Describe the future of humanity concisely.", "What is the meaning of life? (Briefly)",
            "Explain how the internet works.", "Summarize the French Revolution.", "Define 'consciousness'.",
            "Explain 'cryptography'.", "Describe the stock market.", "Explain 'photosynthesis'.",
            "What is 'quantum mechanics'?", "Define 'justice'.", "Explain 'ethics'.",
            "What is 'art'?", "Describe 'culture'.", "Explain 'globalization'.",
            "What is 'leadership'?", "Define 'innovation'.", "Explain 'empathy'.",
            "financial crisis summary.", "Describe 'evolution'.", "Explain 'diplomacy'."
        ]
    },
    'tone': {
        'beginner': [
            "Say 'Hello' happily.", "Say 'No' angrily.", "Say 'Goodbye' sadly.",
            "Say 'Really?' with surprise.", "Say 'Yes' excitedly.", "Say 'I don't know' confusedly.",
            "Say 'Stop' commanded.", "Say 'Please' politely.", "Say 'Welcome' warmly.",
            "Say 'Ouch' in pain.", "Say 'Wow' amazed.", "Say 'Okay' bored.",
            "Say 'Thanks' ungratefully.", "Say 'Look' scared.", "Say 'Run' urgently.",
            "Say 'Wait' patiently.", "Say 'Quiet' softly.", "Say 'Hey' friendly.",
            "Say 'Dinner's ready' loudly.", "Say 'I'm sorry' sincerely.", "Say 'It works' happy.",
            "Say 'Oh no' worried.", "Say 'Great' sarcastic.", "Say 'Sure' hesitant.",
            "Say 'Why' curious.", "Say 'Come here' inviting.", "Say 'Get out' angry.",
            "Say 'Love you' tenderly.", "Say 'Help' desperate.", "Say 'I won' triumphant."
        ],
        'intermediate': [
            "Apologize for being late sincerely.", "Ask for a refund firmly but politely.", "Tell a joke laughing.",
            "Deliver bad news gently.", "Congratulate a friend enthusiastically.", "Refuse an invitation gracefully.",
            "Ask a favor hesitantly.", "Command a dog sternly.", "Whisper a secret conspiratorially.",
            "Express doubt about a plan.", "Complain about food politely.", "Encourage a teammate.",
            "Scold a child gently.", "Admit a mistake bravely.", "Ask for directions loudly.",
            "Order food confidently.", "Express disappointment clearly.", "Show appreciation warmly.",
            "Act surprised by a gift.", "Express relief after a scare.", "Show frustration at traffic.",
            "Act bored in a meeting.", "Express jealousy jokingly.", "Show sympathy for a loss.",
            "Act suspicious of a lie.", "Express hope for the future.", "Show nostalgia for the past.",
            "Act determined to win.", "Express confusion at a puzzle.", "Show pride in an achievement."
        ],
        'advanced': [
            "Deliver a critique constructively yet strictly.", "Express sarcasm subtly.", "Give a speech with gravitas.",
            "Comfort someone in deep grief.", "Negotiate a deal with confidence.", "Express diplomatic disagreement.",
            "Tell a ghost story with suspense.", "Express irony in a situation.", "Show condescension (roleplay).",
            "Express feigned interest.", "Show righteous indignation.", "Express calm during a crisis.",
            "Inspire a team before a match.", "Plead your innocence in court.", "Express profound gratitude.",
            "deliver a eulogy.", "Express heartbreak.", "Show stoicism.",
            "Express manic excitement.", "Show cold detachment.", "Express burning rage controlled.",
            "Show paternal/maternal warmth.", "Express intellectual curiosity.", "Show deep regret.",
            "Express existential dread.", "Show spiritual peace.", "Express romantic longing.",
            "Show authoritative command.", "Express chaotic panic.", "Show absolute certainty."
        ]
    },

    // HR Modes
    'mock': {
        'entry': [
            "Tell me about yourself.", "Why do you want this job?", "What are your strengths?",
            "What is your greatest weakness?", "Where do you see yourself in 5 years?", "Why should we hire you?",
            "Describe a time you worked in a team.", "How do you handle stress?", "What is your favorite subject?",
            "Do you prefer working alone or in a team?", "What motivates you?", "Discuss your hobbies.",
            "Are you willing to relocate?", "How do you handle criticism?", "What was your favorite project?",
            "Do you have any questions for us?", "What is your expected salary?", "Describe your ideal boss.",
            "How do you organize your tasks?", "What computer skills do you have?", "Discuss a mistake you made.",
            "Who is your role model?", "What are your goals?", "Are you punctual?",
            "Can you work weekends?", "How do you learn new things?", "Describe yourself in 3 words.",
            "What makes you unique?", "How do you handle deadlines?", "Why did you choose your major?"
        ],
        'senior': [
            "Describe your management style.", "Tell me about a time you led a team.", "How do you handle conflict in a team?",
            "Describe a major challenge you overcame.", "What is your greatest professional achievement?", "How do you mentor juniors?",
            "Why are you leaving your current role?", "What value can you bring to the company?", "How do you stay updated in your industry?",
            "Describe a time you failed and what you learned.", "How do you make difficult decisions?", "What is your strategy for the first 90 days?",
            "How do you motivate an underperforming team member?", "Discuss a time you disagreed with a boss.", "How do you prioritize multiple projects?",
            "What is your philosophy on leadership?", "How do you handle pressure?", "Describe a complex problem you solved.",
            "How do you delegate tasks?", "What is your experience with budgets?", "How do you foster innovation?",
            "Describe a successful negotiation.", "How do you handle change management?", "What is your view on remote work?",
            "How do you build company culture?", "Describe a strategic partnership you built.", "How do you handle a toxic employee?",
            "What is your biggest risk taken?", "How do you measure success?", "Why this company, specifically?"
        ],
        'manager': [
            "How do you align team goals with company vision?", "Describe a turnaround strategy you implemented.", "How do you handle layoffs or budget cuts?",
            "What is your vision for this department?", "How do you ensure diversity and inclusion?", "Describe a time you managed a crisis.",
            "How do you define success for an organization?", "What is your experience with scaling teams?", "How do you manage stakeholders?",
            "Describe your leadership philosophy.", "How do you foster a culture of innovation?", "What is your strategy for talent retention?",
            "How do you handle ethical dilemmas?", "Describe a merger or acquisition experience.", "How do you drive revenue growth?",
            "What is your approach to risk management?", "How do you build a high-performance team?", "Describe a strategic pivot.",
            "How do you handle executive conflicts?", "What is your legacy?", "How do you influence without authority?",
            "Describe a global project you managed.", "How do you integrate new technology?", "What is your view on corporate responsibility?",
            "How do you maintain work-life balance for your team?", "Describe a failure that cost money.", "How do you negotiate with vendors?",
            "What is your strategy for market expansion?", "How do you build a brand?", "Why are you the best leader for us?"
        ]
    },
    'star': {
        'entry': [
            "Tell me about a time you showed leadership.", "Describe a conflict you resolved.", "Tell me about a goal you achieved.",
            "Describe a time you solved a problem.", "Tell me about a time you made a mistake.", "Describe a time you helped a teammate.",
            "Tell me about a time you worked under pressure.", "Describe a time you learned something fast.", "Tell me about a creative idea you had.",
            "Describe a time you had to adapt.", "Tell me about a successful project.", "Describe a time you received feedback.",
            "Tell me about a time you were organized.", "Describe a customer service experience.", "Tell me about a time you took initiative.",
            "Describe a challenge at school.", "Tell me about a time you were honest.", "Describe a time you exceeded expectations.",
            "Tell me about a volunteering experience.", "Describe a time you planned an event.", "Tell me about a difficult decision.",
            "Describe a time you persuaded someone.", "Tell me about a time you taught someone.", "Describe a time you delegated.",
            "Tell me about a time you saved money/time.", "Describe a technical problem you fixed.", "Tell me about a team project.",
            "Describe a time you were proud.", "Tell me about a communication challenge.", "Describe a misunderstood situation."
        ],
        'senior': [
            "Tell me about a time you led a project.", "Describe a time you managed a conflict.", "Tell me about a process you improved.",
            "Describe a time you mentored someone.", "Tell me about a strategic decision.", "Describe a time you managed a budget.",
            "Tell me about a risk you took.", "Describe a time you negotiated.", "Tell me about a time you failed.",
            "Describe a time you influenced stakeholders.", "Tell me about a cross-functional project.", "Describe a time you handled a crisis.",
            "Tell me about an innovation you drove.", "Describe a time you had to fire someone.", "Tell me about a time you hired someone.",
            "Describe a change you managed.", "Tell me about a time you optimized a workflow.", "Describe a time you lost a client.",
            "Tell me about a time you won a client.", "Describe a time you simplified a complex issue.", "Tell me about a data-driven decision.",
            "Describe a time you managed upwards.", "Tell me about a time you disagreed with policy.", "Describe a time you stood up for ethics.",
            "Tell me about a time you built a team.", "Describe a time you reduced costs.", "Tell me about a time you increased revenue.",
            "Describe a time you handled PR.", "Tell me about a time you pivoted strategy.", "Describe a time you managed a delay."
        ],
        'manager': [
            "Tell me about a time you transformed a department.", "Describe a time you managed a merger.", "Tell me about a time you scaled operations.",
            "Describe a time you handled a PR crisis.", "Tell me about a time you entered a new market.", "Describe a time you restructured a team.",
            "Tell me about a time you drove culture change.", "Describe a time you managed a massive budget.", "Tell me about a time you pioneered a product.",
            "Describe a time you dealt with a board.", "Tell me about a time you faced a lawsuit.", "Describe a time you lobbied for change.",
            "Tell me about a time you acquired a company.", "Describe a time you divested a unit.", "Tell me about a time you managed global teams.",
            "Describe a time you drove digital transformation.", "Tell me about a time you established a vision.", "Describe a time you handled a regulatory issue.",
            "Tell me about a time you raised capital.", "Describe a time you managed diverse stakeholders.", "Tell me about a time you innovated a business model.",
            "Describe a time you handled a security breach.", "Tell me about a time you mentored a successor.", "Describe a time you championed sustainability.",
            "Tell me about a time you turned a loss into profit.", "Describe a time you built a partnership.", "Tell me about a time you faced public scrutiny.",
            "Describe a time you managed a supply chain issue.", "Tell me about a time you standardized processes.", "Describe a time you left a legacy."
        ]
    },
    'negotiation': {
        'entry': [
            "Negotiate a higher starting salary.", "Negotiate for more vacation days.", "Negotiate a flexible work schedule.",
            "Negotiate a deadline extension.", "Negotiate a specific project role.", "Negotiate for better equipment.",
            "Negotiate a gym membership reimbursement.", "Negotiate a remote work day.", "Negotiate a title change.",
            "Negotiate a training budget.", "Negotiate for relocation assistance.", "Negotiate a signing bonus.",
            "Negotiate shift timings.", "Negotiate a shared workspace.", "Negotiate travel expenses.",
            "Negotiate a performance review date.", "Negotiate a mentor assignment.", "Negotiate overtime pay.",
            "Negotiate a software license.", "Negotiate a conference attendance.", "Negotiate a specific desk.",
            "Negotiate a lunch hour.", "Negotiate a uniform allowance.", "Negotiate a parking spot.",
            "Negotiate a phone allowance.", "Negotiate internet reimbursement.", "Negotiate a start date.",
            "Negotiate a contract duration.", "Negotiate a probation period.", "Negotiate a notice period."
        ],
        'senior': [
            "Negotiate a substantial raise.", "Negotiate equity or stock options.", "Negotiate a promotion path.",
            "Negotiate a severance package.", "Negotiate a departmental budget.", "Negotiate a key hire.",
            "Negotiate with a difficult vendor.", "Negotiate a client contract renewal.", "Negotiate internal resource allocation.",
            "Negotiate a clearer scope of work.", "Negotiate a partnership deal.", "Negotiate a retention bonus.",
            "Negotiate a sabbatical.", "Negotiate exclusivity clauses.", "Negotiate a non-compete.",
            "Negotiate a performance bonus structure.", "Negotiate full remote work.", "Negotiate a 4-day work week.",
            "Negotiate a dedicated assistant.", "Negotiate a company car.", "Negotiate extensive travel.",
            "Negotiate intellectual property rights.", "Negotiate a speaking engagement fee.", "Negotiate a book deal.",
            "Negotiate a consulting rate.", "Negotiate a project timeline.", "Negotiate a scope creep.",
            "Negotiate a liability clause.", "Negotiate a payment term.", "Negotiate a delivery date."
        ],
        'manager': [
            "Negotiate a merger valuation.", "Negotiate a union contract.", "Negotiate a global distribution deal.",
            "Negotiate a massive government contract.", "Negotiate an acquisition price.", "Negotiate a divestiture.",
            "Negotiate a regulatory settlement.", "Negotiate a hostile takeover defense.", "Negotiate executive compensation.",
            "Negotiate a joint venture.", "Negotiate a licensing agreement.", "Negotiate a debt restructuring.",
            "Negotiate a bankruptcy settlement.", "Negotiate a class action settlement.", "Negotiate a headquarters relocation.",
            "Negotiate a strategic alliance.", "Negotiate a supplier monopoly.", "Negotiate a trade tariff exemption.",
            "Negotiate a media rights deal.", "Negotiate a sponsorship package.", "Negotiate a naming rights deal.",
            "Negotiate a patent dispute.", "Negotiate a cross-border tax treaty.", "Negotiate a climate accord compliance.",
            "Negotiate a hostage situation (simulation).", "Negotiate a peace treaty (simulation).", "Negotiate a ransom (simulation).",
            "Negotiate a viral crisis response.", "Negotiate a board seat.", "Negotiate a golden parachute."
        ]
    }
};
