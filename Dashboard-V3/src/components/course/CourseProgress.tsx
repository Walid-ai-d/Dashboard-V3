import React from 'react';
import { TrendingUp, Target, Clock, BookOpen } from 'lucide-react';
import Card from '../ui/Card';

interface CourseProgressProps {
  subject: string;
}

const CourseProgress: React.FC<CourseProgressProps> = ({ subject }) => {
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1).replace('-', ' ');
  
  const progressData = [
    { week: 'Week 1', progress: 25, hours: 8 },
    { week: 'Week 2', progress: 45, hours: 12 },
    { week: 'Week 3', progress: 68, hours: 15 },
    { week: 'Week 4', progress: 85, hours: 18 }
  ];

  const moduleProgress = [
    { module: 'Basic Concepts', progress: 100, status: 'completed' },
    { module: 'Intermediate Topics', progress: 75, status: 'in-progress' },
    { module: 'Advanced Concepts', progress: 25, status: 'in-progress' },
    { module: 'Final Project', progress: 0, status: 'not-started' }
  ];

  const studyStats = [
    { label: 'Total Study Time', value: '53 hours', icon: <Clock size={16} /> },
    { label: 'Average Session', value: '2.5 hours', icon: <Target size={16} /> },
    { label: 'Completion Rate', value: '68%', icon: <TrendingUp size={16} /> },
    { label: 'Current Streak', value: '7 days', icon: <BookOpen size={16} /> }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <TrendingUp size={20} />
          <span>Weekly Progress in {subjectName}</span>
        </h4>
        <div className="grid grid-cols-4 gap-4">
          {progressData.map((week) => (
            <div key={week.week} className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">{week.week}</div>
              <div className="bg-gray-200 rounded-lg h-20 flex items-end justify-center p-2">
                <div 
                  className="bg-blue-500 rounded w-full transition-all duration-500"
                  style={{ height: `${week.progress}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-2">{week.progress}%</div>
              <div className="text-xs text-gray-400">{week.hours}h</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Target size={20} />
            <span>Module Progress</span>
          </h4>
          <div className="space-y-3">
            {moduleProgress.map((module, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{module.module}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    module.status === 'completed' ? 'bg-green-100 text-green-800' :
                    module.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {module.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      module.status === 'completed' ? 'bg-green-500' :
                      module.status === 'in-progress' ? 'bg-blue-500' :
                      'bg-gray-400'
                    }`}
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500">{module.progress}% complete</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Clock size={20} />
            <span>Study Statistics</span>
          </h4>
          <div className="space-y-4">
            {studyStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="text-gray-500">{stat.icon}</div>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <span className="text-sm font-medium text-gray-800">{stat.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h4 className="font-semibold text-gray-800 mb-4">Learning Milestones</h4>
        <div className="space-y-3">
          {[
            { milestone: 'First Course Started', date: '2 weeks ago', status: 'completed' },
            { milestone: 'First Quiz Completed', date: '1 week ago', status: 'completed' },
            { milestone: 'Module 1 Finished', date: '5 days ago', status: 'completed' },
            { milestone: 'Midterm Assessment', date: 'In progress', status: 'current' },
            { milestone: 'Final Project', date: 'Upcoming', status: 'upcoming' }
          ].map((milestone, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${
                milestone.status === 'completed' ? 'bg-green-500' :
                milestone.status === 'current' ? 'bg-blue-500' :
                'bg-gray-300'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{milestone.milestone}</p>
                <p className="text-xs text-gray-500">{milestone.date}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                milestone.status === 'current' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {milestone.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CourseProgress;