import React, { useState } from 'react';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';

interface UserMenuProps {
  onNavigate: (page: string) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onNavigate }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          WA
        </div>
        <ChevronDown size={16} className="text-gray-500" />
      </button>

      {showUserMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              onNavigate('account-settings');
              setShowUserMenu(false);
            }}
            className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings size={16} />
            <span>Account Settings</span>
          </button>
          <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            <User size={16} />
            <span>Profile</span>
          </button>
          <hr className="my-2" />
          <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;