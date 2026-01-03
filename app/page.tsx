'use client';

import Header from '@/components/Header';
import PhaseSection from '@/components/PhaseSection';
import ResourceHub from '@/components/ResourceHub';
import { phases, resourceHub } from '@/constants/roadmap';
import { useCompletedConcepts } from '@/lib/hooks';
import { useMemo } from 'react';

/**
 * Main page component for the Elite Java Backend Roadmap 2026 tracker.
 *
 * Features:
 * - Persistent progress tracking using localStorage
 * - Dynamic progress calculation across all phases
 * - Clean, high-density Notion-style UI
 * - Comprehensive roadmap with 6 phases
 */
export default function Home() {
  const { toggleConcept, isCompleted, completedSet } = useCompletedConcepts();

  // Calculate overall progress based on completed concepts
  const overallProgress = useMemo(() => {
    const totalConcepts = phases.reduce((sum, phase) => sum + phase.concepts.length, 0);
    if (totalConcepts === 0) return 0;

    // Count completed concepts across all phases
    let completedCount = 0;
    phases.forEach((phase) => {
      phase.concepts.forEach((concept) => {
        if (isCompleted(concept.id)) {
          completedCount++;
        }
      });
    });

    return (completedCount / totalConcepts) * 100;
  }, [completedSet, isCompleted]);

  return (
    <main className="min-h-screen bg-notion-bg text-notion-text">
      <div className="max-w-content mx-auto px-6 py-12">
        <Header progress={overallProgress} />

        <div className="space-y-12">
          {phases.map((phase) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              onToggleConcept={toggleConcept}
              isConceptCompleted={isCompleted}
            />
          ))}
        </div>

        <ResourceHub resources={resourceHub} />
      </div>
    </main>
  );
}
