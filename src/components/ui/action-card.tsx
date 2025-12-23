import React from 'react';
import { cn, styleConstants } from '@/lib/styles';

export interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  variant?: 'primary' | 'secondary';
  onAction?: () => void;
  className?: string;
}

/**
 * Reusable ActionCard component for quick actions or CTAs
 * 
 * @example
 * ```tsx
 * <ActionCard
 *   title="Start New Project"
 *   description="Create a new project and invite your team"
 *   buttonText="Get Started"
 *   variant="primary"
 *   onAction={() => console.log('Action triggered')}
 * />
 * ```
 */
export const ActionCard = ({ 
  title, 
  description, 
  buttonText, 
  variant = 'primary',
  onAction,
  className 
}: ActionCardProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <div className={cn(
      "p-6",
      styleConstants.radius.md,
      isPrimary 
        ? "bg-gradient-to-br from-zinc-900 to-zinc-800 text-white" 
        : "bg-zinc-50 border border-zinc-200",
      className
    )}>
      <h3 className={cn(
        "font-semibold mb-2",
        isPrimary ? "text-white" : "text-zinc-900"
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-sm mb-4",
        isPrimary ? "text-zinc-300" : "text-zinc-500"
      )}>
        {description}
      </p>
      <button 
        onClick={onAction}
        className={cn(
          "px-4 py-2 text-sm font-medium",
          styleConstants.radius.sm,
          styleConstants.transition.colors,
          isPrimary 
            ? "bg-white text-zinc-900 hover:bg-zinc-100" 
            : "bg-zinc-900 text-white hover:bg-zinc-800"
        )}
      >
        {buttonText}
      </button>
    </div>
  );
};
