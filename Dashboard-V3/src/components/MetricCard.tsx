import React, { useEffect, useState, useCallback } from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  color = 'blue',
  subtitle,
  trend,
  trendValue
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  const animateValue = useCallback(() => {
    if (typeof value === 'number') {
      const timer = setTimeout(() => {
        setAnimatedValue(value);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [value]);

  useEffect(() => {
    return animateValue();
  }, [animateValue]);

  const getColorClasses = useCallback((color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 text-blue-600',
      green: 'from-green-500 to-green-600 text-green-600',
      purple: 'from-purple-500 to-purple-600 text-purple-600',
      red: 'from-red-500 to-red-600 text-red-600',
      yellow: 'from-yellow-500 to-yellow-600 text-yellow-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  }, []);

  const getTrendColor = useCallback((trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  }, []);

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(color).split(' ')[0]} ${getColorClasses(color).split(' ')[1]}`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        {trend && trendValue && (
          <div className={`text-sm font-medium ${getTrendColor(trend)}`}>
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trendValue}
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-gray-800 transition-all duration-1000">
          {typeof value === 'number' ? animatedValue.toLocaleString() : value}
        </h3>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        {subtitle && (
          <p className="text-xs text-gray-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default React.memo(MetricCard);