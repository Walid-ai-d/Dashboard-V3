import React from 'react';
import { BookOpen, Clock, Users, Star, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import { Course } from '../../data/coursesData';

interface CourseOverviewProps {
  subject: string;
  courses: Course[];
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ subject, courses }) => {
  const totalStudents = courses.reduce((sum, course) => sum + (course.students || 0), 0);
  const avgRating = courses.length > 0 
    ? courses.reduce((sum, course) => sum + (course.rating || 0), 0) / courses.length 
    : 0;
  
  const totalDuration = courses.reduce((sum, course) => {
    if (!course.duration) return sum;
    const match = course.duration.match(/(\d+)h\s*(\d+)m/);
    if (match) {
      const hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      return sum + (hours * 60) + minutes;
    }
    return sum;
  }, 0);

  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1).replace('-', ' ');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-2">
            <BookOpen size={20} className="text-blue-500" />
            <h4 className="font-semibold text-gray-800">Total Courses</h4>
          </div>
          <p className="text-2xl font-bold text-blue-600">{courses.length}</p>
          <p className="text-sm text-gray-500">Available to study</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Users size={20} className="text-green-500" />
            <h4 className="font-semibold text-gray-800">Total Students</h4>
          </div>
          <p className="text-2xl font-bold text-green-600">{totalStudents.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Enrolled across all courses</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Star size={20} className="text-yellow-500" />
            <h4 className="font-semibold text-gray-800">Average Rating</h4>
          </div>
          <p className="text-2xl font-bold text-yellow-600">{avgRating.toFixed(1)}</p>
          <p className="text-sm text-gray-500">Student satisfaction</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Clock size={20} className="text-purple-500" />
            <h4 className="font-semibold text-gray-800">Total Duration</h4>
          </div>
          <p className="text-2xl font-bold text-purple-600">{formatDuration(totalDuration)}</p>
          <p className="text-sm text-gray-500">Learning content</p>
        </Card>
      </div>

      <Card className="p-6">
        <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <TrendingUp size={20} />
          <span>Popular {subjectName} Courses</span>
        </h4>
        <div className="space-y-3">
          {courses
            .sort((a, b) => (b.students || 0) - (a.students || 0))
            .slice(0, 3)
            .map((course, index) => (
            <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h5 className="font-medium text-gray-800">{course.title}</h5>
                <div className="flex items-center space-x-4 mt-1">
                  <p className="text-sm text-gray-500">{course.students?.toLocaleString()} students enrolled</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-xs text-gray-500">{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{course.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {courses.length > 0 && (
        <Card className="p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Course Levels Distribution</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['AS-Level', 'A-Level', 'A2-Level'].map((level) => {
              const levelCourses = courses.filter(course => course.level === level);
              const percentage = courses.length > 0 ? (levelCourses.length / courses.length) * 100 : 0;
              
              return (
                <div key={level} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">{levelCourses.length}</div>
                  <div className="text-sm text-gray-600">{level}</div>
                  <div className="text-xs text-gray-500">{percentage.toFixed(0)}% of courses</div>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
};

export default CourseOverview;