'use client';

import { Phase } from '@/constants/roadmap';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import ConceptTable from './ConceptTable';
import PhaseProgressBar from './PhaseProgressBar';
import ProjectCard from './ProjectCard';

interface PhaseSectionProps {
  phase: Phase;
  phaseProgress: {
    progress: number;
    completedCount: number;
    totalCount: number;
  };
  onToggleConcept: (conceptId: string) => void;
  isConceptCompleted: (conceptId: string) => boolean;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

export default function PhaseSection({
  phase,
  phaseProgress,
  onToggleConcept,
  isConceptCompleted,
  isExpanded,
  onToggleExpanded,
}: PhaseSectionProps) {
  const [expandedSections, setExpandedSections] = useState<{
    learningPath: boolean;
    videoGallery: boolean;
    eliteChallenge: boolean;
  }>({
    learningPath: true, // Expanded by default
    videoGallery: false,
    eliteChallenge: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev: typeof expandedSections) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isCompleted = phaseProgress.progress === 100;

  return (
    <section className="bg-notion-sidebar border border-notion-border rounded-lg overflow-hidden">
      <button
        onClick={onToggleExpanded}
        className="w-full text-left p-6 hover:bg-notion-sidebar/80 transition-colors group"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-semibold text-notion-text">{phase.title}</h2>
              {isCompleted && (
                <span className="text-xs text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded border border-green-500/30">
                  Completed
                </span>
              )}
            </div>

            {phase.coreConcepts && phase.coreConcepts.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {phase.coreConcepts.map((concept) => (
                  <span
                    key={concept}
                    className="px-2.5 py-1 rounded bg-notion-bg border border-notion-border text-xs text-notion-text-secondary"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            )}

            <PhaseProgressBar
              progress={phaseProgress.progress}
              completedCount={phaseProgress.completedCount}
              totalCount={phaseProgress.totalCount}
            />
          </div>

          <ChevronDown
            size={20}
            className={`text-notion-text-secondary group-hover:text-notion-text flex-shrink-0 transition-all duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 space-y-4 border-t border-notion-border">
              <div className="border border-notion-border rounded-lg bg-notion-bg overflow-hidden">
                <button
                  onClick={() => toggleSection('learningPath')}
                  className="w-full text-left p-4 hover:bg-notion-sidebar transition-colors group flex items-center justify-between"
                >
                  <h3 className="text-lg font-medium text-notion-text">Learning Path</h3>
                  <ChevronDown
                    size={18}
                    className={`text-notion-text-secondary group-hover:text-notion-text flex-shrink-0 transition-all duration-200 ${
                      expandedSections.learningPath ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedSections.learningPath && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-notion-border">
                        <ConceptTable
                          concepts={phase.concepts}
                          onToggleComplete={onToggleConcept}
                          isCompleted={isConceptCompleted}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {phase.videos.length > 0 && (
                <div className="border border-notion-border rounded-lg bg-notion-bg overflow-hidden">
                  <button
                    onClick={() => toggleSection('videoGallery')}
                    className="w-full text-left p-4 hover:bg-notion-sidebar transition-colors group flex items-center justify-between"
                  >
                    <h3 className="text-lg font-medium text-notion-text">
                      Video Gallery (Others resources you can watch to improve your skills)
                    </h3>
                    <ChevronDown
                      size={18}
                      className={`text-notion-text-secondary group-hover:text-notion-text flex-shrink-0 transition-all duration-200 ${
                        expandedSections.videoGallery ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedSections.videoGallery && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 border-t border-notion-border pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                  <p className="text-sm text-notion-text-secondary">
                                    {video.title}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Elite Challenge Section */}
              <div className="border border-notion-border rounded-lg bg-notion-bg overflow-hidden">
                <button
                  onClick={() => toggleSection('eliteChallenge')}
                  className="w-full text-left p-4 hover:bg-notion-sidebar transition-colors group flex items-center justify-between"
                >
                  <h3 className="text-lg font-medium text-notion-text">Elite Challenge</h3>
                  <ChevronDown
                    size={18}
                    className={`text-notion-text-secondary group-hover:text-notion-text flex-shrink-0 transition-all duration-200 ${
                      expandedSections.eliteChallenge ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedSections.eliteChallenge && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-notion-border pt-4">
                        <ProjectCard challenge={phase.eliteChallenge} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
