export type CategoryId = 'synonyms' | 'antonyms' | 'one-word' | 'idioms' | 'spelling' | 'sentence-correction' | 'voice-change' | 'narration' | 'parts-of-speech' | 'tense' | 'articles' | 'prepositions';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string;
    difficulty: Difficulty;
}

export interface Category {
    id: CategoryId;
    title: string;
    description: string;
    icon: string;
    color: string;
    questions: Question[];
}

export const verbalCategories: Category[] = [
    {
        id: 'synonyms',
        title: 'Synonyms',
        description: 'Find the word with the same meaning',
        icon: '📝',
        color: 'from-blue-500 to-indigo-500',
        questions: [
            { id: 1, question: 'Synonym of "Happy"', options: ['Sad', 'Joyful', 'Angry', 'Tired'], correctAnswer: 'Joyful', difficulty: 'Easy' },
            { id: 2, question: 'Synonym of "Big"', options: ['Small', 'Tiny', 'Huge', 'Weak'], correctAnswer: 'Huge', difficulty: 'Easy' },
            { id: 3, question: 'Synonym of "Fast"', options: ['Slow', 'Quick', 'Lazy', 'Weak'], correctAnswer: 'Quick', difficulty: 'Easy' },
            { id: 4, question: 'Synonym of "Begin"', options: ['Start', 'End', 'Stop', 'Finish'], correctAnswer: 'Start', difficulty: 'Easy' },
            { id: 5, question: 'Synonym of "Rich"', options: ['Poor', 'Wealthy', 'Weak', 'Small'], correctAnswer: 'Wealthy', difficulty: 'Easy' },
            { id: 6, question: 'Synonym of "Scared"', options: ['Brave', 'Afraid', 'Happy', 'Calm'], correctAnswer: 'Afraid', difficulty: 'Easy' },
            { id: 7, question: 'Synonym of "Correct"', options: ['Wrong', 'Right', 'Left', 'Bad'], correctAnswer: 'Right', difficulty: 'Easy' },
            { id: 8, question: 'Synonym of "Sick"', options: ['Healthy', 'Ill', 'Strong', 'Fit'], correctAnswer: 'Ill', difficulty: 'Easy' },
            { id: 9, question: 'Synonym of "Difficult"', options: ['Easy', 'Hard', 'Simple', 'Soft'], correctAnswer: 'Hard', difficulty: 'Easy' },
            { id: 10, question: 'Synonym of "Silent"', options: ['Loud', 'Quiet', 'Noisy', 'Talkative'], correctAnswer: 'Quiet', difficulty: 'Easy' },

            { id: 11, question: 'Synonym of "Candid"', options: ['Secretive', 'Frank', 'Cruel', 'Arrogant'], correctAnswer: 'Frank', difficulty: 'Medium' },
            { id: 12, question: 'Synonym of "Diligent"', options: ['Lazy', 'Hardworking', 'Indifferent', 'Intelligent'], correctAnswer: 'Hardworking', difficulty: 'Medium' },
            { id: 13, question: 'Synonym of "Abandon"', options: ['Keep', 'Cherish', 'Forsake', 'Enlarge'], correctAnswer: 'Forsake', difficulty: 'Medium' },
            { id: 14, question: 'Synonym of "Lethargy"', options: ['Energy', 'Activity', 'Sluggishness', 'Excitement'], correctAnswer: 'Sluggishness', difficulty: 'Medium' },
            { id: 15, question: 'Synonym of "Pragmatic"', options: ['Idealistic', 'Practical', 'Theoretical', 'Emotional'], correctAnswer: 'Practical', difficulty: 'Medium' },
            { id: 16, question: 'Synonym of "Coerce"', options: ['Persuade', 'Force', 'Request', 'Allow'], correctAnswer: 'Force', difficulty: 'Medium' },
            { id: 17, question: 'Synonym of "Frugal"', options: ['Wasteful', 'Thrifty', 'Generous', 'Extravagant'], correctAnswer: 'Thrifty', difficulty: 'Medium' },
            { id: 18, question: 'Synonym of "Lucid"', options: ['Confusing', 'Clear', 'Dark', 'Ambiguous'], correctAnswer: 'Clear', difficulty: 'Medium' },
            { id: 19, question: 'Synonym of "Mitigate"', options: ['Worsen', 'Alleviate', 'Increase', 'Pain'], correctAnswer: 'Alleviate', difficulty: 'Medium' },
            { id: 20, question: 'Synonym of "Novice"', options: ['Expert', 'Beginner', 'Master', 'Teacher'], correctAnswer: 'Beginner', difficulty: 'Medium' },

            { id: 21, question: 'Synonym of "Ephemeral"', options: ['Lasting', 'Eternal', 'Short-lived', 'Beautiful'], correctAnswer: 'Short-lived', difficulty: 'Hard' },
            { id: 22, question: 'Synonym of "Zenith"', options: ['Nadir', 'Peak', 'Base', 'Foundation'], correctAnswer: 'Peak', difficulty: 'Hard' },
            { id: 23, question: 'Synonym of "Esoteric"', options: ['Common', 'Obscure', 'Simple', 'Public'], correctAnswer: 'Obscure', difficulty: 'Hard' },
            { id: 24, question: 'Synonym of "Ineffable"', options: ['Describable', 'Indescribable', 'Plain', 'Vocal'], correctAnswer: 'Indescribable', difficulty: 'Hard' },
            { id: 25, question: 'Synonym of "Pernicious"', options: ['Beneficial', 'Harmful', 'Kind', 'Helpful'], correctAnswer: 'Harmful', difficulty: 'Hard' },
            { id: 26, question: 'Synonym of "Obsequious"', options: ['Domineering', 'Servile', 'Confident', 'Rude'], correctAnswer: 'Servile', difficulty: 'Hard' },
            { id: 27, question: 'Synonym of "Sycophant"', options: ['Leader', 'Flatterer', 'Critic', 'Rebel'], correctAnswer: 'Flatterer', difficulty: 'Hard' },
            { id: 28, question: 'Synonym of "Ubiquitous"', options: ['Rare', 'Omnipresent', 'Scarce', 'Hidden'], correctAnswer: 'Omnipresent', difficulty: 'Hard' },
            { id: 29, question: 'Synonym of "Vicarious"', options: ['Direct', 'Indirect', 'Personal', 'Real'], correctAnswer: 'Indirect', difficulty: 'Hard' },
            { id: 30, question: 'Synonym of "Zealot"', options: ['Moderate', 'Fanatic', 'Apathetic', 'Skeptic'], correctAnswer: 'Fanatic', difficulty: 'Hard' }
        ]
    },
    {
        id: 'antonyms',
        title: 'Antonyms',
        description: 'Find the word with the opposite meaning',
        icon: '🔄',
        color: 'from-green-500 to-emerald-500',
        questions: [
            { id: 1, question: 'Antonym of "Hot"', options: ['Cold', 'Warm', 'Boiling', 'Sunny'], correctAnswer: 'Cold', difficulty: 'Easy' },
            { id: 2, question: 'Antonym of "Rich"', options: ['Wealthy', 'Poor', 'Strong', 'Kind'], correctAnswer: 'Poor', difficulty: 'Easy' },
            { id: 3, question: 'Antonym of "Start"', options: ['Begin', 'Finish', 'Go', 'Run'], correctAnswer: 'Finish', difficulty: 'Easy' },
            { id: 4, question: 'Antonym of "Love"', options: ['Hate', 'Like', 'Care', 'Friend'], correctAnswer: 'Hate', difficulty: 'Easy' },
            { id: 5, question: 'Antonym of "Day"', options: ['Night', 'Morning', 'Noon', 'Sun'], correctAnswer: 'Night', difficulty: 'Easy' },
            { id: 6, question: 'Antonym of "High"', options: ['Tall', 'Low', 'Big', 'Up'], correctAnswer: 'Low', difficulty: 'Easy' },
            { id: 7, question: 'Antonym of "Empty"', options: ['Full', 'Blank', 'Hollow', 'Void'], correctAnswer: 'Full', difficulty: 'Easy' },
            { id: 8, question: 'Antonym of "Hard"', options: ['Solid', 'Soft', 'Tough', 'Rock'], correctAnswer: 'Soft', difficulty: 'Easy' },
            { id: 9, question: 'Antonym of "Near"', options: ['Close', 'Far', 'Next', 'By'], correctAnswer: 'Far', difficulty: 'Easy' },
            { id: 10, question: 'Antonym of "Clean"', options: ['Dirty', 'Neat', 'Tidy', 'Pure'], correctAnswer: 'Dirty', difficulty: 'Easy' },

            { id: 11, question: 'Antonym of "Extravagant"', options: ['Expensive', 'Thrifty', 'Wasteful', 'Generous'], correctAnswer: 'Thrifty', difficulty: 'Medium' },
            { id: 12, question: 'Antonym of "Obscure"', options: ['Clear', 'Hidden', 'Vague', 'Dark'], correctAnswer: 'Clear', difficulty: 'Medium' },
            { id: 13, question: 'Antonym of "Mitigate"', options: ['Soothe', 'Aggravate', 'Relieve', 'Calm'], correctAnswer: 'Aggravate', difficulty: 'Medium' },
            { id: 14, question: 'Antonym of "Gregarious"', options: ['Sociable', 'Reclusive', 'Friendly', 'Talkative'], correctAnswer: 'Reclusive', difficulty: 'Medium' },
            { id: 15, question: 'Antonym of "Benevolent"', options: ['Kind', 'Malevolent', 'Generous', 'Good'], correctAnswer: 'Malevolent', difficulty: 'Medium' },
            { id: 16, question: 'Antonym of "Artificial"', options: ['Fake', 'Natural', 'Synthetic', 'Man-made'], correctAnswer: 'Natural', difficulty: 'Medium' },
            { id: 17, question: 'Antonym of "Optimistic"', options: ['Happy', 'Pessimistic', 'Hopeful', 'Bright'], correctAnswer: 'Pessimistic', difficulty: 'Medium' },
            { id: 18, question: 'Antonym of "Voluntary"', options: ['Free', 'Compulsory', 'Willing', 'Optional'], correctAnswer: 'Compulsory', difficulty: 'Medium' },
            { id: 19, question: 'Antonym of "Diligent"', options: ['Lazy', 'Hardworking', 'Busy', 'Active'], correctAnswer: 'Lazy', difficulty: 'Medium' },
            { id: 20, question: 'Antonym of "Bravery"', options: ['Courage', 'Cowardice', 'Fearless', 'Heroism'], correctAnswer: 'Cowardice', difficulty: 'Medium' },

            { id: 21, question: 'Antonym of "Ephemeral"', options: ['Temporary', 'Eternal', 'Brief', 'Short'], correctAnswer: 'Eternal', difficulty: 'Hard' },
            { id: 22, question: 'Antonym of "Cacophony"', options: ['Noise', 'Harmony', 'Sound', 'Din'], correctAnswer: 'Harmony', difficulty: 'Hard' },
            { id: 23, question: 'Antonym of "Nadir"', options: ['Bottom', 'Zenith', 'Low', 'Base'], correctAnswer: 'Zenith', difficulty: 'Hard' },
            { id: 24, question: 'Antonym of "Laconic"', options: ['Brief', 'Verbose', 'Silent', 'Short'], correctAnswer: 'Verbose', difficulty: 'Hard' },
            { id: 25, question: 'Antonym of "Sagacious"', options: ['Wise', 'Foolish', 'Smart', 'Clever'], correctAnswer: 'Foolish', difficulty: 'Hard' },
            { id: 26, question: 'Antonym of "Altruistic"', options: ['Selfless', 'Selfish', 'Kind', 'Giving'], correctAnswer: 'Selfish', difficulty: 'Hard' },
            { id: 27, question: 'Antonym of "Despair"', options: ['Hope', 'Misery', 'Sadness', 'Gloom'], correctAnswer: 'Hope', difficulty: 'Hard' },
            { id: 28, question: 'Antonym of "Dissonance"', options: ['Conflict', 'Accord', 'Discord', 'Strife'], correctAnswer: 'Accord', difficulty: 'Hard' },
            { id: 29, question: 'Antonym of "Loquacious"', options: ['Talkative', 'Taciturn', 'Chatty', 'Vocal'], correctAnswer: 'Taciturn', difficulty: 'Hard' },
            { id: 30, question: 'Antonym of "Malleable"', options: ['Flexible', 'Rigid', 'Soft', 'Pliable'], correctAnswer: 'Rigid', difficulty: 'Hard' }
        ]
    },
    {
        id: 'one-word',
        title: 'One Word Substitution',
        description: 'Replace the phrase with a single word',
        icon: '🎯',
        color: 'from-purple-500 to-pink-500',
        questions: [
            { id: 1, question: 'A person who loves books', options: ['Bibliophile', 'Technophile', 'Xenophile', 'Hemophile'], correctAnswer: 'Bibliophile', difficulty: 'Easy' },
            { id: 2, question: 'Sound that cannot be heard', options: ['Audible', 'Inaudible', 'Loud', 'Silent'], correctAnswer: 'Inaudible', difficulty: 'Easy' },
            { id: 3, question: 'Believes in God', options: ['Atheist', 'Theist', 'Agnostic', 'Cynic'], correctAnswer: 'Theist', difficulty: 'Easy' },
            { id: 4, question: 'Period of 100 years', options: ['Decade', 'Century', 'Millennium', 'Era'], correctAnswer: 'Century', difficulty: 'Easy' },
            { id: 5, question: 'Life story written by self', options: ['Biography', 'Autobiography', 'Novel', 'History'], correctAnswer: 'Autobiography', difficulty: 'Easy' },
            { id: 6, question: 'Place where books are kept', options: ['Zoo', 'Library', 'Museum', 'Park'], correctAnswer: 'Library', difficulty: 'Easy' },
            { id: 7, question: 'One who eats vegetables only', options: ['Carnivore', 'Vegetarian', 'Omnivore', 'Herbivore'], correctAnswer: 'Vegetarian', difficulty: 'Easy' },
            { id: 8, question: 'A group of stars', options: ['Planet', 'Constellation', 'Galaxy', 'Sun'], correctAnswer: 'Constellation', difficulty: 'Easy' },
            { id: 9, question: 'One who speaks two languages', options: ['Monolingual', 'Bilingual', 'Trilingual', 'Mute'], correctAnswer: 'Bilingual', difficulty: 'Easy' },
            { id: 10, question: 'Study of life', options: ['Biology', 'Physics', 'Chemistry', 'Math'], correctAnswer: 'Biology', difficulty: 'Easy' },

            { id: 11, question: 'Government by the people', options: ['Monarchy', 'Democracy', 'Autocracy', 'Oligarchy'], correctAnswer: 'Democracy', difficulty: 'Medium' },
            { id: 12, question: 'Slight woman with dark hair', options: ['Brunette', 'Blonde', 'Redhead', 'Albino'], correctAnswer: 'Brunette', difficulty: 'Medium' },
            { id: 13, question: 'Able to use both hands', options: ['Ambidextrous', 'Talented', 'Dexterous', 'Sinister'], correctAnswer: 'Ambidextrous', difficulty: 'Medium' },
            { id: 14, question: 'Remedy for all diseases', options: ['Panacea', 'Medicine', 'Antidote', 'Vaccine'], correctAnswer: 'Panacea', difficulty: 'Medium' },
            { id: 15, question: 'One who knows everything', options: ['Omniscient', 'Omnipotent', 'Omnipresent', 'Ignorant'], correctAnswer: 'Omniscient', difficulty: 'Medium' },
            { id: 16, question: 'Cannot be conquered', options: ['Invincible', 'Invisible', 'Vulnerable', 'Weak'], correctAnswer: 'Invincible', difficulty: 'Medium' },
            { id: 17, question: 'Fear of closed spaces', options: ['Claustrophobia', 'Acrophobia', 'Hydrophobia', 'Xenophobia'], correctAnswer: 'Claustrophobia', difficulty: 'Medium' },
            { id: 18, question: 'Study of birds', options: ['Zoology', 'Ornithology', 'Botany', 'Geology'], correctAnswer: 'Ornithology', difficulty: 'Medium' },
            { id: 19, question: 'Killing of a human being', options: ['Suicide', 'Homicide', 'Regicide', 'Patricide'], correctAnswer: 'Homicide', difficulty: 'Medium' },
            { id: 20, question: 'One who collects coins', options: ['Numismatist', 'Philatelist', 'Artist', 'Economist'], correctAnswer: 'Numismatist', difficulty: 'Medium' },

            { id: 21, question: 'Fear of foreigners', options: ['Xenophobia', 'Claustrophobia', 'Acrophobia', 'Hydrophobia'], correctAnswer: 'Xenophobia', difficulty: 'Hard' },
            { id: 22, question: 'One who hates mankind', options: ['Misanthrope', 'Philanthropist', 'Misogynist', 'Optimist'], correctAnswer: 'Misanthrope', difficulty: 'Hard' },
            { id: 23, question: 'Speech made without preparation', options: ['Extempore', 'Debate', 'Lecture', 'Sermon'], correctAnswer: 'Extempore', difficulty: 'Hard' },
            { id: 24, question: 'Study of ancient writing', options: ['Paleography', 'Calligraphy', 'Geography', 'Biography'], correctAnswer: 'Paleography', difficulty: 'Hard' },
            { id: 25, question: 'One who walks in sleep', options: ['Somnambulist', 'Insomniac', 'Dreamer', 'Walker'], correctAnswer: 'Somnambulist', difficulty: 'Hard' },
            { id: 26, question: 'To give up a throne', options: ['Abdicate', 'Abduct', 'Abandon', 'Abhor'], correctAnswer: 'Abdicate', difficulty: 'Hard' },
            { id: 27, question: 'Yearly celebration of a date', options: ['Anniversary', 'Birthday', 'Jubilee', 'Centenary'], correctAnswer: 'Anniversary', difficulty: 'Hard' },
            { id: 28, question: 'Center of attraction', options: ['Cynosure', 'Focus', 'Target', 'Aim'], correctAnswer: 'Cynosure', difficulty: 'Hard' },
            { id: 29, question: 'One who is indifferent to pleasure or pain', options: ['Stoic', 'Epicurean', 'Cynic', 'Skeptic'], correctAnswer: 'Stoic', difficulty: 'Hard' },
            { id: 30, question: 'Murder of a king', options: ['Regicide', 'Homicide', 'Suicide', 'Genocide'], correctAnswer: 'Regicide', difficulty: 'Hard' }
        ]
    },
    {
        id: 'idioms',
        title: 'Idioms & Phrases',
        description: 'Choose the correct meaning of the idiom',
        icon: '🗣️',
        color: 'from-orange-500 to-red-500',
        questions: [
            { id: 1, question: 'Piece of cake', options: ['Very easy', 'Dessert', 'Hard', 'Part'], correctAnswer: 'Very easy', difficulty: 'Easy' },
            { id: 2, question: 'Break a leg', options: ['Good luck', 'Get hurt', 'Break bone', 'Dance'], correctAnswer: 'Good luck', difficulty: 'Easy' },
            { id: 3, question: 'Hit the sack', options: ['Go to sleep', 'Hit bag', 'Leave', 'Work'], correctAnswer: 'Go to sleep', difficulty: 'Easy' },
            { id: 4, question: 'Under the weather', options: ['Sick', 'Raining', 'Sunny', 'Cold'], correctAnswer: 'Sick', difficulty: 'Easy' },
            { id: 5, question: 'Cost an arm and a leg', options: ['Expensive', 'Cheap', 'Painful', 'Medical'], correctAnswer: 'Expensive', difficulty: 'Easy' },
            { id: 6, question: 'Let the cat out of the bag', options: ['Reveal secret', 'Let pet out', 'Make noise', 'Run away'], correctAnswer: 'Reveal secret', difficulty: 'Easy' },
            { id: 7, question: 'Once in a blue moon', options: ['Rarely', 'Often', 'Never', 'Weekly'], correctAnswer: 'Rarely', difficulty: 'Easy' },
            { id: 8, question: 'When pigs fly', options: ['Impossible', 'Possible', 'Weekend', 'Summer'], correctAnswer: 'Impossible', difficulty: 'Easy' },
            { id: 9, question: 'A dime a dozen', options: ['Common', 'Rare', 'Expensive', 'Unique'], correctAnswer: 'Common', difficulty: 'Easy' },
            { id: 10, question: 'Call it a day', options: ['Stop working', 'Start working', 'Name a day', 'Sleep'], correctAnswer: 'Stop working', difficulty: 'Easy' },

            { id: 11, question: 'Bite the bullet', options: ['Endure pain', 'Eat fast', 'Fight', 'Shoot'], correctAnswer: 'Endure pain', difficulty: 'Medium' },
            { id: 12, question: 'Barking up the wrong tree', options: ['Wrong place', 'Climbing', 'Yelling', 'Helping'], correctAnswer: 'Wrong place', difficulty: 'Medium' },
            { id: 13, question: 'Burn the midnight oil', options: ['Work late', 'Start fire', 'Waste oil', 'Sleep late'], correctAnswer: 'Work late', difficulty: 'Medium' },
            { id: 14, question: 'Spill the beans', options: ['Reveal secret', 'Make mess', 'Cook', 'Buy'], correctAnswer: 'Reveal secret', difficulty: 'Medium' },
            { id: 15, question: 'Blessing in disguise', options: ['Good in bad', 'Bad luck', 'Costume', 'Enemy'], correctAnswer: 'Good in bad', difficulty: 'Medium' },
            { id: 16, question: 'Beat around the bush', options: ['Avoid topic', 'Hit bush', 'Gardening', 'Direct'], correctAnswer: 'Avoid topic', difficulty: 'Medium' },
            { id: 17, question: 'Best of both worlds', options: ['All advantages', 'Two planets', 'Traveling', 'Rich'], correctAnswer: 'All advantages', difficulty: 'Medium' },
            { id: 18, question: 'Cry over spilled milk', options: ['Regret', 'Clean up', 'Buy milk', 'Sad'], correctAnswer: 'Regret', difficulty: 'Medium' },
            { id: 19, question: 'Devil\'s advocate', options: ['Counter-arguer', 'Lawyer', 'Enemy', 'Friend'], correctAnswer: 'Counter-arguer', difficulty: 'Medium' },
            { id: 20, question: 'In the heat of the moment', options: ['Without thinking', 'Summer', 'Cooking', 'Angry'], correctAnswer: 'Without thinking', difficulty: 'Medium' },

            { id: 21, question: 'Throw in the towel', options: ['Give up', 'Dry off', 'Fight back', 'Clean'], correctAnswer: 'Give up', difficulty: 'Hard' },
            { id: 22, question: 'Take with a grain of salt', options: ['Skeptically', 'Tastily', 'Seriously', 'Literally'], correctAnswer: 'Skeptically', difficulty: 'Hard' },
            { id: 23, question: 'Jump on the bandwagon', options: ['Follow trend', 'Play music', 'Repair wagon', 'Travel'], correctAnswer: 'Follow trend', difficulty: 'Hard' },
            { id: 24, question: 'Cut corners', options: ['Save money/effort', 'Geometry', 'Driving', 'Sharp'], correctAnswer: 'Save money/effort', difficulty: 'Hard' },
            { id: 25, question: 'Face the music', options: ['Accept consequence', 'Listen', 'Dance', 'Sing'], correctAnswer: 'Accept consequence', difficulty: 'Hard' },
            { id: 26, question: 'Whole nine yards', options: ['Everything', 'Length', 'Fabric', 'Nothing'], correctAnswer: 'Everything', difficulty: 'Hard' },
            { id: 27, question: 'Elvis has left the building', options: ['It is over', 'Music start', 'Concert', 'Party'], correctAnswer: 'It is over', difficulty: 'Hard' },
            { id: 28, question: 'Caught between a rock and hard place', options: ['Difficult choice', 'Stuck', 'Hiking', 'Easy'], correctAnswer: 'Difficult choice', difficulty: 'Hard' },
            { id: 29, question: 'Steal someone\'s thunder', options: ['Take credit', 'Make noise', 'Storm', 'Help'], correctAnswer: 'Take credit', difficulty: 'Hard' },
            { id: 30, question: 'Wild goose chase', options: ['Hopeless pursuit', 'Hunting', 'Racing', 'Cooking'], correctAnswer: 'Hopeless pursuit', difficulty: 'Hard' }
        ]
    },
    {
        id: 'spelling',
        title: 'Spelling Check',
        description: 'Identify the correctly spelled word',
        icon: 'abc',
        color: 'from-teal-500 to-cyan-500',
        questions: [
            { id: 1, question: 'Select correct spelling', options: ['Receive', 'Recieve', 'Receve', 'Riceive'], correctAnswer: 'Receive', difficulty: 'Easy' },
            { id: 2, question: 'Select correct spelling', options: ['Believe', 'Beleive', 'Believ', 'Beleave'], correctAnswer: 'Believe', difficulty: 'Easy' },
            { id: 3, question: 'Select correct spelling', options: ['Friend', 'Freind', 'Frend', 'Frind'], correctAnswer: 'Friend', difficulty: 'Easy' },
            { id: 4, question: 'Select correct spelling', options: ['School', 'Shcool', 'Scool', 'Skool'], correctAnswer: 'School', difficulty: 'Easy' },
            { id: 5, question: 'Select correct spelling', options: ['Teacher', 'Techer', 'Teecher', 'Teachr'], correctAnswer: 'Teacher', difficulty: 'Easy' },
            { id: 6, question: 'Select correct spelling', options: ['Correct', 'Corect', 'Correc', 'Currect'], correctAnswer: 'Correct', difficulty: 'Easy' },
            { id: 7, question: 'Select correct spelling', options: ['Grammar', 'Grammer', 'Gramar', 'Gramer'], correctAnswer: 'Grammar', difficulty: 'Easy' },
            { id: 8, question: 'Select correct spelling', options: ['Writing', 'Writting', 'Riting', 'Writeing'], correctAnswer: 'Writing', difficulty: 'Easy' },
            { id: 9, question: 'Select correct spelling', options: ['Tomorrow', 'Tommorow', 'Tommorrow', 'Tomorow'], correctAnswer: 'Tomorrow', difficulty: 'Easy' },
            { id: 10, question: 'Select correct spelling', options: ['Business', 'Bussiness', 'Bisness', 'Busines'], correctAnswer: 'Business', difficulty: 'Easy' },

            { id: 11, question: 'Select correct spelling', options: ['Accommodate', 'Accomodate', 'Acommodate', 'Acomodate'], correctAnswer: 'Accommodate', difficulty: 'Medium' },
            { id: 12, question: 'Select correct spelling', options: ['Definitely', 'Definately', 'Definetly', 'Definitly'], correctAnswer: 'Definitely', difficulty: 'Medium' },
            { id: 13, question: 'Select correct spelling', options: ['Occurred', 'Occured', 'Ocurred', 'Occurrd'], correctAnswer: 'Occurred', difficulty: 'Medium' },
            { id: 14, question: 'Select correct spelling', options: ['Embarrass', 'Embarass', 'Embarras', 'Embaras'], correctAnswer: 'Embarrass', difficulty: 'Medium' },
            { id: 15, question: 'Select correct spelling', options: ['Separate', 'Seperate', 'Seperat', 'Separat'], correctAnswer: 'Separate', difficulty: 'Medium' },
            { id: 16, question: 'Select correct spelling', options: ['Necessary', 'Neccessary', 'Necesary', 'Necessery'], correctAnswer: 'Necessary', difficulty: 'Medium' },
            { id: 17, question: 'Select correct spelling', options: ['Argument', 'Arguement', 'Argumant', 'Argament'], correctAnswer: 'Argument', difficulty: 'Medium' },
            { id: 18, question: 'Select correct spelling', options: ['Maintenance', 'Maintainance', 'Maintanance', 'Maintenence'], correctAnswer: 'Maintenance', difficulty: 'Medium' },
            { id: 19, question: 'Select correct spelling', options: ['Privilege', 'Privelege', 'Priviledge', 'Priveledge'], correctAnswer: 'Privilege', difficulty: 'Medium' },
            { id: 20, question: 'Select correct spelling', options: ['Schedule', 'Shedule', 'Scheduale', 'Skedule'], correctAnswer: 'Schedule', difficulty: 'Medium' },

            { id: 21, question: 'Select correct spelling', options: ['Bureaucracy', 'Beureaucracy', 'Bureacracy', 'Bureaucrasy'], correctAnswer: 'Bureaucracy', difficulty: 'Hard' },
            { id: 22, question: 'Select correct spelling', options: ['Entrepreneur', 'Entreprenur', 'Entreprneur', 'Enterpreneur'], correctAnswer: 'Entrepreneur', difficulty: 'Hard' },
            { id: 23, question: 'Select correct spelling', options: ['Mischievous', 'Mischevious', 'Mischivous', 'Mischevous'], correctAnswer: 'Mischievous', difficulty: 'Hard' },
            { id: 24, question: 'Select correct spelling', options: ['Conscience', 'Concience', 'Consience', 'Conscence'], correctAnswer: 'Conscience', difficulty: 'Hard' },
            { id: 25, question: 'Select correct spelling', options: ['Gauge', 'Guage', 'Gage', 'Gauage'], correctAnswer: 'Gauge', difficulty: 'Hard' },
            { id: 26, question: 'Select correct spelling', options: ['Milieu', 'Mileu', 'Milleu', 'Miliue'], correctAnswer: 'Milieu', difficulty: 'Hard' },
            { id: 27, question: 'Select correct spelling', options: ['Liaison', 'Liason', 'Liasion', 'Laision'], correctAnswer: 'Liaison', difficulty: 'Hard' },
            { id: 28, question: 'Select correct spelling', options: ['Surveillance', 'Surveilance', 'Survaylance', 'Survelance'], correctAnswer: 'Surveillance', difficulty: 'Hard' },
            { id: 29, question: 'Select correct spelling', options: ['Pronunciation', 'Pronounciation', 'Prononciation', 'Pronuncation'], correctAnswer: 'Pronunciation', difficulty: 'Hard' },
            { id: 30, question: 'Select correct spelling', options: ['Questionnaire', 'Questionaire', 'Questionnare', 'Questionair'], correctAnswer: 'Questionnaire', difficulty: 'Hard' }
        ]
    },
    {
        id: 'sentence-correction',
        title: 'Sentence Correction',
        description: 'Find the grammatically correct sentence',
        icon: '✍️',
        color: 'from-pink-500 to-rose-500',
        questions: [
            { id: 1, question: 'Correct sentence', options: ['She doesn\'t like apples.', 'She don\'t like apples.', 'She not like apples.', 'She no like apples.'], correctAnswer: 'She doesn\'t like apples.', difficulty: 'Easy' },
            { id: 2, question: 'Correct sentence', options: ['I saw him yesterday.', 'I have seen him yesterday.', 'I seen him yesterday.', 'I see him yesterday.'], correctAnswer: 'I saw him yesterday.', difficulty: 'Easy' },
            { id: 3, question: 'Correct sentence', options: ['He plays football.', 'He play football.', 'He playing football.', 'He is play football.'], correctAnswer: 'He plays football.', difficulty: 'Easy' },
            { id: 4, question: 'Correct sentence', options: ['They are students.', 'They is students.', 'They be students.', 'They am students.'], correctAnswer: 'They are students.', difficulty: 'Easy' },
            { id: 5, question: 'Correct sentence', options: ['I am going home.', 'I am go home.', 'I going home.', 'I go home now.'], correctAnswer: 'I am going home.', difficulty: 'Easy' },
            { id: 6, question: 'Correct sentence', options: ['Can you help me?', 'Can you helps me?', 'Can you helping me?', 'Can help me?'], correctAnswer: 'Can you help me?', difficulty: 'Easy' },
            { id: 7, question: 'Correct sentence', options: ['Where do you live?', 'Where you live?', 'Where does you live?', 'Where living you?'], correctAnswer: 'Where do you live?', difficulty: 'Easy' },
            { id: 8, question: 'Correct sentence', options: ['I have a car.', 'I has a car.', 'I having a car.', 'I haves a car.'], correctAnswer: 'I have a car.', difficulty: 'Easy' },
            { id: 9, question: 'Correct sentence', options: ['She is beautiful.', 'She are beautiful.', 'She be beautiful.', 'She am beautiful.'], correctAnswer: 'She is beautiful.', difficulty: 'Easy' },
            { id: 10, question: 'Correct sentence', options: ['We went to the park.', 'We goed to the park.', 'We gone to the park.', 'We go to the park yesterday.'], correctAnswer: 'We went to the park.', difficulty: 'Easy' },

            { id: 11, question: 'Correct sentence', options: ['One of the boys is missing.', 'One of the boys are missing.', 'One of the boy is missing.', 'One of boy is missing.'], correctAnswer: 'One of the boys is missing.', difficulty: 'Medium' },
            { id: 12, question: 'Correct sentence', options: ['He is superior to me.', 'He is superior than me.', 'He is superior from me.', 'He is more superior than me.'], correctAnswer: 'He is superior to me.', difficulty: 'Medium' },
            { id: 13, question: 'Correct sentence', options: ['Neither of them is coming.', 'Neither of them are coming.', 'Neither of they is coming.', 'Neither of they are coming.'], correctAnswer: 'Neither of them is coming.', difficulty: 'Medium' },
            { id: 14, question: 'Correct sentence', options: ['Unless you work hard, you will fail.', 'Unless you do not work hard, you will fail.', 'Unless you work hard, you fail.', 'Except you work hard, fail.'], correctAnswer: 'Unless you work hard, you will fail.', difficulty: 'Medium' },
            { id: 15, question: 'Correct sentence', options: ['I prefer coffee to tea.', 'I prefer coffee than tea.', 'I prefer coffee over tea.', 'I prefer coffee from tea.'], correctAnswer: 'I prefer coffee to tea.', difficulty: 'Medium' },
            { id: 16, question: 'Correct sentence', options: ['Each of the students has a book.', 'Each of the students have a book.', 'Each students has a book.', 'Each student have a book.'], correctAnswer: 'Each of the students has a book.', difficulty: 'Medium' },
            { id: 17, question: 'Correct sentence', options: ['She is married to a doctor.', 'She is married with a doctor.', 'She is married by a doctor.', 'She married to doctor.'], correctAnswer: 'She is married to a doctor.', difficulty: 'Medium' },
            { id: 18, question: 'Correct sentence', options: ['He died of cancer.', 'He died from cancer.', 'He died with cancer.', 'He died by cancer.'], correctAnswer: 'He died of cancer.', difficulty: 'Medium' },
            { id: 19, question: 'Correct sentence', options: ['Physics is his favorite subject.', 'Physics are his favorite subject.', 'Physic is his favorite subject.', 'Physics were his subject.'], correctAnswer: 'Physics is his favorite subject.', difficulty: 'Medium' },
            { id: 20, question: 'Correct sentence', options: ['I look forward to meeting you.', 'I look forward to meet you.', 'I look forward meeting you.', 'I look forward for meeting you.'], correctAnswer: 'I look forward to meeting you.', difficulty: 'Medium' },

            { id: 21, question: 'Correct sentence', options: ['Had I known, I would have helped.', 'If I knew, I would have helped.', 'Had I known, I would help.', 'If I had known, I will help.'], correctAnswer: 'Had I known, I would have helped.', difficulty: 'Hard' },
            { id: 22, question: 'Correct sentence', options: ['Scarcely had he left when it rained.', 'Scarcely had he left than it rained.', 'Scarcely did he leave when it rained.', 'Scarcely had he left then it rained.'], correctAnswer: 'Scarcely had he left when it rained.', difficulty: 'Hard' },
            { id: 23, question: 'Correct sentence', options: ['No sooner did I arrive than he left.', 'No sooner did I arrive when he left.', 'No sooner had I arrived when he left.', 'No sooner I arrived than he left.'], correctAnswer: 'No sooner did I arrive than he left.', difficulty: 'Hard' },
            { id: 24, question: 'Correct sentence', options: ['He is one of the men who have done this.', 'He is one of the men who has done this.', 'He is one of the man who has done this.', 'He is one of man who have done this.'], correctAnswer: 'He is one of the men who have done this.', difficulty: 'Hard' },
            { id: 25, question: 'Correct sentence', options: ['It is high time we started.', 'It is high time we start.', 'It is high time we should start.', 'It is high time we have started.'], correctAnswer: 'It is high time we started.', difficulty: 'Hard' },
            { id: 26, question: 'Correct sentence', options: ['Let you and me go.', 'Let you and I go.', 'Let I and you go.', 'Let we go.'], correctAnswer: 'Let you and me go.', difficulty: 'Hard' },
            { id: 27, question: 'Correct sentence', options: ['Between you and me, he is lying.', 'Between you and I, he is lying.', 'Between I and you, he is lying.', 'Between me and you, he is lying.'], correctAnswer: 'Between you and me, he is lying.', difficulty: 'Hard' },
            { id: 28, question: 'Correct sentence', options: ['He prevents me from going.', 'He prevents me to go.', 'He prevents me of going.', 'He prevents me not to go.'], correctAnswer: 'He prevents me from going.', difficulty: 'Hard' },
            { id: 29, question: 'Correct sentence', options: ['I availed myself of this opportunity.', 'I availed this opportunity.', 'I availed of this opportunity.', 'I availed myself this opportunity.'], correctAnswer: 'I availed myself of this opportunity.', difficulty: 'Hard' },
            { id: 30, question: 'Correct sentence', options: ['If I were a bird, I would fly.', 'If I was a bird, I would fly.', 'If I am a bird, I will fly.', 'If I be a bird, I would fly.'], correctAnswer: 'If I were a bird, I would fly.', difficulty: 'Hard' }
        ]
    },
    {
        id: 'voice-change',
        title: 'Voice Change',
        description: 'Convert Active to Passive Voice or vice versa',
        icon: 'loudspeaker',
        color: 'from-amber-500 to-orange-600',
        questions: [
            { id: 1, question: 'Voice: "I eat an apple."', options: ['An apple is eaten by me.', 'An apple was eaten by me.', 'An apple is eat by me.', 'An apple has been eaten by me.'], correctAnswer: 'An apple is eaten by me.', difficulty: 'Easy' },
            { id: 2, question: 'Voice: "She sings a song."', options: ['A song is sung by her.', 'A song was sung by her.', 'A song is sang by her.', 'A song has been sung by her.'], correctAnswer: 'A song is sung by her.', difficulty: 'Easy' },
            { id: 3, question: 'Voice: "He wrote a letter."', options: ['A letter was written by him.', 'A letter is written by him.', 'A letter has been written by him.', 'A letter written by him.'], correctAnswer: 'A letter was written by him.', difficulty: 'Easy' },
            { id: 4, question: 'Voice: "They play cricket."', options: ['Cricket is played by them.', 'Cricket was played by them.', 'Cricket are played by them.', 'Cricket plays them.'], correctAnswer: 'Cricket is played by them.', difficulty: 'Easy' },
            { id: 5, question: 'Voice: "I love you."', options: ['You are loved by me.', 'You were loved by me.', 'You is loved by me.', 'You love by me.'], correctAnswer: 'You are loved by me.', difficulty: 'Easy' },

            { id: 11, question: 'Voice: "Who wrote this?"', options: ['By whom was this written?', 'Who was written this?', 'By whom is this written?', 'Who wrote by this?'], correctAnswer: 'By whom was this written?', difficulty: 'Medium' },
            { id: 12, question: 'Voice: "Shut the door."', options: ['Let the door be shut.', 'The door shut.', 'Let door shut.', 'The door is shut.'], correctAnswer: 'Let the door be shut.', difficulty: 'Medium' },
            { id: 13, question: 'Voice: "He is writing a letter."', options: ['A letter is being written by him.', 'A letter is written by him.', 'A letter was being written by him.', 'A letter has been written.'], correctAnswer: 'A letter is being written by him.', difficulty: 'Medium' },
            { id: 14, question: 'Voice: "They had finished work."', options: ['Work had been finished by them.', 'Work has been finished by them.', 'Work was finished.', 'Work finished by them.'], correctAnswer: 'Work had been finished by them.', difficulty: 'Medium' },
            { id: 15, question: 'Voice: "People speak English."', options: ['English is spoken.', 'English was spoken.', 'English is spoken by people.', 'English has spoken.'], correctAnswer: 'English is spoken.', difficulty: 'Medium' },

            { id: 21, question: 'Voice: "Promise should be kept."', options: ['One should keep one\'s promise.', 'Keep promise.', 'Promises are kept.', 'You keep promise.'], correctAnswer: 'One should keep one\'s promise.', difficulty: 'Hard' },
            { id: 22, question: 'Voice: "Let me do this."', options: ['Let this be done by me.', 'Let I do this.', 'This should be done.', 'Let do this.'], correctAnswer: 'Let this be done by me.', difficulty: 'Hard' },
            { id: 23, question: 'Voice: "It is time to close the shop."', options: ['It is time for the shop to be closed.', 'It is time the shop to be close.', 'The shop should be closed.', 'Time to close shop.'], correctAnswer: 'It is time for the shop to be closed.', difficulty: 'Hard' },
            { id: 24, question: 'Voice: "Who taught you grammar?"', options: ['By whom were you taught grammar?', 'Who was taught grammar?', 'By who you taught?', 'Grammar was taught by who?'], correctAnswer: 'By whom were you taught grammar?', difficulty: 'Hard' },
            { id: 25, question: 'Voice: "I know him."', options: ['He is known to me.', 'He is known by me.', 'He knows me.', 'He was known to me.'], correctAnswer: 'He is known to me.', difficulty: 'Hard' }
        ]
    },
    {
        id: 'narration',
        title: 'Direct & Indirect Speech',
        description: 'Convert Direct to Indirect Speech or vice versa',
        icon: 'speech',
        color: 'from-violet-500 to-purple-700',
        questions: [
            { id: 1, question: 'He said, "I am busy."', options: ['He said that he was busy.', 'He said he is busy.', 'He says he was busy.', 'He told he is busy.'], correctAnswer: 'He said that he was busy.', difficulty: 'Easy' },
            { id: 2, question: 'She said, "I play tennis."', options: ['She said that she played tennis.', 'She said she plays tennis.', 'She said she play tennis.', 'She says she played tennis.'], correctAnswer: 'She said that she played tennis.', difficulty: 'Easy' },
            { id: 3, question: 'Tom said, "I am happy."', options: ['Tom said that he was happy.', 'Tom said he is happy.', 'Tom says he was happy.', 'Tom said I am happy.'], correctAnswer: 'Tom said that he was happy.', difficulty: 'Easy' },
            { id: 4, question: 'He said, "It is raining."', options: ['He said that it was raining.', 'He said it is raining.', 'He said that it is raining.', 'He says it was raining.'], correctAnswer: 'He said that it was raining.', difficulty: 'Easy' },
            { id: 5, question: 'She said, "I will go."', options: ['She said that she would go.', 'She said she will go.', 'She said that she will go.', 'She said she goes.'], correctAnswer: 'She said that she would go.', difficulty: 'Easy' },

            { id: 11, question: 'He said to me, "Are you coming?"', options: ['He asked me if I was coming.', 'He asked me if I am coming.', 'He told me if I was coming.', 'He said if I was coming.'], correctAnswer: 'He asked me if I was coming.', difficulty: 'Medium' },
            { id: 12, question: 'She said, "Where is he?"', options: ['She asked where he was.', 'She asked where is he.', 'She asked where he is.', 'She said where he was.'], correctAnswer: 'She asked where he was.', difficulty: 'Medium' },
            { id: 13, question: 'He said, "Honesty is the best policy."', options: ['He said that honesty is the best policy.', 'He said that honesty was the best policy.', 'He said honesty is best.', 'He told honesty is best.'], correctAnswer: 'He said that honesty is the best policy.', difficulty: 'Medium' },
            { id: 14, question: 'Teacher said, "Open your book."', options: ['Teacher ordered to open their books.', 'Teacher said open book.', 'Teacher asked open book.', 'Teacher told open book.'], correctAnswer: 'Teacher ordered to open their books.', difficulty: 'Medium' },
            { id: 15, question: 'He said, "Alas! I am undone."', options: ['He exclaimed with sorrow that he was undone.', 'He said alas he was undone.', 'He exclaimed he is undone.', 'He said sadly he is undone.'], correctAnswer: 'He exclaimed with sorrow that he was undone.', difficulty: 'Medium' },

            { id: 21, question: 'He said, "Let us go home."', options: ['He proposed that they should go home.', 'He said let us go.', 'He told let go home.', 'He asked to go home.'], correctAnswer: 'He proposed that they should go home.', difficulty: 'Hard' },
            { id: 22, question: 'She said, "May you live long!"', options: ['She prayed that I might live long.', 'She said I live long.', 'She wished I live long.', 'She prayed I may live long.'], correctAnswer: 'She prayed that I might live long.', difficulty: 'Hard' },
            { id: 23, question: 'He said, "Good morning, father."', options: ['He wished his father good morning.', 'He said good morning to father.', 'He told father good morning.', 'He asked good morning.'], correctAnswer: 'He wished his father good morning.', difficulty: 'Hard' },
            { id: 24, question: 'He said, "I must go."', options: ['He said that he had to go.', 'He said he must go.', 'He said he must went.', 'He said he has to go.'], correctAnswer: 'He said that he had to go.', difficulty: 'Hard' },
            { id: 25, question: 'He says, "I am busy."', options: ['He says that he is busy.', 'He said that he was busy.', 'He says that he was busy.', 'He said he is busy.'], correctAnswer: 'He says that he is busy.', difficulty: 'Hard' }
        ]
    },
    {
        id: 'parts-of-speech',
        title: 'Parts of Speech',
        description: 'Identify Nouns, Verbs, Adjectives, Adverbs, etc.',
        icon: 'blocks',
        color: 'from-cyan-500 to-blue-600',
        questions: [
            { id: 1, question: 'Noun in: "Cat runs."', options: ['Cat', 'Runs', 'None', 'Both'], correctAnswer: 'Cat', difficulty: 'Easy' },
            { id: 2, question: 'Verb in: "She sings."', options: ['Sings', 'She', 'None', 'Both'], correctAnswer: 'Sings', difficulty: 'Easy' },
            { id: 3, question: 'Adjective in: "Red car."', options: ['Red', 'Car', 'None', 'Both'], correctAnswer: 'Red', difficulty: 'Easy' },
            { id: 4, question: 'Pronoun in: "He looks."', options: ['He', 'Looks', 'None', 'Both'], correctAnswer: 'He', difficulty: 'Easy' },
            { id: 5, question: 'Adverb in: "Runs fast."', options: ['Fast', 'Runs', 'None', 'Both'], correctAnswer: 'Fast', difficulty: 'Easy' },

            { id: 11, question: 'Identify "Fast" in "Fast car"', options: ['Adjective', 'Adverb', 'Noun', 'Verb'], correctAnswer: 'Adjective', difficulty: 'Medium' },
            { id: 12, question: 'Identify "Fast" in "Run fast"', options: ['Adverb', 'Adjective', 'Noun', 'Verb'], correctAnswer: 'Adverb', difficulty: 'Medium' },
            { id: 13, question: 'Identify "Well" in "He is well"', options: ['Adjective', 'Adverb', 'Noun', 'Verb'], correctAnswer: 'Adjective', difficulty: 'Medium' },
            { id: 14, question: 'Identify "Well" in "He sings well"', options: ['Adverb', 'Adjective', 'Noun', 'Verb'], correctAnswer: 'Adverb', difficulty: 'Medium' },
            { id: 15, question: 'Identify "But" in "None but him"', options: ['Preposition', 'Conjunction', 'Adverb', 'Noun'], correctAnswer: 'Preposition', difficulty: 'Medium' },

            { id: 21, question: 'Identify "Round" in "Round the corner"', options: ['Preposition', 'Adjective', 'Noun', 'Verb'], correctAnswer: 'Preposition', difficulty: 'Hard' },
            { id: 22, question: 'Identify "Round" in "A round table"', options: ['Adjective', 'Preposition', 'Noun', 'Verb'], correctAnswer: 'Adjective', difficulty: 'Hard' },
            { id: 23, question: 'Identify "Round" in "The heavy round"', options: ['Noun', 'Adjective', 'Verb', 'Preposition'], correctAnswer: 'Noun', difficulty: 'Hard' },
            { id: 24, question: 'Identify "Since" in "Since he came"', options: ['Conjunction', 'Preposition', 'Adverb', 'Noun'], correctAnswer: 'Conjunction', difficulty: 'Hard' },
            { id: 25, question: 'Identify "Since" in "Ever since"', options: ['Adverb', 'Preposition', 'Conjunction', 'Noun'], correctAnswer: 'Adverb', difficulty: 'Hard' }
        ]
    },
    {
        id: 'tense',
        title: 'Tenses',
        description: 'Identify or correct the tense of the sentence',
        icon: 'clock-history',
        color: 'from-rose-500 to-red-600',
        questions: [
            { id: 1, question: 'Tense: "I eat."', options: ['Simple Present', 'Past', 'Future', 'Continuous'], correctAnswer: 'Simple Present', difficulty: 'Easy' },
            { id: 2, question: 'Tense: "I ate."', options: ['Simple Past', 'Present', 'Future', 'Perfect'], correctAnswer: 'Simple Past', difficulty: 'Easy' },
            { id: 3, question: 'Tense: "I will eat."', options: ['Simple Future', 'Past', 'Present', 'Perfect'], correctAnswer: 'Simple Future', difficulty: 'Easy' },
            { id: 4, question: 'Tense: "I am eating."', options: ['Present Continuous', 'Past Continuous', 'Future', 'Simple'], correctAnswer: 'Present Continuous', difficulty: 'Easy' },
            { id: 5, question: 'Tense: "I have eaten."', options: ['Present Perfect', 'Past Perfect', 'Simple', 'Continuous'], correctAnswer: 'Present Perfect', difficulty: 'Easy' },

            { id: 11, question: 'Tense: "I had eaten."', options: ['Past Perfect', 'Present Perfect', 'Simple Past', 'Future'], correctAnswer: 'Past Perfect', difficulty: 'Medium' },
            { id: 12, question: 'Tense: "I will be eating."', options: ['Future Continuous', 'Simple Future', 'Present', 'Past'], correctAnswer: 'Future Continuous', difficulty: 'Medium' },
            { id: 13, question: 'Tense: "I have been eating."', options: ['Present Perf. Cont.', 'Present Perfect', 'Continuous', 'Past'], correctAnswer: 'Present Perf. Cont.', difficulty: 'Medium' },
            { id: 14, question: 'Tense: "I was eating."', options: ['Past Continuous', 'Present Continuous', 'Simple Past', 'Future'], correctAnswer: 'Past Continuous', difficulty: 'Medium' },
            { id: 15, question: 'Tense: "I will have eaten."', options: ['Future Perfect', 'Future Continuous', 'Simple Future', 'Present'], correctAnswer: 'Future Perfect', difficulty: 'Medium' },

            { id: 21, question: 'Tense: "I had been eating."', options: ['Past Perf. Cont.', 'Present Perf. Cont.', 'Past Perfect', 'Continuous'], correctAnswer: 'Past Perf. Cont.', difficulty: 'Hard' },
            { id: 22, question: 'Tense: "I will have been eating."', options: ['Future Perf. Cont.', 'Future Perfect', 'Continuous', 'Simple'], correctAnswer: 'Future Perf. Cont.', difficulty: 'Hard' },
            { id: 23, question: 'Conditional: "If I go, I will see."', options: ['First Conditional', 'Second', 'Third', 'Zero'], correctAnswer: 'First Conditional', difficulty: 'Hard' },
            { id: 24, question: 'Conditional: "If I went, I would see."', options: ['Second Conditional', 'First', 'Third', 'Zero'], correctAnswer: 'Second Conditional', difficulty: 'Hard' },
            { id: 25, question: 'Conditional: "If I had gone, I would have seen."', options: ['Third Conditional', 'First', 'Second', 'Zero'], correctAnswer: 'Third Conditional', difficulty: 'Hard' }
        ]
    },
    {
        id: 'articles',
        title: 'Articles',
        description: 'Choose the correct article (A, An, The)',
        icon: 'type',
        color: 'from-emerald-500 to-green-600',
        questions: [
            { id: 1, question: '"___ apple."', options: ['An', 'A', 'The', 'None'], correctAnswer: 'An', difficulty: 'Easy' },
            { id: 2, question: '"___ boy."', options: ['A', 'An', 'The', 'None'], correctAnswer: 'A', difficulty: 'Easy' },
            { id: 3, question: '"___ sun."', options: ['The', 'A', 'An', 'None'], correctAnswer: 'The', difficulty: 'Easy' },
            { id: 4, question: '"___ egg."', options: ['An', 'A', 'The', 'None'], correctAnswer: 'An', difficulty: 'Easy' },
            { id: 5, question: '"___ pen."', options: ['A', 'An', 'The', 'None'], correctAnswer: 'A', difficulty: 'Easy' },

            { id: 11, question: '"___ hour."', options: ['An', 'A', 'The', 'None'], correctAnswer: 'An', difficulty: 'Medium' },
            { id: 12, question: '"___ university."', options: ['A', 'An', 'The', 'None'], correctAnswer: 'A', difficulty: 'Medium' },
            { id: 13, question: '"___ European."', options: ['A', 'An', 'The', 'None'], correctAnswer: 'A', difficulty: 'Medium' },
            { id: 14, question: '"___ M.P."', options: ['An', 'A', 'The', 'None'], correctAnswer: 'An', difficulty: 'Medium' },
            { id: 15, question: '"___ one-eyed man."', options: ['A', 'An', 'The', 'None'], correctAnswer: 'A', difficulty: 'Medium' },

            { id: 21, question: '"___ rich should help the poor."', options: ['The', 'A', 'An', 'None'], correctAnswer: 'The', difficulty: 'Hard' },
            { id: 22, question: '"Gold is ___ precious metal."', options: ['A', 'An', 'The', 'None'], correctAnswer: 'A', difficulty: 'Hard' },
            { id: 23, question: '"___ water of this well is dirty."', options: ['The', 'A', 'An', 'None'], correctAnswer: 'The', difficulty: 'Hard' },
            { id: 24, question: '"He is ___ Newton of our day."', options: ['The', 'A', 'An', 'None'], correctAnswer: 'The', difficulty: 'Hard' },
            { id: 25, question: '"Man is ___ mortal."', options: ['None', 'A', 'An', 'The'], correctAnswer: 'None', difficulty: 'Hard' }
        ]
    },
    {
        id: 'prepositions',
        title: 'Prepositions',
        description: 'Fill in the correct preposition',
        icon: 'map-pin',
        color: 'from-indigo-500 to-blue-700',
        questions: [
            { id: 1, question: 'Book is ___ table.', options: ['On', 'In', 'At', 'By'], correctAnswer: 'On', difficulty: 'Easy' },
            { id: 2, question: 'He is ___ the room.', options: ['In', 'On', 'At', 'By'], correctAnswer: 'In', difficulty: 'Easy' },
            { id: 3, question: 'Look ___ me.', options: ['At', 'In', 'On', 'By'], correctAnswer: 'At', difficulty: 'Easy' },
            { id: 4, question: 'Go ___ school.', options: ['To', 'In', 'At', 'By'], correctAnswer: 'To', difficulty: 'Easy' },
            { id: 5, question: 'Come ___ me.', options: ['With', 'To', 'On', 'At'], correctAnswer: 'With', difficulty: 'Easy' },

            { id: 11, question: 'Afraid ___ dogs.', options: ['Of', 'From', 'By', 'With'], correctAnswer: 'Of', difficulty: 'Medium' },
            { id: 12, question: 'Good ___ math.', options: ['At', 'In', 'On', 'With'], correctAnswer: 'At', difficulty: 'Medium' },
            { id: 13, question: 'Listen ___ me.', options: ['To', 'At', 'On', 'With'], correctAnswer: 'To', difficulty: 'Medium' },
            { id: 14, question: 'Interested ___ music.', options: ['In', 'At', 'On', 'For'], correctAnswer: 'In', difficulty: 'Medium' },
            { id: 15, question: 'Famous ___ cheese.', options: ['For', 'At', 'In', 'With'], correctAnswer: 'For', difficulty: 'Medium' },

            { id: 21, question: 'Abide ___ rules.', options: ['By', 'With', 'To', 'At'], correctAnswer: 'By', difficulty: 'Hard' },
            { id: 22, question: 'Accused ___ theft.', options: ['Of', 'With', 'By', 'For'], correctAnswer: 'Of', difficulty: 'Hard' },
            { id: 23, question: 'Senior ___ me.', options: ['To', 'Than', 'From', 'Of'], correctAnswer: 'To', difficulty: 'Hard' },
            { id: 24, question: 'Prefer tea ___ coffee.', options: ['To', 'Than', 'Over', 'From'], correctAnswer: 'To', difficulty: 'Hard' },
            { id: 25, question: 'Died ___ cholera.', options: ['Of', 'From', 'By', 'With'], correctAnswer: 'Of', difficulty: 'Hard' }
        ]
    }
];
