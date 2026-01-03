'use client';

import { Concept } from '@/constants/roadmap';
import { Book, Code, FileText, Video as VideoIcon, ExternalLink } from 'lucide-react';

interface ConceptTableProps {
  concepts: Concept[];
  onToggle: (conceptId: string) => void;
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
 * ConceptTable component displays concepts in a clean, readable table format.
 * Includes short descriptions explaining WHY each concept matters.
 * Optimized for readability with hover effects and clear visual hierarchy.
 */
export default function ConceptTable({ concepts, onToggle, isCompleted }: ConceptTableProps) {
  return (
    <div className="border border-notion-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-notion-border bg-notion-sidebar">
              <th className="px-4 py-3 text-left text-notion-text-secondary font-medium w-14">Done</th>
              <th className="px-4 py-3 text-left text-notion-text font-medium">Concept</th>
              <th className="px-4 py-3 text-left text-notion-text-secondary font-medium w-24">Label</th>
              <th className="px-4 py-3 text-left text-notion-text-secondary font-medium w-20">Resource</th>
            </tr>
          </thead>
          <tbody>
            {concepts.map((concept) => {
              const completed = isCompleted(concept.id);
              const LabelIcon = labelIcons[concept.label];

              return (
                <tr
                  key={concept.id}
                  className="border-b border-notion-border last:border-b-0 hover:bg-notion-sidebar/50 transition-colors group"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => onToggle(concept.id)}
                      className="w-4 h-4 rounded border-notion-border bg-notion-sidebar text-notion-text focus:ring-2 focus:ring-notion-text cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <div
                        className={`${
                          completed ? 'line-through text-notion-text-secondary' : 'text-notion-text'
                        } font-medium`}
                      >
                        {concept.name}
                      </div>
                      <div className="text-xs text-notion-text-secondary leading-relaxed">
                        {concept.shortDescription}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-xs ${labelColors[concept.label]}`}
                    >
                      <LabelIcon size={12} />
                      {concept.label}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <a
                      href={concept.resourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-notion-text-secondary hover:text-notion-text transition-colors text-xs group-hover:text-notion-text"
                    >
                      Open
                      <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
