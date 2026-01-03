'use client';

import { Phase } from '@/constants/roadmap';
import ConceptTable from './ConceptTable';
import ProjectCard from './ProjectCard';

interface PhaseSectionProps {
  phase: Phase;
  onToggleConcept: (conceptId: string) => void;
  isConceptCompleted: (conceptId: string) => boolean;
}

/**
 * PhaseSection component displays a complete phase module including:
 * - Core concepts badges
 * - Concepts table with descriptions
 * - Video gallery
 * - Elite challenge project card
 */
export default function PhaseSection({
  phase,
  onToggleConcept,
  isConceptCompleted,
}: PhaseSectionProps) {
  return (
    <section className="mb-16">
      {/* Phase Header with Core Concepts */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-notion-text mb-3">{phase.title}</h2>
        {phase.coreConcepts && phase.coreConcepts.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {phase.coreConcepts.map((concept) => (
              <span
                key={concept}
                className="px-2.5 py-1 rounded bg-notion-sidebar border border-notion-border text-xs text-notion-text-secondary"
              >
                {concept}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Concepts Table */}
      <div className="mb-10">
        <h3 className="text-lg font-medium text-notion-text mb-4">Concepts</h3>
        <ConceptTable
          concepts={phase.concepts}
          onToggle={onToggleConcept}
          isCompleted={isConceptCompleted}
        />
      </div>

      {/* Video Gallery */}
      {phase.videos.length > 0 && (
        <div className="mb-10">
          <h3 className="text-lg font-medium text-notion-text mb-4">Video Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phase.videos.map((video) => (
              <div
                key={video.id}
                className="bg-notion-sidebar border border-notion-border rounded-lg overflow-hidden"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm text-notion-text-secondary">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Elite Challenge */}
      <ProjectCard challenge={phase.eliteChallenge} />
    </section>
  );
}
