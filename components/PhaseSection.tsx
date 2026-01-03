'use client';

import { Phase } from '@/constants/roadmap';
import { Book, Code, FileText, Video as VideoIcon } from 'lucide-react';
import { useState } from 'react';

interface PhaseSectionProps {
  phase: Phase;
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

export default function PhaseSection({ phase }: PhaseSectionProps) {
  const [completedConcepts, setCompletedConcepts] = useState<Set<string>>(new Set());

  const toggleConcept = (conceptId: string) => {
    setCompletedConcepts((prev) => {
      const next = new Set(prev);
      if (next.has(conceptId)) {
        next.delete(conceptId);
      } else {
        next.add(conceptId);
      }
      return next;
    });
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-notion-text mb-8">
        {phase.title}
      </h2>

      {/* Concepts Table */}
      <div className="mb-10">
        <h3 className="text-lg font-medium text-notion-text mb-4">Concepts</h3>
        <div className="border border-notion-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-notion-border bg-notion-sidebar">
                  <th className="px-4 py-3 text-left text-notion-text-secondary font-medium w-16">Done</th>
                  <th className="px-4 py-3 text-left text-notion-text font-medium">Concept</th>
                  <th className="px-4 py-3 text-left text-notion-text font-medium">Resource</th>
                  <th className="px-4 py-3 text-left text-notion-text font-medium w-24">Label</th>
                </tr>
              </thead>
              <tbody>
                {phase.concepts.map((concept) => {
                  const isCompleted = completedConcepts.has(concept.id);
                  const LabelIcon = labelIcons[concept.label];
                  
                  return (
                    <tr 
                      key={concept.id} 
                      className="border-b border-notion-border last:border-b-0 hover:bg-notion-sidebar/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={() => toggleConcept(concept.id)}
                          className="w-4 h-4 rounded border-notion-border bg-notion-sidebar text-notion-text focus:ring-2 focus:ring-notion-text cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <span className={isCompleted ? 'line-through text-notion-text-secondary' : 'text-notion-text'}>
                          {concept.name}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={concept.resourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-notion-text-secondary hover:text-notion-text underline transition-colors"
                        >
                          Open →
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-xs ${labelColors[concept.label]}`}>
                          <LabelIcon size={12} />
                          {concept.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Video Gallery */}
      {phase.videos.length > 0 && (
        <div className="mb-10">
          <h3 className="text-lg font-medium text-notion-text mb-4">Video Gallery</h3>
          <div className="grid grid-cols-1 gap-4">
            {phase.videos.map((video) => (
              <div key={video.id} className="bg-notion-sidebar border border-notion-border rounded-lg overflow-hidden">
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
      <div className="bg-notion-sidebar border border-notion-border rounded-lg p-6">
        <h3 className="text-lg font-medium text-notion-text mb-2">Elite Challenge</h3>
        <h4 className="text-base font-semibold text-notion-text mb-3">{phase.eliteChallenge.title}</h4>
        <p className="text-sm text-notion-text-secondary leading-relaxed">
          {phase.eliteChallenge.description}
        </p>
      </div>
    </section>
  );
}
