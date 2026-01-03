'use client';

import { Download, Printer } from 'lucide-react';
import Countdown from './Countdown';
import ProgressBar from './ProgressBar';
import TechStackStrip from './TechStackStrip';

interface HeaderProps {
  progress: number; 
}


export default function Header({ progress }: HeaderProps) {

  return (
    <header className="w-full mb-12">
      <div className="max-w-content mx-auto px-6">
        <TechStackStrip />

        <h1 className="text-3xl font-bold text-notion-text mb-8 text-center">BACKEND ELITE 2026</h1>

        <div className="space-y-6">
          <ProgressBar progress={progress} label="Overall Progress" />

          <div className="flex justify-center">
            <Countdown />
          </div>
        </div>
      </div>
    </header>
  );
}
