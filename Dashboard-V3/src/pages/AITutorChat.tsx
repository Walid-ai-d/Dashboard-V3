import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Lightbulb, BookOpen, Calculator, Beaker } from 'lucide-react';

interface AITutorChatProps {
  tutorType: string;
}

const AITutorChat: React.FC<AITutorChatProps> = ({ tutorType }) => {
  const [messages, setMessages] = useState<Array<{
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
  }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const tutorInfo = {
    chemistry: {
      name: 'ChemBot',
      icon: <Beaker size={24} />,
      color: 'from-red-400 to-red-600',
      welcomeMessage: "Hi! I'm ChemBot, your chemistry AI tutor. I can help you with organic chemistry, inorganic chemistry, chemical reactions, and more. What would you like to learn today?"
    },
    physics: {
      name: 'PhysicsAI',
      icon: <Calculator size={24} />,
      color: 'from-blue-400 to-blue-600',
      welcomeMessage: "Hello! I'm PhysicsAI, ready to help you understand physics concepts from classical mechanics to quantum theory. What physics topic can I assist you with?"
    },
    mathematics: {
      name: 'MathGenius',
      icon: <Calculator size={24} />,
      color: 'from-green-400 to-green-600',
      welcomeMessage: "Greetings! I'm MathGenius, your mathematics AI tutor. I can help with calculus, algebra, statistics, and more. What mathematical concept would you like to explore?"
    }
  };

  const currentTutor = tutorInfo[tutorType as keyof typeof tutorInfo] || tutorInfo.chemistry;

  const quickQuestions = [
    "Explain the concept of chemical bonding",
    "How do I solve quadratic equations?",
    "What is Newton's second law?",
    "Help me understand photosynthesis",
    "Explain the periodic table trends"
  ];

  useEffect(() => {
    // Add welcome message
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        text: currentTutor.welcomeMessage,
        sender: 'ai',
        timestamp: new Date()
      }]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user' as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(message, tutorType),
        sender: 'ai' as const,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (question: string, subject: string): string => {
    const responses = {
      chemistry: [
        "Great question! In chemistry, this concept relates to molecular interactions and electron behavior. Let me break it down step by step...",
        "This is a fundamental chemistry principle. The key is understanding how atoms interact at the molecular level...",
        "Excellent! This topic involves understanding chemical bonds and molecular structures. Here's how we can approach it..."
      ],
      physics: [
        "Interesting physics question! This involves understanding the fundamental forces and motion principles...",
        "This is a core physics concept. Let's explore the mathematical relationships and physical principles involved...",
        "Great observation! In physics, we need to consider both the theoretical framework and practical applications..."
      ],
      mathematics: [
        "Perfect math question! Let's solve this step by step using mathematical principles and formulas...",
        "This mathematical concept can be understood through logical reasoning and systematic problem-solving...",
        "Excellent! Mathematics is all about patterns and relationships. Let me show you the approach..."
      ]
    };

    const subjectResponses = responses[subject as keyof typeof responses] || responses.chemistry;
    return subjectResponses[Math.floor(Math.random() * subjectResponses.length)];
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 h-screen flex flex-col">
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentTutor.color} text-white rounded-2xl p-6 mb-6 shadow-lg`}>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            {currentTutor.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{currentTutor.name}</h1>
            <p className="text-white/80">AI Tutor • Online Now</p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : `bg-gradient-to-r ${currentTutor.color}`
                }`}>
                  {message.sender === 'user' ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white shadow-md text-gray-800'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${currentTutor.color}`}>
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white shadow-md rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
              <Lightbulb size={16} />
              <span>Quick Questions</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSendMessage(inputMessage)}
              disabled={!inputMessage.trim() || isTyping}
              className={`px-6 py-3 bg-gradient-to-r ${currentTutor.color} text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutorChat;