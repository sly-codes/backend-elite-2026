'use client';

import Header from '@/components/Header';
import PhaseSection from '@/components/PhaseSection';
import ResourceHub from '@/components/ResourceHub';
import { phases, resourceHub } from '@/constants/roadmap';

export default function Home() {
  return (
    <main className="min-h-screen bg-notion-bg text-notion-text">
      <div className="max-w-content mx-auto px-6 py-12">
        <Header />
        
        <div className="space-y-12">
          {phases.map((phase) => (
            <PhaseSection key={phase.id} phase={phase} />
          ))}
        </div>

        <ResourceHub resources={resourceHub} />
      </div>
    </main>
  );
}
