import React from 'react';
import { cn, presets } from '@/lib/styles';

export interface CardProps {
  /** Card variant */
  variant?: 'default' | 'interactive' | 'dark' | 'muted';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card - Container component for grouping content
 * 
 * @example
 * ```tsx
 * <Card variant="interactive" padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 * ```
 */
export function Card({
  variant = 'default',
  padding = 'md',
  children,
  className,
}: CardProps) {
  const variantClass = {
    default: presets.card.base,
    interactive: presets.card.interactive,
    dark: presets.card.dark,
    muted: presets.card.muted,
  }[variant];

  const paddingClass = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }[padding];

  return (
    <div className={cn(variantClass, paddingClass, className)}>
      {children}
    </div>
  );
}
