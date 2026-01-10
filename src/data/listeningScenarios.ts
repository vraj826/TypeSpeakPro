export interface Question {
    q: string;
    options: string[];
    answer: number;
}

export interface ListeningScenario {
    id: string;
    title: string;
    accent: string;
    lang: string;
    script: string;
    level: 'Easy' | 'Medium' | 'Hard';
    questions: Question[];
}

export const LISTENING_SCENARIOS: ListeningScenario[] = [
    // --- EASY LEVEL (2 Questions) ---
    {
        id: 'easy_1',
        title: "The Coffee Shop",
        accent: "US English",
        lang: "en-US",
        level: "Easy",
        script: "Hi, I'd like a medium latte with oat milk, please. Oh, and can you heat up a blueberry muffin for me? That'll be all, thanks.",
        questions: [
            { q: "What drink did the customer order?", options: ["Cappuccino", "Latte", "Espresso", "Tea"], answer: 1 },
            { q: "What food item was requested?", options: ["Croissant", "Bagel", "Blueberry Muffin", "Cookie"], answer: 2 }
        ]
    },
    {
        id: 'easy_2',
        title: "Asking for Directions",
        accent: "UK English",
        lang: "en-GB",
        level: "Easy",
        script: "Excuse me, could you tell me where the nearest library is? Is it far from here? I need to return some books before it closes at 5 PM.",
        questions: [
            { q: "What is the person looking for?", options: ["The bank", "The post office", "The library", "The supermarket"], answer: 2 },
            { q: "What time does it close?", options: ["4 PM", "5 PM", "6 PM", "7 PM"], answer: 1 }
        ]
    },
    {
        id: 'easy_3',
        title: "Movie Tickets",
        accent: "Indian English",
        lang: "en-IN",
        level: "Easy",
        script: "Two tickets for the 7 o'clock show of 'Space Adventures', please. I would prefer seats in the back row if they are available.",
        questions: [
            { q: "Which movie is requested?", options: ["Ocean Deep", "Space Adventures", "City Lights", "Jungle Trek"], answer: 1 },
            { q: "Where does the person want to sit?", options: ["Front row", "Middle row", "Back row", "Anywhere"], answer: 2 }
        ]
    },
    {
        id: 'easy_4',
        title: "Weather Report",
        accent: "US English",
        lang: "en-US",
        level: "Easy",
        script: "It's going to be a sunny day today with a high of 75 degrees. However, expect some rain in the evening, so don't forget your umbrella.",
        questions: [
            { q: "What is the weather like during the day?", options: ["Rainy", "Sunny", "Cloudy", "Snowy"], answer: 1 },
            { q: "What should you bring for the evening?", options: ["Sunglasses", "Sunscreen", "Umbrella", "Jacket"], answer: 2 }
        ]
    },
    {
        id: 'easy_5',
        title: "Making an Appointment",
        accent: "UK English",
        lang: "en-GB",
        level: "Easy",
        script: "Hello, I'd like to book a dental appointment for next Tuesday. Is 10:30 AM available? I just need a routine check-up.",
        questions: [
            { q: "What kind of appointment is this?", options: ["Doctor", "Dentist", "Hair salon", "Mechanic"], answer: 1 },
            { q: "What day is requested?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], answer: 1 }
        ]
    },

    // --- MEDIUM LEVEL (5 Questions) ---
    {
        id: 'med_1',
        title: "Train Announcement",
        accent: "UK English",
        lang: "en-GB",
        level: "Medium",
        script: "Attention please. The 14:30 service to London Paddington has been delayed by approximately 15 minutes due to a signaling fault at Reading. Passengers are advised to wait on Platform 4. We apologize for the inconvenience and will provide further updates shortly. The buffet car is located in coach C.",
        questions: [
            { q: "Where is the train going?", options: ["Manchester", "London Paddington", "Edinburgh", "Liverpool"], answer: 1 },
            { q: "How long is the delay?", options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"], answer: 2 },
            { q: "What is the cause of the delay?", options: ["Bad weather", "Signaling fault", "Train breakdown", "Staff shortage"], answer: 1 },
            { q: "Which platform should passengers wait on?", options: ["Platform 1", "Platform 2", "Platform 3", "Platform 4"], answer: 3 },
            { q: "Where is the buffet car?", options: ["Coach A", "Coach B", "Coach C", "Coach D"], answer: 2 }
        ]
    },
    {
        id: 'med_2',
        title: "Tech Support Call",
        accent: "Indian English",
        lang: "en-IN",
        level: "Medium",
        script: "Hello, thank you for calling Tech Solutions. My name is Raj. I understand you are having trouble with your internet connection. First, please check if the green light on your router is blinking. If it is steady, try unplugging the power cable for ten seconds and then plugging it back in. This usually resets the IP address. If that doesn't work, we might need to send a technician to your home.",
        questions: [
            { q: "What company is the caller contacting?", options: ["Net Connect", "Tech Solutions", "Web Services", "Fast Net"], answer: 1 },
            { q: "What issue is the customer facing?", options: ["TV signal", "Phone line", "Internet connection", "Power outage"], answer: 2 },
            { q: "What light color should they check?", options: ["Red", "Blue", "Green", "Orange"], answer: 2 },
            { q: "How long should the router be unplugged?", options: ["5 seconds", "10 seconds", "30 seconds", "1 minute"], answer: 1 },
            { q: "What is the last resort?", options: ["Buy a new router", "Reset password", "Send a technician", "Change provider"], answer: 2 }
        ]
    },
    {
        id: 'med_3',
        title: "Job Interview Intro",
        accent: "US English",
        lang: "en-US",
        level: "Medium",
        script: "Welcome, Sarah. Thanks for coming in today. We've reviewed your resume and were impressed by your experience in digital marketing. Before we dive into the technical questions, could you tell us a bit about your last project? Specifically, we'd like to know how you managed the budget and what the final ROI was. We are looking for someone who is very data-driven.",
        questions: [
            { q: "What field is the candidate's experience in?", options: ["Sales", "Digital Marketing", "Software Div", "HR"], answer: 1 },
            { q: "What impressed the interviewers?", options: ["Her degree", "Her resume", "Her portfolio", "Her references"], answer: 1 },
            { q: "What outcome are they interested in?", options: ["Team size", "Timeline", "Final ROI", "Creativity"], answer: 2 },
            { q: "What specific management skill is asked about?", options: ["Time", "Budget", "People", "Scope"], answer: 1 },
            { q: "What quality are they looking for?", options: ["Creative", "Data-driven", "Leadership", "Team player"], answer: 1 }
        ]
    },

    // --- HARD LEVEL (10 Questions) ---
    {
        id: 'hard_1',
        title: "The History of Tea",
        accent: "UK English",
        lang: "en-GB",
        level: "Hard",
        script: "Tea is the second most consumed drink in the world, surpassed only by water. Its origins date back to ancient China, where legend says Emperor Shen Nong discovered it by accident when leaves fell into his boiling water. \n\nInitially used as medicine, it became a recreational drink during the Tang Dynasty. Proper tea culture, including the famous tea ceremony, was further developed in Japan. \n\nIn the 17th century, tea reached Europe. It was initially a luxury item for the wealthy due to high taxes. The British East India Company played a massive role in the global tea trade, eventually establishing large tea plantations in India to break the Chinese monopoly. \n\nToday, tea is grown in dozens of countries, with major producers being China, India, Kenya, and Sri Lanka. There are many types—Black, Green, Oolong, and White—all coming from the same plant, Camellia sinensis. The difference lies in how the leaves are processed and oxidized. \n\nHerbal teas, strictly speaking, are not true teas as they don't contain tea leaves, but are infusions of fruits, flowers, or herbs. The health benefits of tea are widely studied, particularly its high antioxidant content which may reduce the risk of heart disease.",
        questions: [
            { q: "Which drink is more popular than tea?", options: ["Coffee", "Water", "Soda", "Juice"], answer: 1 },
            { q: "Where was tea discovered according to legend?", options: ["Japan", "India", "China", "Europe"], answer: 2 },
            { q: "How was tea initially used?", options: ["Religious rituals", "Currency", "Medicine", "Food"], answer: 2 },
            { q: "When did tea reach Europe?", options: ["15th Century", "16th Century", "17th Century", "18th Century"], answer: 2 },
            { q: "Why was tea initially a luxury in Europe?", options: ["It tasted bad", "High taxes", "Religious ban", "Hard to transport"], answer: 1 },
            { q: "Which company established plantations in India?", options: ["Dutch East India", "British East India", "Portuguese Traders", "French Empire"], answer: 1 },
            { q: "Which country is NOT listed as a major producer?", options: ["China", "India", "Kenya", "Brazil"], answer: 3 },
            { q: "What determines the type of tea (Black/Green)?", options: ["The plant species", "The soil type", "Processing and oxidation", "The altitude"], answer: 2 },
            { q: "Why are herbal teas not 'true' teas?", options: ["They have no caffeine", "They are too sweet", "They don't have Camellia sinensis leaves", " তারা ঠাণ্ডা পরিবেশন করা হয়"], answer: 2 },
            { q: "What is a main health benefit mentioned?", options: ["Stronger bones", "Better vision", "High antioxidants", "Weight loss"], answer: 2 }
        ]
    },
    {
        id: 'hard_2',
        title: "Climate Change Overview",
        accent: "US English",
        lang: "en-US",
        level: "Hard",
        script: "Climate change refers to long-term shifts in temperatures and weather patterns. While these shifts can be natural, since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil, and gas. \n\nBurning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. The main greenhouse gases causing climate change include carbon dioxide and methane. These come from using gasoline for driving a car or coal for heating a building. \n\nClearing land and cutting down forests can also release carbon dioxide. Agriculture, oil, and gas operations are major sources of methane emissions. Energy, industry, transport, buildings, agriculture, and land use are among the main sectors causing greenhouse gases. \n\nScientists show that humans are responsible for virtually all global heating over the last 200 years. The average temperature of the Earth’s surface is now about 1.1°C warmer than it was in the late 1800s (before the industrial revolution) and warmer than at any time in the last 100,000 years. \n\nThe last decade (2011-2020) was the warmest on record, and each of the last four decades has been warmer than any previous decade since 1850. Many people think climate change mainly means warmer temperatures. But temperature rise is only the beginning of the story. Because the Earth is a system, where everything is connected, changes in one area can influence changes in all others.",
        questions: [
            { q: "Since when have human activities been the main driver?", options: ["1600s", "1700s", "1800s", "1900s"], answer: 2 },
            { q: "What acts like a 'blanket' around the Earth?", options: ["The ozone layer", "Greenhouse gas emissions", "Clouds", "Ocean currents"], answer: 1 },
            { q: "Which two gases are mentioned as main causes?", options: ["Oxygen and Nitrogen", "Carbon Dioxide and Methane", "Helium and Hydrogen", "Ozone and CFCs"], answer: 1 },
            { q: "Which activity releases Methane?", options: ["Driving cars", "Burning coal", "Agriculture", "Planting trees"], answer: 2 },
            { q: "What effect does clearing forests have?", options: ["Cools the earth", "Releases Carbon Dioxide", "Absorbs Methane", "Increases rainfall"], answer: 1 },
            { q: "How much has the Earth's surface warmed?", options: ["0.5°C", "1.1°C", "2.0°C", "5.0°C"], answer: 1 },
            { q: "Compared to when is this warming measured?", options: ["Late 1800s", "Early 1900s", "Last 50 years", "Since 2000"], answer: 0 },
            { q: "Which decade was the warmest on record?", options: ["1980-1990", "1990-2000", "2001-2010", "2011-2020"], answer: 3 },
            { q: "Is climate change only about temperature?", options: ["Yes, entirely", "No, it's just the beginning", "No, it's about rainfall only", "Yes, but only in summer"], answer: 1 },
            { q: "Why do changes in one area affect others?", options: ["Magic", "The Earth is a connected system", "Political reasons", "Random chance"], answer: 1 }
        ]
    }
];
