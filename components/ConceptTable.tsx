'use client';

import { Concept } from '@/constants/roadmap';
import { Book, Code, FileText, Video as VideoIcon, ChevronDown, ExternalLink, CheckCircle2, Play } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConceptTableProps {
  concepts: Concept[];
  onToggleComplete: (conceptId: string) => void;
  isCompleted: (conceptId: string) => boolean;
}

const labelIcons = {
  Doc: FileText,
  Video: VideoIcon,
  Code: Code,
  Book: Book,
};

const labelColors = {
  Doc: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Video: 'bg-red-500/20 text-red-400 border-red-500/30',
  Code: 'bg-green-500/20 text-green-400 border-green-500/30',
  Book: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

/**
 * ConceptTable component displays concepts as accordion/collapsible rows.
 * Each concept expands to show description and step-by-step guide.
 * Uses Framer Motion for smooth transitions with no scroll jump.
 */
export default function ConceptTable({ concepts, onToggleComplete, isCompleted }: ConceptTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (conceptId: string) => {
    setExpandedId(expandedId === conceptId ? null : conceptId);
  };

  return (
    <div className="relative">
      {/* Vertical line connecting steps */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-notion-border" />

      <div className="space-y-0">
        {concepts.map((concept, index) => {
          const completed = isCompleted(concept.id);
          const LabelIcon = labelIcons[concept.label];
          const isExpanded = expandedId === concept.id;

          return (
            <div key={concept.id} className="relative pl-12 pb-3 last:pb-0">
              {/* Step indicator */}
              <div className="absolute left-0 top-1">
                {completed ? (
                  <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-notion-sidebar flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-notion-border bg-notion-sidebar" />
                )}
              </div>

              {/* Concept accordion */}
              <div className="border border-notion-border rounded-lg bg-notion-sidebar overflow-hidden">
                {/* Header - Always visible */}
                <button
                  onClick={() => handleToggle(concept.id)}
                  className="w-full text-left p-4 hover:bg-notion-sidebar/80 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs ${labelColors[concept.label]}`}
                        >
                          <LabelIcon size={12} />
                          {concept.label}
                        </span>
                        {completed && (
                          <span className="text-xs text-green-400 font-medium">Completed</span>
                        )}
                      </div>
                      <h4
                        className={`font-medium ${
                          completed ? 'line-through text-notion-text-secondary' : 'text-notion-text'
                        } group-hover:text-notion-text transition-colors`}
                      >
                        {concept.name}
                      </h4>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-notion-text-secondary group-hover:text-notion-text flex-shrink-0 transition-all duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 space-y-4 border-t border-notion-border pt-4">
                        {/* Description */}
                        <div>
                          <h5 className="text-xs font-medium text-notion-text-secondary mb-2">Description</h5>
                          <p className="text-sm text-notion-text-secondary leading-relaxed">{concept.description}</p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-3">
                          <h5 className="text-xs font-medium text-notion-text-secondary mb-2">Learning Path</h5>

                          {/* Step 1: Watch Video */}
                          {concept.videoUrl && (
                            <div className="bg-notion-bg border border-notion-border rounded-lg p-3 space-y-2">
                              <div className="flex items-center gap-2">
                                <Play size={14} className="text-red-400" />
                                <span className="text-xs font-medium text-notion-text">Step 1: Watch Introduction</span>
                              </div>
                              <div className="aspect-video rounded overflow-hidden">
                                <iframe
                                  src={`https://www.youtube.com/embed/${concept.videoUrl}`}
                                  title={concept.name}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            </div>
                          )}

                          {/* Step 2: Read Documentation */}
                          <div className="bg-notion-bg border border-notion-border rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <FileText size={14} className="text-blue-400" />
                                <span className="text-xs font-medium text-notion-text">Step 2: Read Deep Dive</span>
                              </div>
                              <a
                                href={concept.docUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-notion-text-secondary hover:text-notion-text inline-flex items-center gap-1 underline"
                              >
                                Open <ExternalLink size={12} />
                              </a>
                            </div>
                            <p className="text-xs text-notion-text-secondary">
                              Review the documentation to understand implementation details and best practices.
                            </p>
                          </div>

                          {/* Step 3: Mark as Complete */}
                          <div className="bg-notion-bg border border-notion-border rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-green-400" />
                                <span className="text-xs font-medium text-notion-text">Step 3: Mark as Complete</span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleComplete(concept.id);
                                }}
                                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                                  completed
                                    ? 'border-green-500/50 text-green-400 bg-green-500/10'
                                    : 'border-notion-border text-notion-text-secondary hover:border-green-500/50 hover:text-green-400'
                                }`}
                              >
                                {completed ? 'Completed ✓' : 'Mark Complete'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}