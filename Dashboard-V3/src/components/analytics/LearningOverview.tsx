import React from 'react';
import { Clock, BookOpen, Trophy, Target, TrendingUp, Star } from 'lucide-react';
import MetricCard from '../MetricCard';
import Card from '../ui/Card';

interface LearningOverviewProps {
  dateRange: string;
}

const LearningOverview: React.FC<LearningOverviewProps> = ({ dateRange }) => {
  const metrics = [
    {
      title: 'Study Time',
      value: '24h 30m',
      icon: <Clock size={24} />,
      color: 'blue',
      trend: 'up' as const,
      trendValue: '+2h',
      subtitle: 'This week'
    },
    {
      title: 'Courses Active',
      value: 5,
      icon: <BookOpen size={24} />,
      color: 'green',
      trend: 'up' as const,
      trendValue: '+1',
      subtitle: 'Currently studying'
    },
    {
      title: 'Completed',
      value: 12,
      icon: <Trophy size={24} />,
      color: 'purple',
      trend: 'up' as const,
      trendValue: '+3',
      subtitle: 'Courses finished'
    },
    {
      title: 'Average Score',
      value: '87%',
      icon: <Target size={24} />,
      color: 'yellow',
      trend: 'up' as const,
      trendValue: '+5%',
      subtitle: 'Across all subjects'
    }
  ];

  const recentAchievements = [
    { title: 'Chemistry Master', description: 'Completed Organic Chemistry course', date: '2 days ago', icon: '🧪' },
    { title: 'Study Streak', description: '7 days of continuous learning', date: '1 week ago', icon: '🔥' },
    { title: 'Quiz Champion', description: 'Perfect score on Physics quiz', date: '1 week ago', icon: '🏆' }
  ];

  const subjectProgress = [
    { subject: 'Chemistry', progress: 85, color: 'red' },
    { subject: 'Physics', progress: 72, color: 'blue' },
    { subject: 'Mathematics', progress: 94, color: 'green' },
    { subject: 'Biology', progress: 68, color: 'purple' }
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subject Progress */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <TrendingUp size={20} />
            <span>Subject Progress</span>
          </h3>
          <div className="space-y-4">
            {subjectProgress.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{subject.subject}</span>
                  <span className="text-sm text-gray-600">{subject.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`bg-${subject.color}-500 h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Achievements */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Star size={20} />
            <span>Recent Achievements</span>
          </h3>
          <div className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Learning Insights */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Learning Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Best Study Time</h4>
            <p className="text-sm text-blue-700">You're most productive between 7-9 PM</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Strongest Subject</h4>
            <p className="text-sm text-green-700">Mathematics with 94% average score</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">Study Streak</h4>
            <p className="text-sm text-purple-700">7 consecutive days of learning</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LearningOverview;