import React from 'react';
import { ActivityItem } from '@/components/ui';
import { SectionHeader } from '@/components/ui';
import { ActivityItem as ActivityItemType } from '@/types/common.types';
import { cn, styleConstants } from '@/lib/styles';

export interface ActivityListProps {
  title?: string;
  items: ActivityItemType[];
  onViewAll?: () => void;
  viewAllLabel?: string;
  className?: string;
}

/**
 * Reusable activity list component for displaying recent activities
 * Shows a list of activity items with optional header and view all action
 * 
 * @example
 * ```tsx
 * <ActivityList
 *   title="Recent Activity"
 *   items={activities}
 *   onViewAll={() => console.log('View all clicked')}
 *   viewAllLabel="View all"
 * />
 * ```
 */
export const ActivityList = ({ 
  title = 'Recent Activity',
  items, 
  onViewAll,
  viewAllLabel = 'View all',
  className 
}: ActivityListProps) => {
  return (
    <div className={cn(
      "bg-white border border-zinc-100 overflow-hidden",
      styleConstants.radius.md,
      className
    )}>
      {title && (
        <div className="p-6 border-b border-zinc-100">
          <SectionHeader
            title={title}
            actionLabel={onViewAll ? viewAllLabel : undefined}
            onAction={onViewAll}
          />
        </div>
      )}
      
      <div className="divide-y divide-zinc-50">
        {items.map((item) => (
          <ActivityItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            time={item.time}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};
