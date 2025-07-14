import React from 'react';
import { BookOpen, Bot, Calendar, Users } from 'lucide-react';

const QuickActions: React.FC = () => {
  const quickActions = [
    { title: 'Browse Courses', icon: <BookOpen size={20} />, color: 'blue' },
    { title: 'AI Tutors', icon: <Bot size={20} />, color: 'purple' },
    { title: 'Study Calendar', icon: <Calendar size={20} />, color: 'green' },
    { title: 'Community', icon: <Users size={20} />, color: 'red' }
  ];

  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <button
            key={action.title}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105"
          >
            <div className={`w-12 h-12 bg-gradient-to-r from-${action.color}-400 to-${action.color}-600 rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <p className="text-sm font-medium text-gray-700">{action.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;