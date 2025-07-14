import React from 'react';
import { Search, Bell } from 'lucide-react';
import Logo from './layout/Logo';
import Navigation from './layout/Navigation';
import UserMenu from './layout/UserMenu';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Side */}
        <div className="flex items-center space-x-8">
          <Logo />
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200">
            <Search size={20} />
          </button>

          {/* Notifications */}
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 relative">
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>

          <UserMenu onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
};

export default Header;