import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { ItemStatus } from '@/types/common.types';
import { cn, getStatusColors, styleConstants } from '@/lib/styles';

export interface ActivityItemProps {
  title: string;
  subtitle: string;
  time: string;
  status: ItemStatus;
  onMoreClick?: () => void;
  className?: string;
}

/**
 * Reusable ActivityItem component for displaying recent activity or tasks
 * 
 * @example
 * ```tsx
 * <ActivityItem
 *   title="Project Alpha Review"
 *   subtitle="Design system updates"
 *   time="2h ago"
 *   status="completed"
 * />
 * ```
 */
export const ActivityItem = ({ 
  title, 
  subtitle, 
  time, 
  status,
  onMoreClick,
  className 
}: ActivityItemProps) => {
  return (
    <div className={cn(
      "flex items-center justify-between p-4",
      "hover:bg-zinc-50",
      "group",
      styleConstants.radius.sm,
      styleConstants.transition.colors,
      className
    )}>
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-2 h-2 bg-zinc-300 rounded-full",
          "group-hover:bg-zinc-400",
          styleConstants.transition.colors
        )}></div>
        <div>
          <h4 className="font-medium text-zinc-900 text-sm">{title}</h4>
          <p className="text-xs text-zinc-500">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={cn(
          "text-xs px-2 py-1 font-medium",
          styleConstants.radius.full,
          getStatusColors(status)
        )}>
          {status}
        </span>
        <span className="text-xs text-zinc-400">{time}</span>
        {onMoreClick && (
          <button 
            onClick={onMoreClick}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreHorizontal size={14} className="text-zinc-300" />
          </button>
        )}
      </div>
    </div>
  );
};
