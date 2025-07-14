import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'all-courses', label: 'All Courses' },
    { id: 'analytics', label: 'Analytics' },
  ];

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
            currentPage === item.id 
              ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
              : 'text-gray-700'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;