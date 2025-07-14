import React, { useMemo } from 'react';

const FloatingParticles: React.FC = () => {
  // Memoize particle positions to prevent recalculation on every render
  const particles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4,
    }));
  }, []);

  const orbs = useMemo(() => [
    {
      id: 'orb1',
      className: "absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl animate-pulse",
      animationDelay: 0
    },
    {
      id: 'orb2',
      className: "absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-15 blur-3xl animate-pulse",
      animationDelay: 2
    }
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Reduced number of floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-15 animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
      
      {/* Optimized gradient orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={orb.className}
          style={{ animationDelay: `${orb.animationDelay}s` }}
        />
      ))}
    </div>
  );
};

export default React.memo(FloatingParticles);