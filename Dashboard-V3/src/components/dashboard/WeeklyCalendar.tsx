import React from 'react';
import { Calendar } from 'lucide-react';
import Card from '../ui/Card';

const WeeklyCalendar: React.FC = () => {
  const events = [
    { title: 'Chemistry Lab', time: 'Today, 2:00 PM', color: 'blue' },
    { title: 'Physics Quiz', time: 'Tomorrow, 10:00 AM', color: 'green' },
    { title: 'Math Webinar', time: 'Friday, 8:00 PM', color: 'purple' }
  ];

  return (
    <Card className="p-6 animate-in slide-in-from-right-4 duration-500">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
        <Calendar size={20} />
        <span>This Week</span>
      </h3>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div key={index} className={`flex items-center space-x-3 p-3 bg-${event.color}-50 rounded-lg`}>
            <div className={`w-3 h-3 bg-${event.color}-500 rounded-full`}></div>
            <div>
              <p className="text-sm font-medium text-gray-800">{event.title}</p>
              <p className="text-xs text-gray-500">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeeklyCalendar;