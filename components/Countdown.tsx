'use client';

import { TARGET_DATE } from '@/constants/roadmap';
import { useEffect, useState } from 'react';

/**
 * Live countdown timer component displaying time remaining until target date.
 * Updates every second with a clean monospace font for readability.
 */
export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const target = TARGET_DATE.getTime();
      const difference = target - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Calculate immediately
    setTimeRemaining(calculateTimeRemaining());

    // Update every second
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="font-mono text-sm text-notion-text-secondary">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="text-notion-text-secondary">Countdown:</span>
      <span className="text-notion-text">
        {timeRemaining.days.toString().padStart(3, '0')}d{' '}
        {timeRemaining.hours.toString().padStart(2, '0')}h{' '}
        {timeRemaining.minutes.toString().padStart(2, '0')}m{' '}
        {timeRemaining.seconds.toString().padStart(2, '0')}s
      </span>
    </div>
  );
}
