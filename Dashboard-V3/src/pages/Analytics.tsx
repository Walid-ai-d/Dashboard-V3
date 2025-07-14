import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  BookOpen,
  Calendar,
  Download,
  RefreshCw
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import MetricCard from '../components/MetricCard';
import LearningOverview from '../components/analytics/LearningOverview';
import StudyProgress from '../components/analytics/StudyProgress';
import CourseStats from '../components/analytics/CourseStats';

const Analytics: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [dateRange, setDateRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);

  const views = [
    { id: 'overview', label: 'My Learning', icon: <BarChart3 size={16} /> },
    { id: 'progress', label: 'Progress', icon: <TrendingUp size={16} /> },
    { id: 'courses', label: 'Course Stats', icon: <BookOpen size={16} /> }
  ];

  const dateRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 3 months' }
  ];

  const handleRefresh = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const handleExport = () => {
    console.log('Exporting learning data...');
  };

  const renderViewContent = () => {
    switch (activeView) {
      case 'overview':
        return <LearningOverview dateRange={dateRange} />;
      case 'progress':
        return <StudyProgress dateRange={dateRange} />;
      case 'courses':
        return <CourseStats dateRange={dateRange} />;
      default:
        return <LearningOverview dateRange={dateRange} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Learning Analytics</h1>
            <p className="text-gray-600">Track your learning progress and achievements</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={isLoading}
              className="flex items-center space-x-2"
            >
              <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleExport}
              className="flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Export</span>
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Time Period:</span>
              </div>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                {dateRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-8">
        <div className="flex border-b border-gray-200 bg-white/40">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-all duration-200 ${
                activeView === view.id
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {view.icon}
              <span>{view.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {renderViewContent()}
        </div>
      </div>
    </div>
  );
};

export default Analytics;