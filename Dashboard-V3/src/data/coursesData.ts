export interface Course {
  id: string;
  title: string;
  subject: string;
  level: string;
  progress?: number;
  duration?: string;
  students?: number;
  rating?: number;
  description?: string;
  modules?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export const coursesData: Course[] = [
  // Chemistry Courses
  {
    id: 'chem-001',
    title: 'Organic Chemistry Fundamentals',
    subject: 'Chemistry',
    level: 'A-Level',
    progress: 75,
    duration: '8h 30m',
    students: 1234,
    rating: 4.8,
    description: 'Master the fundamentals of organic chemistry including molecular structures, reactions, and mechanisms.',
    modules: ['Introduction to Organic Chemistry', 'Hydrocarbons', 'Functional Groups', 'Reaction Mechanisms'],
    difficulty: 'intermediate'
  },
  {
    id: 'chem-002',
    title: 'Inorganic Chemistry Basics',
    subject: 'Chemistry',
    level: 'AS-Level',
    progress: 45,
    duration: '6h 15m',
    students: 892,
    rating: 4.9,
    description: 'Explore the world of inorganic chemistry, from atomic structure to complex compounds.',
    modules: ['Atomic Structure', 'Periodic Table', 'Chemical Bonding', 'Coordination Compounds'],
    difficulty: 'beginner'
  },
  {
    id: 'chem-003',
    title: 'Physical Chemistry Advanced',
    subject: 'Chemistry',
    level: 'A2-Level',
    progress: 0,
    duration: '10h 45m',
    students: 567,
    rating: 4.7,
    description: 'Advanced concepts in physical chemistry including thermodynamics and kinetics.',
    modules: ['Thermodynamics', 'Chemical Kinetics', 'Equilibrium', 'Electrochemistry'],
    difficulty: 'advanced'
  },

  // Physics Courses
  {
    id: 'phys-001',
    title: 'Quantum Physics Introduction',
    subject: 'Physics',
    level: 'A-Level',
    progress: 60,
    duration: '12h 15m',
    students: 1456,
    rating: 4.9,
    description: 'Introduction to quantum mechanics and its applications in modern physics.',
    modules: ['Wave-Particle Duality', 'Quantum States', 'Uncertainty Principle', 'Quantum Applications'],
    difficulty: 'advanced'
  },
  {
    id: 'phys-002',
    title: 'Classical Mechanics',
    subject: 'Physics',
    level: 'AS-Level',
    progress: 30,
    duration: '9h 30m',
    students: 1123,
    rating: 4.8,
    description: 'Fundamental principles of classical mechanics and motion.',
    modules: ['Kinematics', 'Dynamics', 'Energy and Momentum', 'Rotational Motion'],
    difficulty: 'intermediate'
  },
  {
    id: 'phys-003',
    title: 'Thermodynamics Principles',
    subject: 'Physics',
    level: 'A2-Level',
    progress: 0,
    duration: '7h 45m',
    students: 789,
    rating: 4.6,
    description: 'Study heat, energy, and the laws of thermodynamics.',
    modules: ['First Law', 'Second Law', 'Heat Engines', 'Entropy'],
    difficulty: 'advanced'
  },

  // Mathematics Courses
  {
    id: 'math-001',
    title: 'Calculus and Derivatives',
    subject: 'Mathematics',
    level: 'A-Level',
    progress: 90,
    duration: '10h 45m',
    students: 2156,
    rating: 4.7,
    description: 'Master differential calculus and its applications.',
    modules: ['Limits', 'Derivatives', 'Applications of Derivatives', 'Optimization'],
    difficulty: 'intermediate'
  },
  {
    id: 'math-002',
    title: 'Linear Algebra Basics',
    subject: 'Mathematics',
    level: 'AS-Level',
    progress: 55,
    duration: '8h 20m',
    students: 1678,
    rating: 4.8,
    description: 'Introduction to vectors, matrices, and linear transformations.',
    modules: ['Vectors', 'Matrices', 'Linear Systems', 'Eigenvalues'],
    difficulty: 'intermediate'
  },
  {
    id: 'math-003',
    title: 'Statistics and Probability',
    subject: 'Mathematics',
    level: 'A2-Level',
    progress: 25,
    duration: '9h 15m',
    students: 1234,
    rating: 4.5,
    description: 'Statistical analysis and probability theory.',
    modules: ['Descriptive Statistics', 'Probability', 'Distributions', 'Hypothesis Testing'],
    difficulty: 'intermediate'
  },

  // Biology Courses
  {
    id: 'bio-001',
    title: 'Cell Biology Fundamentals',
    subject: 'Biology',
    level: 'AS-Level',
    progress: 30,
    duration: '6h 20m',
    students: 756,
    rating: 4.6,
    description: 'Explore the structure and function of cells.',
    modules: ['Cell Structure', 'Cell Membrane', 'Organelles', 'Cell Division'],
    difficulty: 'beginner'
  },
  {
    id: 'bio-002',
    title: 'Genetics and Heredity',
    subject: 'Biology',
    level: 'A-Level',
    progress: 0,
    duration: '8h 45m',
    students: 654,
    rating: 4.7,
    description: 'Understanding inheritance patterns and genetic principles.',
    modules: ['Mendelian Genetics', 'DNA Structure', 'Gene Expression', 'Mutations'],
    difficulty: 'intermediate'
  },
  {
    id: 'bio-003',
    title: 'Ecology and Environment',
    subject: 'Biology',
    level: 'A2-Level',
    progress: 15,
    duration: '7h 30m',
    students: 543,
    rating: 4.5,
    description: 'Study ecosystems, biodiversity, and environmental interactions.',
    modules: ['Ecosystems', 'Food Chains', 'Conservation', 'Climate Change'],
    difficulty: 'intermediate'
  },

  // Economics Courses
  {
    id: 'econ-001',
    title: 'Microeconomics Principles',
    subject: 'Economics',
    level: 'A-Level',
    progress: 0,
    duration: '9h 10m',
    students: 543,
    rating: 4.5,
    description: 'Study individual economic behavior and market structures.',
    modules: ['Supply and Demand', 'Market Structures', 'Consumer Theory', 'Producer Theory'],
    difficulty: 'intermediate'
  },
  {
    id: 'econ-002',
    title: 'Macroeconomics Basics',
    subject: 'Economics',
    level: 'AS-Level',
    progress: 40,
    duration: '7h 30m',
    students: 432,
    rating: 4.4,
    description: 'Understand national economies and economic policy.',
    modules: ['GDP and Growth', 'Inflation', 'Unemployment', 'Fiscal Policy'],
    difficulty: 'beginner'
  },
  {
    id: 'econ-003',
    title: 'International Economics',
    subject: 'Economics',
    level: 'A2-Level',
    progress: 20,
    duration: '8h 15m',
    students: 321,
    rating: 4.6,
    description: 'Explore global trade, exchange rates, and international finance.',
    modules: ['Trade Theory', 'Exchange Rates', 'Balance of Payments', 'Globalization'],
    difficulty: 'advanced'
  },

  // Accounts Courses
  {
    id: 'acc-001',
    title: 'Financial Accounting Basics',
    subject: 'Accounts',
    level: 'AS-Level',
    progress: 60,
    duration: '11h 30m',
    students: 432,
    rating: 4.4,
    description: 'Learn the fundamentals of financial accounting and bookkeeping.',
    modules: ['Double Entry', 'Trial Balance', 'Financial Statements', 'Adjustments'],
    difficulty: 'beginner'
  },
  {
    id: 'acc-002',
    title: 'Management Accounting',
    subject: 'Accounts',
    level: 'A-Level',
    progress: 35,
    duration: '9h 45m',
    students: 298,
    rating: 4.5,
    description: 'Advanced accounting for business decision making.',
    modules: ['Cost Analysis', 'Budgeting', 'Performance Measurement', 'Decision Making'],
    difficulty: 'intermediate'
  },

  // Business Courses
  {
    id: 'bus-001',
    title: 'Business Studies Fundamentals',
    subject: 'Business',
    level: 'AS-Level',
    progress: 50,
    duration: '8h 20m',
    students: 567,
    rating: 4.3,
    description: 'Introduction to business concepts and entrepreneurship.',
    modules: ['Business Environment', 'Marketing', 'Finance', 'Operations'],
    difficulty: 'beginner'
  },
  {
    id: 'bus-002',
    title: 'Strategic Management',
    subject: 'Business',
    level: 'A-Level',
    progress: 25,
    duration: '10h 15m',
    students: 345,
    rating: 4.6,
    description: 'Advanced business strategy and management principles.',
    modules: ['Strategic Planning', 'Competitive Analysis', 'Leadership', 'Change Management'],
    difficulty: 'advanced'
  },

  // Computer Science Courses
  {
    id: 'cs-001',
    title: 'Programming Fundamentals',
    subject: 'Computer Science',
    level: 'AS-Level',
    progress: 70,
    duration: '12h 30m',
    students: 789,
    rating: 4.7,
    description: 'Learn the basics of programming and computational thinking.',
    modules: ['Variables and Data Types', 'Control Structures', 'Functions', 'Arrays'],
    difficulty: 'beginner'
  },
  {
    id: 'cs-002',
    title: 'Data Structures and Algorithms',
    subject: 'Computer Science',
    level: 'A-Level',
    progress: 40,
    duration: '15h 45m',
    students: 456,
    rating: 4.8,
    description: 'Advanced programming concepts and problem-solving techniques.',
    modules: ['Linked Lists', 'Trees', 'Graphs', 'Sorting Algorithms'],
    difficulty: 'advanced'
  },

  // Psychology Courses
  {
    id: 'psy-001',
    title: 'Introduction to Psychology',
    subject: 'Psychology',
    level: 'AS-Level',
    progress: 55,
    duration: '9h 15m',
    students: 623,
    rating: 4.4,
    description: 'Explore the fundamentals of human behavior and mental processes.',
    modules: ['Cognitive Psychology', 'Social Psychology', 'Developmental Psychology', 'Research Methods'],
    difficulty: 'beginner'
  },
  {
    id: 'psy-002',
    title: 'Abnormal Psychology',
    subject: 'Psychology',
    level: 'A-Level',
    progress: 30,
    duration: '11h 20m',
    students: 387,
    rating: 4.6,
    description: 'Study psychological disorders and therapeutic approaches.',
    modules: ['Mental Disorders', 'Diagnostic Criteria', 'Treatment Methods', 'Case Studies'],
    difficulty: 'intermediate'
  }
];

export const getSubjectCourses = (subject: string): Course[] => {
  const subjectMap: { [key: string]: string } = {
    'chemistry': 'Chemistry',
    'physics': 'Physics',
    'mathematics': 'Mathematics',
    'biology': 'Biology',
    'economics': 'Economics',
    'accounts': 'Accounts',
    'business': 'Business',
    'computer-science': 'Computer Science',
    'psychology': 'Psychology'
  };

  const mappedSubject = subjectMap[subject] || subject;
  return coursesData.filter(course => 
    course.subject.toLowerCase() === mappedSubject.toLowerCase()
  );
};

export const getCourseById = (id: string): Course | undefined => {
  return coursesData.find(course => course.id === id);
};

export const getAllSubjects = (): string[] => {
  return [...new Set(coursesData.map(course => course.subject))];
};

export const getCoursesByLevel = (level: string): Course[] => {
  return coursesData.filter(course => course.level === level);
};

export const getPopularCourses = (limit: number = 6): Course[] => {
  return coursesData
    .sort((a, b) => (b.students || 0) - (a.students || 0))
    .slice(0, limit);
};