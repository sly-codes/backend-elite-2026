'use client';

/**
 * PhaseProgressBar component displays progress for a specific phase.
 * Shows completion percentage and number of completed concepts.
 * 
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
      <div className="w-full h-1.5 bg-[#222222] rounded-full overflow-hidden">
        <div
          className="h-full bg-notion-text transition-all duration-500 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-notion-text-secondary">{clampedProgress.toFixed(0)}% Complete</span>
      </div>
    </div>
  );
}
