'use client';

import { ResourceLink } from '@/constants/roadmap';
import { Book, FileText, Wrench } from 'lucide-react';

interface ResourceHubProps {
  resources: ResourceLink[];
}

const categoryIcons = {
  Documentation: FileText,
  Books: Book,
  Tools: Wrench,
};

export default function ResourceHub({ resources }: ResourceHubProps) {
  const groupedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {} as Record<string, ResourceLink[]>);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-notion-text mb-8">
        Resource Hub
      </h2>
      
      <div className="space-y-6">
        {Object.entries(groupedResources).map(([category, items]) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];
          
          return (
            <div key={category} className="bg-notion-sidebar border border-notion-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon size={18} className="text-notion-text-secondary" />
                <h3 className="text-lg font-medium text-notion-text">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-notion-text-secondary hover:text-notion-text underline transition-colors flex items-center gap-2"
                    >
                      {resource.name}
                      <span className="text-xs">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
