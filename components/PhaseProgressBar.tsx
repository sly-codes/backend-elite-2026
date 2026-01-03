'use client';

/**
 * @param progress - Percentage value (0-100) for this phase
 * @param completedCount - Number of completed concepts in this phase
 * @param totalCount - Total number of concepts in this phase
 * @param phaseTitle - Optional phase title to display
 */
interface PhaseProgressBarProps {
  progress: number;
  completedCount: number;
  totalCount: number;
  phaseTitle?: string;
}

export default function PhaseProgressBar({
  progress,
  completedCount,
  totalCount,
  phaseTitle,
}: PhaseProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="w-full space-y-2">
      {phaseTitle && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-notion-text-secondary font-medium">{phaseTitle}</span>
          <span className="text-notion-text-secondary">
            {completedCount} / {totalCount} concepts
          </span>
        </div>
      )}
      <div className="w-full h-1.5 bg-notion-sidebar rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${clampedProgress}%`,
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
          }}
        />
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-notion-text-secondary">{clampedProgress.toFixed(0)}% Complete</span>
      </div>
    </div>
  );
}
