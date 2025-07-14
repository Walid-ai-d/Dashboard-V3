import React, { useState } from 'react';
import { Calendar, Clock, Target, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface StudyProgressProps {
  dateRange: string;
}

const StudyProgress: React.FC<StudyProgressProps> = ({ dateRange }) => {
  const [viewType, setViewType] = useState('weekly');

  const weeklyData = [
    { day: 'Mon', hours: 3.5, completed: 2 },
    { day: 'Tue', hours: 2.8, completed: 1 },
    { day: 'Wed', hours: 4.2, completed: 3 },
    { day: 'Thu', hours: 1.5, completed: 1 },
    { day: 'Fri', hours: 3.8, completed: 2 },
    { day: 'Sat', hours: 5.2, completed: 4 },
    { day: 'Sun', hours: 2.1, completed: 1 }
  ];

  const monthlyGoals = [
    { goal: 'Complete 5 Chemistry modules', progress: 80, current: 4, target: 5 },
    { goal: 'Study 40 hours total', progress: 65, current: 26, target: 40 },
    { goal: 'Maintain 85% average score', progress: 95, current: 87, target: 85 },
    { goal: 'Finish Physics course', progress: 45, current: 9, target: 20 }
  ];

  const studyStreak = {
    current: 7,
    longest: 12,
    thisMonth: 15
  };

  return (
    <div className="space-y-8">
      {/* View Toggle */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">View:</span>
        <div className="flex space-x-2">
          {['weekly', 'monthly', 'goals'].map((type) => (
            <Button
              key={type}
              variant={viewType === type ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setViewType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {viewType === 'weekly' && (
        <div className="space-y-6">
          {/* Weekly Study Hours */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <Clock size={20} />
              <span>Weekly Study Hours</span>
            </h3>
            <div className="grid grid-cols-7 gap-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="text-center">
                  <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                  <div className="bg-gray-200 rounded-lg h-24 flex items-end justify-center p-2">
                    <div 
                      className="bg-blue-500 rounded w-full transition-all duration-500"
                      style={{ height: `${(day.hours / 6) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{day.hours}h</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Study Streak */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Study Streak</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">{studyStreak.current}</div>
                <div className="text-sm text-orange-700">Current Streak</div>
                <div className="text-xs text-orange-600">days</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">{studyStreak.longest}</div>
                <div className="text-sm text-green-700">Longest Streak</div>
                <div className="text-xs text-green-600">days</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{studyStreak.thisMonth}</div>
                <div className="text-sm text-blue-700">This Month</div>
                <div className="text-xs text-blue-600">days studied</div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {viewType === 'monthly' && (
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Monthly Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">23h</div>
              <div className="text-sm text-blue-700">Total Study Time</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">14</div>
              <div className="text-sm text-green-700">Lessons Completed</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-purple-700">Quizzes Taken</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">89%</div>
              <div className="text-sm text-yellow-700">Average Score</div>
            </div>
          </div>
        </Card>
      )}

      {viewType === 'goals' && (
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Target size={20} />
            <span>Monthly Goals</span>
          </h3>
          <div className="space-y-4">
            {monthlyGoals.map((goal, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-800">{goal.goal}</h4>
                  <span className="text-sm text-gray-600">{goal.current}/{goal.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500">{goal.progress}% complete</div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default StudyProgress;