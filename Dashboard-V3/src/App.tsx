import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Dashboard from './pages/Dashboard';
import AllCourses from './pages/AllCourses';
import SubjectPage from './pages/SubjectPage';
import AITutors from './pages/AITutors';
import AccountSettings from './pages/AccountSettings';
import Analytics from './pages/Analytics';
import FloatingParticles from './components/FloatingParticles';

// Import individual course pages
import ChemistryPage from './pages/courses/ChemistryPage';
import PhysicsPage from './pages/courses/PhysicsPage';
import MathematicsPage from './pages/courses/MathematicsPage';
import BiologyPage from './pages/courses/BiologyPage';
import EconomicsPage from './pages/courses/EconomicsPage';
import AccountsPage from './pages/courses/AccountsPage';
import BusinessPage from './pages/courses/BusinessPage';
import ComputerSciencePage from './pages/courses/ComputerSciencePage';
import PsychologyPage from './pages/courses/PsychologyPage';

// Import individual AI tutor pages
import ChemistryTutorPage from './pages/ai-tutors/ChemistryTutorPage';
import PhysicsTutorPage from './pages/ai-tutors/PhysicsTutorPage';
import MathematicsTutorPage from './pages/ai-tutors/MathematicsTutorPage';
import BiologyTutorPage from './pages/ai-tutors/BiologyTutorPage';
import EconomicsTutorPage from './pages/ai-tutors/EconomicsTutorPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);

  const navigateTo = useCallback((page: string) => {
    setPageTransition(true);
    setTimeout(() => {
      setCurrentPage(page);
      setPageTransition(false);
    }, 150);
  }, []);

  const handleSidebarToggle = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  const handleTutorSelect = useCallback((tutor: string) => {
    setCurrentPage(`ai-tutor-${tutor}`);
  }, []);

  const renderPage = useMemo(() => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'all-courses':
        return <AllCourses />;
      case 'analytics':
        return <Analytics />;
      
      // Individual Course Pages
      case 'chemistry':
        return <ChemistryPage />;
      case 'physics':
        return <PhysicsPage />;
      case 'mathematics':
        return <MathematicsPage />;
      case 'biology':
        return <BiologyPage />;
      case 'economics':
        return <EconomicsPage />;
      case 'accounts':
        return <AccountsPage />;
      case 'business':
        return <BusinessPage />;
      case 'computer-science':
        return <ComputerSciencePage />;
      case 'psychology':
        return <PsychologyPage />;
      
      // AI Tutors
      case 'ai-tutors':
        return <AITutors onSelectTutor={handleTutorSelect} />;
      
      // Individual AI Tutor Pages
      case 'ai-tutor-chemistry':
        return <ChemistryTutorPage />;
      case 'ai-tutor-physics':
        return <PhysicsTutorPage />;
      case 'ai-tutor-mathematics':
        return <MathematicsTutorPage />;
      case 'ai-tutor-biology':
        return <BiologyTutorPage />;
      case 'ai-tutor-economics':
        return <EconomicsTutorPage />;
      
      case 'account-settings':
        return <AccountSettings />;
      
      default:
        return <Dashboard />;
    }
  }, [currentPage, handleTutorSelect]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <FloatingParticles />
      
      <Header 
        onNavigate={navigateTo} 
        currentPage={currentPage}
      />
      
      <Sidebar 
        currentPage={currentPage}
        onNavigate={navigateTo}
        collapsed={sidebarCollapsed}
        onToggleCollapse={handleSidebarToggle}
      />
      
      <main 
        className={`transition-all duration-300 pt-16 pb-8 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <div 
          className={`transition-all duration-150 ${
            pageTransition ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {renderPage}
        </div>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;