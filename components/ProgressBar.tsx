'use client';

/**
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
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${clampedProgress}%`,
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
          }}
        />
      </div>
    </div>
  );
}
