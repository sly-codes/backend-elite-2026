'use client';

/**
 * Progress bar component displaying visual feedback of completion percentage.
 * 
 * @param progress - Percentage value (0-100)
 * @param label - Optional label to display above the progress bar
 */
interface ProgressBarProps {
  progress: number;
  label?: string;
}

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="w-full space-y-2">
      {label && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-notion-text-secondary">{label}</span>
          <span className="text-notion-text-secondary font-medium">
            {clampedProgress.toFixed(1)}%
          </span>
        </div>
      )}
      <div className="w-full h-1.5 bg-notion-sidebar rounded-full overflow-hidden">
        <div
          className="h-full bg-notion-text transition-all duration-500 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}
