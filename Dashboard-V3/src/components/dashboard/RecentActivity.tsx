import React from 'react';
import { Activity } from 'lucide-react';
import Card from '../ui/Card';

const RecentActivity: React.FC = () => {
  const recentActivity = [
    { action: 'Completed Module 3 in Chemistry', time: '2 hours ago', type: 'completion' },
    { action: 'Started Physics Chapter 2', time: '5 hours ago', type: 'start' },
    { action: 'Joined Community Discussion', time: '1 day ago', type: 'community' },
    { action: 'Submitted Quiz in Mathematics', time: '2 days ago', type: 'quiz' }
  ];

  return (
    <Card className="p-6 animate-in slide-in-from-right-4 duration-500">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
        <Activity size={20} />
        <span>Recent Activity</span>
      </h3>
      <div className="space-y-3">
        {recentActivity.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`w-2 h-2 rounded-full mt-2 ${
              activity.type === 'completion' ? 'bg-green-500' :
              activity.type === 'start' ? 'bg-blue-500' :
              activity.type === 'community' ? 'bg-purple-500' :
              'bg-yellow-500'
            }`}></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{activity.action}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;