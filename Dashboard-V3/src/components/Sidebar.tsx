import React from 'react';
import { 
  Home, 
  Activity, 
  Calendar, 
  Square, 
  Menu, 
  X,
  Bot,
  ChevronRight,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  onNavigate, 
  collapsed, 
  onToggleCollapse 
}) => {
  const subjects = [
    { id: 'chemistry', label: 'Chemistry', icon: Activity },
    { id: 'physics', label: 'Physics', icon: Activity },
    { id: 'mathematics', label: 'Mathematics', icon: Calendar },
    { id: 'economics', label: 'Economics', icon: Home },
    { id: 'biology', label: 'Biology', icon: Square },
    { id: 'accounts', label: 'Accounts', icon: Activity },
    { id: 'business', label: 'Business', icon: Activity },
    { id: 'computer-science', label: 'Computer Science', icon: Calendar },
    { id: 'psychology', label: 'Psychology', icon: Home },
  ];

  const aiTutors = [
    { id: 'ai-tutors', label: 'All AI Tutors', icon: Bot },
  ];

  const SidebarItem = ({ 
    id, 
    label, 
    icon: Icon, 
    isActive, 
    onClick, 
    hasSubmenu = false 
  }: {
    id: string;
    label: string;
    icon: any;
    isActive: boolean;
    onClick: () => void;
    hasSubmenu?: boolean;
  }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
        isActive
          ? 'bg-black text-white shadow-lg'
          : 'text-gray-700 hover:bg-gray-100 hover:text-black'
      }`}
      title={collapsed ? label : ''}
    >
      <Icon size={20} className={`${isActive ? 'text-white' : 'text-gray-500 group-hover:text-black'} transition-colors`} />
      {!collapsed && (
        <>
          <span className="font-medium text-sm">{label}</span>
          {hasSubmenu && (
            <ChevronRight size={16} className="ml-auto opacity-50" />
          )}
        </>
      )}
    </button>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    !collapsed && (
      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {title}
      </div>
    )
  );

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 bg-white/80 backdrop-blur-md border-r border-gray-200/50 transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4 h-full overflow-y-auto">
        {/* Toggle Button */}
        <button
          onClick={onToggleCollapse}
          className="w-full flex items-center justify-center p-2 mb-6 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>

        <div className="space-y-1">
          {/* Dashboard */}
          <SidebarItem
            id="dashboard"
            label="Dashboard"
            icon={Home}
            isActive={currentPage === 'dashboard'}
            onClick={() => onNavigate('dashboard')}
          />

          {/* Analytics */}
          <SidebarItem
            id="analytics"
            label="Analytics"
            icon={BarChart3}
            isActive={currentPage === 'analytics'}
            onClick={() => onNavigate('analytics')}
          />

          {/* My Subjects */}
          <SectionHeader title="My Subjects" />
          {subjects.map((subject) => (
            <SidebarItem
              key={subject.id}
              id={subject.id}
              label={subject.label}
              icon={subject.icon}
              isActive={currentPage === subject.id}
              onClick={() => onNavigate(subject.id)}
            />
          ))}

          {/* AI Tutors */}
          <SectionHeader title="AI Tutors" />
          {aiTutors.map((tutor) => (
            <SidebarItem
              key={tutor.id}
              id={tutor.id}
              label={tutor.label}
              icon={tutor.icon}
              isActive={currentPage.startsWith('ai-tutor')}
              onClick={() => onNavigate(tutor.id)}
              hasSubmenu={true}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;