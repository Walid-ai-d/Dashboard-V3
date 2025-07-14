import React, { useEffect, useState } from 'react';
import LearningMetrics from '../components/dashboard/LearningMetrics';
import WelcomeSection from '../components/dashboard/WelcomeSection';
import ContinueLearning from '../components/dashboard/ContinueLearning';
import QuickActions from '../components/dashboard/QuickActions';
import WeeklyCalendar from '../components/dashboard/WeeklyCalendar';
import RecentActivity from '../components/dashboard/RecentActivity';

const Dashboard: React.FC = () => {
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    setAnimationDelay(100);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <WelcomeSection />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Metrics */}
          <LearningMetrics />

          <ContinueLearning />
          <QuickActions />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <WeeklyCalendar />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;