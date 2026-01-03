'use client';

import Image from 'next/image';
import Countdown from './Countdown';
import ProgressBar from './ProgressBar';

interface HeaderProps {
  progress: number; // Overall progress percentage based on completed concepts
}

/**
 * Header component displaying the roadmap title, global progress bar, and countdown timer.
 * Progress is calculated dynamically based on completed concepts across all phases.
 */
export default function Header({ progress }: HeaderProps) {
  return (
    <header className="w-full mb-12">
      <div className="max-w-content mx-auto px-6">
        {/* Spring Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/spring-wordmark.svg"
            alt="Spring Framework"
            width={200}
            height={60}
            className="h-12 w-auto opacity-90"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-notion-text mb-8 text-center">BACKEND ELITE 2026</h1>

        <div className="space-y-6">
          {/* Global Progress Bar */}
          <ProgressBar progress={progress} label="Overall Progress" />

          {/* Countdown Timer */}
          <div className="flex justify-center">
            <Countdown />
          </div>
        </div>
      </div>
    </header>
  );
}
