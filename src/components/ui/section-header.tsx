import React from 'react';
import { cn, theme } from '@/lib/styles';

export interface SectionHeaderProps {
  /** Main title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Action button label */
  actionLabel?: string;
  /** Action button click handler */
  onAction?: () => void;
  /** Title size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Right side custom content */
  children?: React.ReactNode;
}

/**
 * SectionHeader - Consistent header for page sections
 * 
 * @example
 * ```tsx
 * <SectionHeader title="Recent Activity" actionLabel="View all" onAction={() => {}} />
 * <SectionHeader title="Dashboard" subtitle="Welcome back" size="lg" />
 * ```
 */
export function SectionHeader({
  title,
  subtitle,
  actionLabel,
  onAction,
  size = 'md',
  className,
  children,
}: SectionHeaderProps) {
  const titleSize = {
    sm: theme.text.sm,
    md: theme.text.base,
    lg: theme.text['2xl'],
  }[size];

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div>
        <h2 className={cn(theme.font.semibold, theme.colors.text.primary, titleSize)}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn(theme.text.sm, theme.colors.text.muted, 'mt-1')}>{subtitle}</p>
        )}
      </div>
      {children ||
        (actionLabel && onAction && (
          <button
            onClick={onAction}
            className={cn(
              theme.text.sm,
              theme.colors.text.muted,
              'hover:text-zinc-700',
              theme.transition.colors
            )}
          >
            {actionLabel}
          </button>
        ))}
    </div>
  );
}
