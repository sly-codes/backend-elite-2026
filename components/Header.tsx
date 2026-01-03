'use client';

import { TARGET_DATE } from '@/constants/roadmap';
import { useEffect, useState } from 'react';

export default function Header() {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();
      const start = new Date('2026-01-01T00:00:00');
      const end = TARGET_DATE;
      const total = end.getTime() - start.getTime();
      const elapsed = now.getTime() - start.getTime();
      const progressPercent = Math.max(0, Math.min(100, (elapsed / total) * 100));
      
      const daysLeft = Math.max(0, Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
      
      setProgress(progressPercent);
      setDaysRemaining(daysLeft);
    };

    calculateProgress();
    const interval = setInterval(calculateProgress, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full mb-12">
      <div className="max-w-content mx-auto px-6">
        <h1 className="text-3xl font-bold text-notion-text mb-6 text-center">
          BACKEND ELITE 2026
        </h1>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-notion-text-secondary">Overall Progress</span>
            <span className="text-notion-text-secondary">{progress.toFixed(1)}%</span>
          </div>
          
          <div className="w-full h-2 bg-notion-sidebar rounded-full overflow-hidden">
            <div 
              className="h-full bg-notion-text transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-center">
            <span className="text-notion-text-secondary">
              <span className="text-notion-text font-semibold">{daysRemaining}</span> days remaining
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
