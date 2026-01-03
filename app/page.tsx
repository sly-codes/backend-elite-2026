'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PhaseSection from '@/components/PhaseSection';
import ResourceHub from '@/components/ResourceHub';
import { phases, resourceHub } from '@/constants/roadmap';
import { useRoadmapPersistence } from '@/lib/hooks';
import { useMemo, useState } from 'react';


export default function Home() {
  const { toggleConcept, isCompleted, getPhaseProgress, getGlobalProgress } =
    useRoadmapPersistence();
  const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(
    phases[0]?.id || null
  );

  const overallProgress = useMemo(() => {
    const allConceptIds = phases.flatMap((phase) => phase.concepts.map((concept) => concept.id));
    return getGlobalProgress(allConceptIds);
  }, [getGlobalProgress]);

  const phaseProgresses = useMemo(() => {
    return phases.map((phase) => {
      const conceptIds = phase.concepts.map((concept) => concept.id);
      return getPhaseProgress(conceptIds);
    });
  }, [getPhaseProgress]);

  const handleTogglePhase = (phaseId: string) => {
    setExpandedPhaseId((prev) => (prev === phaseId ? null : phaseId));
  };

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
              isExpanded={expandedPhaseId === phase.id}
              onToggleExpanded={() => handleTogglePhase(phase.id)}
            />
          ))}
        </div>

        <ResourceHub resources={resourceHub} />

        <Footer />
      </div>
    </main>
  );
}
