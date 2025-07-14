import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { coursesData, getAllSubjects } from '../data/coursesData';

const AllCourses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'not-started', label: 'Not Started' }
  ];

  const subjects = ['all', ...getAllSubjects()];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'in-progress' && course.progress && course.progress > 0 && course.progress < 100) ||
                         (selectedFilter === 'completed' && course.progress === 100) ||
                         (selectedFilter === 'not-started' && (!course.progress || course.progress === 0));
    
    const matchesSubject = selectedSubject === 'all' || course.subject === selectedSubject;
    
    return matchesSearch && matchesFilter && matchesSubject;
  });

  const getFilteredStats = () => {
    const total = coursesData.length;
    const inProgress = coursesData.filter(c => c.progress && c.progress > 0 && c.progress < 100).length;
    const completed = coursesData.filter(c => c.progress === 100).length;
    const notStarted = coursesData.filter(c => !c.progress || c.progress === 0).length;
    
    return { total, inProgress, completed, notStarted };
  };

  const stats = getFilteredStats();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">All Courses</h1>
        <p className="text-gray-600">Explore and manage your learning journey</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/20">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
            />
          </div>

          {/* Subject Filter */}
          <div className="min-w-[200px]">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject === 'all' ? 'All Subjects' : subject}
                </option>
              ))}
            </select>
          </div>

          {/* Progress Filters */}
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-gray-800">{stats.total}</h3>
          <p className="text-gray-600">Total Courses</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-green-600">{stats.inProgress}</h3>
          <p className="text-gray-600">In Progress</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-blue-600">{stats.completed}</h3>
          <p className="text-gray-600">Completed</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-gray-600">{stats.notStarted}</h3>
          <p className="text-gray-600">Not Started</p>
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredCourses.length} of {coursesData.length} courses
          {selectedSubject !== 'all' && ` in ${selectedSubject}`}
          {selectedFilter !== 'all' && ` (${filters.find(f => f.id === selectedFilter)?.label})`}
        </p>
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
          <div className="text-gray-400 mb-4">
            <Filter size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No courses found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default AllCourses;