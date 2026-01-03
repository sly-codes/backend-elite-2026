'use client';

import Header from '@/components/Header';
import PhaseSection from '@/components/PhaseSection';
import ResourceHub from '@/components/ResourceHub';
import { phases, resourceHub } from '@/constants/roadmap';
import { useRoadmapPersistence } from '@/lib/hooks';
import { useMemo } from 'react';

/**
 * Main page component for the Elite Java Backend Roadmap 2026 tracker.
 *
 * Features:
 * - Persistent progress tracking using localStorage (key: 'roadmap-v1-states')
 * - Dynamic progress calculation across all phases (hierarchical tracking)
 * - Accordion-style concept expansion (no modals, stays in place)
 * - Clean, high-density Notion-style UI with steps visual style
 * - Comprehensive roadmap following Backend Lifecycle order
 */
export default function Home() {
  const { toggleConcept, isCompleted, getPhaseProgress, getGlobalProgress } =
    useRoadmapPersistence();

  // Calculate overall progress based on completed concepts
  const overallProgress = useMemo(() => {
    const allConceptIds = phases.flatMap((phase) => phase.concepts.map((concept) => concept.id));
    return getGlobalProgress(allConceptIds);
  }, [getGlobalProgress]);

  // Calculate progress for each phase
  const phaseProgresses = useMemo(() => {
    return phases.map((phase) => {
      const conceptIds = phase.concepts.map((concept) => concept.id);
      return getPhaseProgress(conceptIds);
    });
  }, [getPhaseProgress]);

  return (
    <main className="min-h-screen bg-notion-bg text-notion-text">
      <div className="max-w-content mx-auto px-6 py-12">
        <Header progress={overallProgress} />

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              phaseProgress={phaseProgresses[index]}
              onToggleConcept={toggleConcept}
              isConceptCompleted={isCompleted}
              defaultExpanded={index === 0} // First phase expanded by default
            />
          ))}
        </div>

        <ResourceHub resources={resourceHub} />
      </div>
    </main>
  );
}
