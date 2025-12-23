import React from 'react';
import { cn, theme, presets, getStatusColor, StatusType } from '@/lib/styles';

export interface ActivityItemProps {
  /** Main title text */
  title: string;
  /** Secondary subtitle text */
  subtitle?: string;
  /** Time or date string */
  time?: string;
  /** Status badge */
  status?: StatusType;
  /** Left indicator color (Tailwind bg class) */
  indicator?: string;
  /** Right side action element */
  action?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ActivityItem - A list item for displaying activity, tasks, or feed items
 * 
 * @example
 * ```tsx
 * <ActivityItem
 *   title="Project Review"
 *   subtitle="Design updates"
 *   time="2h ago"
 *   status="completed"
 * />
 * ```
 */
export function ActivityItem({
  title,
  subtitle,
  time,
  status,
  indicator = 'bg-zinc-300',
  action,
  onClick,
  className,
}: ActivityItemProps) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={cn(
        'flex items-center justify-between p-4 w-full text-left',
        'hover:bg-zinc-50 group',
        theme.radius.md,
        theme.transition.colors,
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'w-2 h-2 rounded-full group-hover:bg-zinc-400',
            theme.transition.colors,
            indicator
          )}
        />
        <div>
          <h4 className={cn(theme.font.medium, theme.colors.text.primary, theme.text.sm)}>
            {title}
          </h4>
          {subtitle && (
            <p className={cn(theme.text.xs, theme.colors.text.muted)}>{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {status && (
          <span className={cn(presets.badge, getStatusColor(status))}>{status}</span>
        )}
        {time && <span className={cn(theme.text.xs, theme.colors.text.subtle)}>{time}</span>}
        {action && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">{action}</div>
        )}
      </div>
    </Component>
  );
}
