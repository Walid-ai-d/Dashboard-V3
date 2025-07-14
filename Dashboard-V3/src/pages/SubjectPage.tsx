import React, { useState } from 'react';
import { BookOpen, Clock, Users, Star, Calendar, Activity, BarChart3, Target, TrendingUp } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import MetricCard from '../components/MetricCard';
import CourseOverview from '../components/course/CourseOverview';
import CourseProgress from '../components/course/CourseProgress';
import { getSubjectCourses } from '../data/coursesData';

interface SubjectPageProps {
  subject: string;
}

const SubjectPage: React.FC<SubjectPageProps> = ({ subject }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const subjectCourses = getSubjectCourses(subject);
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1).replace('-', ' ');

  const [selectedLevel, setSelectedLevel] = useState('all');
  const levels = ['all', 'AS-Level', 'A-Level', 'A2-Level'];

  const filteredCourses = subjectCourses.filter(course => 
    selectedLevel === 'all' || course.level === selectedLevel
  );

  const metrics = [
    {
      title: 'Total Courses',
      value: subjectCourses.length,
      icon: <BookOpen size={24} />,
      color: 'blue'
    },
    {
      title: 'Time Spent',
      value: '120 hrs 30 mins',
      icon: <Clock size={24} />,
      color: 'green'
    },
    {
      title: 'Lessons Done',
      value: '45 / 60',
      icon: <Target size={24} />,
      color: 'purple'
    },
    {
      title: 'Average Score',
      value: '85%',
      icon: <TrendingUp size={24} />,
      color: 'yellow'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Course Overview', icon: <BookOpen size={16} /> },
    { id: 'progress', label: 'Learning Progress', icon: <BarChart3 size={16} /> },
    { id: 'calendar', label: 'Study Calendar', icon: <Calendar size={16} /> },
    { id: 'activity', label: 'Activity', icon: <Activity size={16} /> },
    { id: 'community', label: 'Community', icon: <Users size={16} /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <CourseOverview subject={subject} courses={subjectCourses} />;
      case 'progress':
        return <CourseProgress subject={subject} />;
      case 'calendar':
        return (
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <h4 className="font-semibold text-gray-800 mb-4">Study Calendar</h4>
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Calendar view will be displayed here</p>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="space-y-4">
            {[
              { action: `Completed 'Introduction' module in ${subjectName}`, time: '2 hours ago', type: 'completion' },
              { action: `Started '${subjectCourses[0]?.title || 'New Course'}' course`, time: '1 day ago', type: 'start' },
              { action: `Submitted quiz in ${subjectName}`, time: '2 days ago', type: 'quiz' },
              { action: `Watched lecture on ${subjectName} basics`, time: '3 days ago', type: 'video' }
            ].map((activity, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 flex items-start space-x-3">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  activity.type === 'completion' ? 'bg-green-500' :
                  activity.type === 'start' ? 'bg-blue-500' :
                  activity.type === 'quiz' ? 'bg-yellow-500' :
                  'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'community':
        return (
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <h4 className="font-semibold text-gray-800 mb-4">Community Posts</h4>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Community posts related to {subjectName} will be displayed here</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{subjectName} Overview</h1>
        <p className="text-gray-600">Master the fundamentals and advanced concepts</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

      {/* Course Filters */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">All {subjectName} Courses</h2>
          <div className="flex space-x-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedLevel === level
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {level === 'all' ? 'All Levels' : level}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CourseCard
                  title={course.title}
                  subject={course.subject}
                  level={course.level}
                  progress={course.progress}
                  duration={course.duration}
                  students={course.students}
                  rating={course.rating}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">No courses available for the selected level</p>
          </div>
        )}
      </div>

      {/* Detailed Tabs */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-200 bg-white/40">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;