'use client';

import { EliteChallenge } from '@/constants/roadmap';
import { CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  challenge: EliteChallenge;
}

/**
 * ProjectCard component highlights the Elite Challenge for each phase.
 * Displays the project description and a checklist of must-have features.
 * Designed to provide clear, actionable project requirements.
 */
export default function ProjectCard({ challenge }: ProjectCardProps) {
  return (
    <div className="bg-notion-sidebar border border-notion-border rounded-lg p-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-notion-text mb-1">Elite Challenge</h3>
        <h4 className="text-base font-medium text-notion-text mb-3">{challenge.title}</h4>
        <p className="text-sm text-notion-text-secondary leading-relaxed">{challenge.description}</p>
      </div>

      {challenge.mustHaveFeatures && challenge.mustHaveFeatures.length > 0 && (
        <div className="pt-4 border-t border-notion-border">
          <h5 className="text-sm font-medium text-notion-text mb-3">Must-Have Features:</h5>
          <ul className="space-y-2">
            {challenge.mustHaveFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-notion-text-secondary">
                <CheckCircle2 size={16} className="mt-0.5 text-notion-text-secondary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
