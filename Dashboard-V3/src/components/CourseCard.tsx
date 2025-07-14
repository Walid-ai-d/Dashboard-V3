import React, { useMemo, useCallback } from 'react';
import { Clock, Users, Star, Play, BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  subject: string;
  level: string;
  progress?: number;
  duration?: string;
  students?: number;
  rating?: number;
  image?: string;
  onClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subject,
  level,
  progress,
  duration,
  students,
  rating,
  image,
  onClick
}) => {
  const subjectColor = useMemo(() => {
    const colors = {
      chemistry: 'from-red-400 to-red-600',
      physics: 'from-blue-400 to-blue-600',
      mathematics: 'from-green-400 to-green-600',
      biology: 'from-purple-400 to-purple-600',
      economics: 'from-yellow-400 to-yellow-600',
      accounts: 'from-indigo-400 to-indigo-600',
      business: 'from-pink-400 to-pink-600',
      'computer science': 'from-cyan-400 to-cyan-600',
      psychology: 'from-orange-400 to-orange-600',
      default: 'from-gray-400 to-gray-600'
    };
    return colors[subject.toLowerCase() as keyof typeof colors] || colors.default;
  }, [subject]);

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const getSubjectIcon = () => {
    switch (subject.toLowerCase()) {
      case 'chemistry':
        return '🧪';
      case 'physics':
        return '⚛️';
      case 'mathematics':
        return '📐';
      case 'biology':
        return '🧬';
      case 'economics':
        return '📈';
      case 'accounts':
        return '💰';
      case 'business':
        return '💼';
      case 'computer science':
        return '💻';
      case 'psychology':
        return '🧠';
      default:
        return '📚';
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group hover:scale-105"
      onClick={handleClick}
    >
      {/* Header with gradient */}
      <div className={`h-32 bg-gradient-to-r ${subjectColor} relative flex items-center justify-center`}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="text-center">
            <div className="text-4xl mb-2">{getSubjectIcon()}</div>
            <Play size={24} className="text-white opacity-80 group-hover:scale-110 transition-transform mx-auto" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-white text-xs font-medium">{level}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {subject}
          </span>
        </div>
        
        <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          {duration && (
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
          )}
          {students && (
            <div className="flex items-center space-x-1">
              <Users size={14} />
              <span>{students.toLocaleString()}</span>
            </div>
          )}
          {rating && (
            <div className="flex items-center space-x-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {progress !== undefined && (
          <div className="mb-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${subjectColor} transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Action Button */}
        <button className="w-full bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 py-2 rounded-lg transition-all duration-200 font-medium text-sm flex items-center justify-center space-x-2">
          <BookOpen size={16} />
          <span>{progress ? 'Continue Learning' : 'Start Course'}</span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(CourseCard);