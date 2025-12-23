import React from 'react';
import { cn, presets, getStatusColor, StatusType } from '@/lib/styles';

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Status-based coloring */
  status?: StatusType;
  /** Custom color classes (overrides status) */
  color?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Badge - Small label for status, categories, or counts
 * 
 * @example
 * ```tsx
 * <Badge status="success">Completed</Badge>
 * <Badge status="pending">In Progress</Badge>
 * <Badge color="bg-purple-100 text-purple-700">Custom</Badge>
 * ```
 */
export function Badge({
  children,
  status,
  color,
  className,
}: BadgeProps) {
  const colorClass = color || (status ? getStatusColor(status) : 'bg-zinc-100 text-zinc-700');

  return (
    <span className={cn(presets.badge, colorClass, className)}>
      {children}
    </span>
  );
}
