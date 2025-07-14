import React, { useState } from 'react';
import { BookOpen, Clock, Star, Users, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface CourseStatsProps {
  dateRange: string;
}

const CourseStats: React.FC<CourseStatsProps> = ({ dateRange }) => {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = ['all', 'Chemistry', 'Physics', 'Mathematics', 'Biology'];

  const courseData = [
    {
      title: 'Organic Chemistry Fundamentals',
      subject: 'Chemistry',
      progress: 85,
      timeSpent: '12h 30m',
      lastAccessed: '2 hours ago',
      score: 92,
      modules: { completed: 8, total: 10 }
    },
    {
      title: 'Quantum Physics Introduction',
      subject: 'Physics',
      progress: 72,
      timeSpent: '8h 45m',
      lastAccessed: '1 day ago',
      score: 88,
      modules: { completed: 6, total: 12 }
    },
    {
      title: 'Calculus and Derivatives',
      subject: 'Mathematics',
      progress: 94,
      timeSpent: '15h 20m',
      lastAccessed: '3 hours ago',
      score: 95,
      modules: { completed: 9, total: 10 }
    },
    {
      title: 'Cell Biology Basics',
      subject: 'Biology',
      progress: 68,
      timeSpent: '6h 15m',
      lastAccessed: '2 days ago',
      score: 84,
      modules: { completed: 5, total: 8 }
    }
  ];

  const filteredCourses = selectedSubject === 'all' 
    ? courseData 
    : courseData.filter(course => course.subject === selectedSubject);

  const totalStats = {
    totalTime: '42h 50m',
    avgScore: 90,
    coursesActive: 4,
    modulesCompleted: 28
  };

  return (
    <div className="space-y-8">
      {/* Subject Filter */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Filter by Subject:</span>
        <div className="flex space-x-2">
          {subjects.map((subject) => (
            <Button
              key={subject}
              variant={selectedSubject === subject ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedSubject(subject)}
            >
              {subject === 'all' ? 'All Subjects' : subject}
            </Button>
          ))}
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <Clock size={24} className="text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{totalStats.totalTime}</div>
          <div className="text-sm text-gray-600">Total Study Time</div>
        </Card>
        <Card className="p-6 text-center">
          <Star size={24} className="text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{totalStats.avgScore}%</div>
          <div className="text-sm text-gray-600">Average Score</div>
        </Card>
        <Card className="p-6 text-center">
          <BookOpen size={24} className="text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{totalStats.coursesActive}</div>
          <div className="text-sm text-gray-600">Active Courses</div>
        </Card>
        <Card className="p-6 text-center">
          <TrendingUp size={24} className="text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{totalStats.modulesCompleted}</div>
          <div className="text-sm text-gray-600">Modules Completed</div>
        </Card>
      </div>

      {/* Course Details */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Course Details</h3>
        <div className="space-y-4">
          {filteredCourses.map((course, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-800">{course.title}</h4>
                  <p className="text-sm text-gray-600">{course.subject}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">{course.score}%</div>
                  <div className="text-xs text-gray-500">Average Score</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <div className="text-sm text-gray-600">Progress</div>
                  <div className="font-medium text-gray-800">{course.progress}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Time Spent</div>
                  <div className="font-medium text-gray-800">{course.timeSpent}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Modules</div>
                  <div className="font-medium text-gray-800">{course.modules.completed}/{course.modules.total}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Last Accessed</div>
                  <div className="font-medium text-gray-800">{course.lastAccessed}</div>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Performance Insights */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Strongest Subject</h4>
            <p className="text-sm text-green-700">Mathematics with 95% average score</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Most Active Course</h4>
            <p className="text-sm text-blue-700">Calculus with 15h 20m study time</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseStats;