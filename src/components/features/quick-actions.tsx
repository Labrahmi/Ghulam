import React from 'react';
import { ActionCard } from '@/components/ui';
import { QuickAction } from '@/types/common.types';
import { cn, styleConstants } from '@/lib/styles';

export interface QuickActionsProps {
  actions: QuickAction[];
  columns?: {
    mobile?: number;
    tablet?: number;
  };
  className?: string;
}

/**
 * Reusable quick actions component for displaying action cards
 * Grid layout with customizable column counts
 * 
 * @example
 * ```tsx
 * <QuickActions
 *   actions={[
 *     {
 *       id: '1',
 *       title: 'Start New Project',
 *       description: 'Create a new project and invite your team',
 *       buttonText: 'Get Started',
 *       variant: 'primary'
 *     }
 *   ]}
 * />
 * ```
 */
export const QuickActions = ({ 
  actions, 
  columns = { mobile: 1, tablet: 2 },
  className 
}: QuickActionsProps) => {
  const gridClasses = cn(
    'grid',
    columns.mobile === 1 && 'grid-cols-1',
    columns.tablet === 2 && 'md:grid-cols-2',
    styleConstants.spacing.md,
    className
  );

  return (
    <div className={gridClasses}>
      {actions.map((action) => (
        <ActionCard
          key={action.id}
          title={action.title}
          description={action.description}
          buttonText={action.buttonText}
          variant={action.variant}
          onAction={action.onAction}
        />
      ))}
    </div>
  );
};
