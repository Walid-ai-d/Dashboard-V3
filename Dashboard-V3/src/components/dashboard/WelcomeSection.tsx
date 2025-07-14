import React from 'react';
import Card from '../ui/Card';

const WelcomeSection: React.FC = () => {
  return (
    <Card className="p-8 mb-8 animate-in slide-in-from-top-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hello, Walid Ahmed 👋
          </h1>
          <p className="text-gray-600 mb-4">Welcome to Alt Academy ❤️</p>
          <p className="text-gray-700 max-w-2xl">
            We're super excited to have you join us on this journey and hope you love the experience 
            as much as we have loved creating it for you. Let's get you started, shall we?
          </p>
        </div>
        <div className="hidden md:block">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            WA
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeSection;