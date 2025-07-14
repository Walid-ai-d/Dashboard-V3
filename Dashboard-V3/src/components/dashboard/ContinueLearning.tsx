import React from 'react';
import { ArrowRight } from 'lucide-react';
import Card from '../ui/Card';

const ContinueLearning: React.FC = () => {
  return (
    <Card className="p-6 animate-in slide-in-from-left-4 duration-500">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Continue Learning</h2>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Organic Chemistry Basics</h3>
            <p className="text-blue-100 mb-1">CHEMISTRY • A-Level</p>
            <p className="text-blue-200 text-sm">Last Opened: Today, 3:00 PM</p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center space-x-2">
            <span>Continue</span>
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full transition-all duration-500" style={{ width: '75%' }} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContinueLearning;