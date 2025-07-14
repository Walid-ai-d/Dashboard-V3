import React from 'react';
import { Bot, Star, Clock, MessageCircle, ArrowRight, Zap, Brain, Target } from 'lucide-react';

interface AITutorsProps {
  onSelectTutor: (tutor: string) => void;
}

const AITutors: React.FC<AITutorsProps> = ({ onSelectTutor }) => {
  const tutors = [
    {
      id: 'chemistry',
      name: 'ChemBot',
      subject: 'Chemistry',
      specialty: 'Organic & Inorganic Chemistry',
      rating: 4.9,
      sessions: 1234,
      description: 'Expert in molecular structures, reactions, and chemical equations. Perfect for A-Level Chemistry.',
      color: 'from-red-400 to-red-600',
      features: ['Reaction Mechanisms', 'Molecular Visualization', '24/7 Availability']
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
      features: ['Problem Solving', 'Concept Visualization', 'Step-by-step Solutions']
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
      features: ['Interactive Graphs', 'Formula Derivation', 'Practice Problems']
    }
  ];

  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Instant Responses',
      description: 'Get immediate answers to your questions, 24/7'
    },
    {
      icon: <Brain size={24} />,
      title: 'Personalized Learning',
      description: 'AI adapts to your learning style and pace'
    },
    {
      icon: <Target size={24} />,
      title: 'Focused Practice',
      description: 'Targeted exercises based on your weak areas'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Tutors</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get personalized help from our advanced AI tutors, available 24/7 to support your learning journey
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tutors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {tutors.map((tutor, index) => (
          <div
            key={tutor.id}
            className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20 group hover:scale-105 animate-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Header */}
            <div className={`h-32 bg-gradient-to-r ${tutor.color} relative flex items-center justify-center`}>
              <Bot size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <div className="flex items-center space-x-1">
                  <Star size={14} className="text-white fill-white" />
                  <span className="text-white text-sm font-medium">{tutor.rating}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{tutor.name}</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{tutor.subject}</p>
                <p className="text-sm text-gray-600">{tutor.specialty}</p>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{tutor.description}</p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MessageCircle size={14} />
                  <span>{tutor.sessions} sessions</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>24/7 Available</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {tutor.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTutor(tutor.id)}
                className={`w-full bg-gradient-to-r ${tutor.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2 group-hover:scale-105`}
              >
                <span>Start Chat</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose AI Tutors?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Always Available</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
            <p className="text-gray-600">Unlimited Questions</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-gray-600">Personalized</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">0s</div>
            <p className="text-gray-600">Response Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutors;