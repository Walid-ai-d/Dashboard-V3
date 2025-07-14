import React from 'react';
import { Clock, BookOpen, Trophy, Target } from 'lucide-react';
import MetricCard from '../MetricCard';

const LearningMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Learning Time',
      value: '279 hr 36 mins',
      icon: <Clock size={24} />,
      color: 'blue',
      trend: 'up' as const,
      trendValue: '+12%'
    },
    {
      title: 'In Progress',
      value: 32,
      icon: <BookOpen size={24} />,
      color: 'green',
      subtitle: 'Courses',
      trend: 'up' as const,
      trendValue: '+3'
    },
    {
      title: 'Completed',
      value: 15,
      icon: <Trophy size={24} />,
      color: 'purple',
      subtitle: 'Courses',
      trend: 'neutral' as const,
      trendValue: 'This month'
    },
    {
      title: 'Average Score',
      value: '87%',
      icon: <Target size={24} />,
      color: 'yellow',
      trend: 'up' as const,
      trendValue: '+2%'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={metric.title}
          className="animate-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <MetricCard {...metric} />
        </div>
      ))}
    </div>
  );
};

export default LearningMetrics;