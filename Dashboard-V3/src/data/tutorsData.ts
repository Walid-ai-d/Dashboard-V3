export interface AITutor {
  id: string;
  name: string;
  subject: string;
  specialty: string;
  rating: number;
  sessions: number;
  description: string;
  color: string;
  features: string[];
  welcomeMessage: string;
  icon: string;
}

export const tutorsData: AITutor[] = [
  {
    id: 'chemistry',
    name: 'ChemBot',
    subject: 'Chemistry',
    specialty: 'Organic & Inorganic Chemistry',
    rating: 4.9,
    sessions: 1234,
    description: 'Expert in molecular structures, reactions, and chemical equations. Perfect for A-Level Chemistry.',
    color: 'from-red-400 to-red-600',
    features: ['Reaction Mechanisms', 'Molecular Visualization', '24/7 Availability'],
    welcomeMessage: "Hi! I'm ChemBot, your chemistry AI tutor. I can help you with organic chemistry, inorganic chemistry, chemical reactions, and more. What would you like to learn today?",
    icon: 'beaker'
  },
  {
    id: 'physics',
    name: 'PhysicsAI',
    subject: 'Physics',
    specialty: 'Quantum & Classical Physics',
    rating: 4.8,
    sessions: 987,
    description: 'Specializes in complex physics concepts, from mechanics to quantum theory.',
    color: 'from-blue-400 to-blue-600',
    features: ['Problem Solving', 'Concept Visualization', 'Step-by-step Solutions'],
    welcomeMessage: "Hello! I'm PhysicsAI, ready to help you understand physics concepts from classical mechanics to quantum theory. What physics topic can I assist you with?",
    icon: 'calculator'
  },
  {
    id: 'mathematics',
    name: 'MathGenius',
    subject: 'Mathematics',
    specialty: 'Calculus & Algebra',
    rating: 4.9,
    sessions: 1567,
    description: 'Advanced mathematical problem solver with expertise in calculus, algebra, and statistics.',
    color: 'from-green-400 to-green-600',
    features: ['Interactive Graphs', 'Formula Derivation', 'Practice Problems'],
    welcomeMessage: "Greetings! I'm MathGenius, your mathematics AI tutor. I can help with calculus, algebra, statistics, and more. What mathematical concept would you like to explore?",
    icon: 'calculator'
  },
  {
    id: 'biology',
    name: 'BioHelper',
    subject: 'Biology',
    specialty: 'Cell Biology & Genetics',
    rating: 4.7,
    sessions: 856,
    description: 'Specialized in life sciences, from cellular processes to ecosystem dynamics.',
    color: 'from-green-500 to-emerald-600',
    features: ['Interactive Diagrams', 'Process Visualization', 'Lab Simulations'],
    welcomeMessage: "Hi there! I'm BioHelper, your biology AI tutor. I can assist with cell biology, genetics, ecology, and more. What biological concept interests you?",
    icon: 'microscope'
  },
  {
    id: 'economics',
    name: 'EconExpert',
    subject: 'Economics',
    specialty: 'Micro & Macroeconomics',
    rating: 4.6,
    sessions: 743,
    description: 'Expert in economic theory, market analysis, and policy implications.',
    color: 'from-yellow-400 to-orange-500',
    features: ['Market Analysis', 'Graph Interpretation', 'Policy Discussion'],
    welcomeMessage: "Welcome! I'm EconExpert, your economics AI tutor. I can help with microeconomics, macroeconomics, and economic policy. What economic concept would you like to explore?",
    icon: 'trending-up'
  }
];

export const getTutorById = (id: string): AITutor | undefined => {
  return tutorsData.find(tutor => tutor.id === id);
};