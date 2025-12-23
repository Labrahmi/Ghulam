import React from 'react';
import { cn } from '@/lib/styles';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

/**
 * Reusable SectionHeader component for page or card headers
 * 
 * @example
 * ```tsx
 * <SectionHeader
 *   title="Dashboard"
 *   subtitle="Welcome back, here's what's happening"
 *   actionLabel="View all"
 *   onAction={() => console.log('View all clicked')}
 * />
 * ```
 */
export const SectionHeader = ({ 
  title, 
  subtitle, 
  actionLabel, 
  onAction,
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div>
        <h2 className="font-semibold text-zinc-900">{title}</h2>
        {subtitle && (
          <p className="text-zinc-500 text-sm mt-1">{subtitle}</p>
        )}
      </div>
      {actionLabel && onAction && (
        <button 
          onClick={onAction}
          className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
