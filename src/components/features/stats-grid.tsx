import React from 'react';
import { StatCard } from '@/components/ui';
import { StatCardData } from '@/types/common.types';
import { cn, styleConstants } from '@/lib/styles';

export interface StatsGridProps {
  stats: StatCardData[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  className?: string;
}

/**
 * Reusable stats grid component for displaying multiple stat cards
 * Responsive grid layout with customizable column counts
 * 
 * @example
 * ```tsx
 * <StatsGrid
 *   stats={[
 *     { title: 'Active Projects', value: 12, trend: 8.2, icon: FolderOpen },
 *     { title: 'Completed Tasks', value: 124, trend: 23.1, icon: TrendingUp },
 *   ]}
 *   columns={{ mobile: 1, tablet: 2, desktop: 4 }}
 * />
 * ```
 */
export const StatsGrid = ({ 
  stats, 
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  className 
}: StatsGridProps) => {
  const gridClasses = cn(
    'grid',
    columns.mobile === 1 && 'grid-cols-1',
    columns.tablet === 2 && 'md:grid-cols-2',
    columns.desktop === 3 && 'lg:grid-cols-3',
    columns.desktop === 4 && 'lg:grid-cols-4',
    styleConstants.spacing.md,
    className
  );

  return (
    <div className={gridClasses}>
      {stats.map((stat, index) => (
        <StatCard
          key={`stat-${index}-${stat.title}`}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};
