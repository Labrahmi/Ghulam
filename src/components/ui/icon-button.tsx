import React, { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn, theme, presets } from '@/lib/styles';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon component to render */
  icon: LucideIcon;
  /** Icon size in pixels */
  size?: number;
  /** Show notification badge */
  badge?: boolean;
  /** Badge color class */
  badgeColor?: string;
  /** Button variant */
  variant?: 'ghost' | 'solid';
}

/**
 * IconButton - Button with just an icon, optional badge
 * 
 * @example
 * ```tsx
 * <IconButton icon={Bell} badge onClick={() => {}} />
 * <IconButton icon={Settings} size={20} variant="solid" />
 * ```
 */
export function IconButton({
  icon: Icon,
  size = 18,
  badge,
  badgeColor = 'bg-red-500',
  variant = 'ghost',
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        'relative',
        variant === 'ghost' ? presets.button.ghost : presets.button.primary,
        className
      )}
      {...props}
    >
      <Icon size={size} className={theme.colors.text.secondary} />
      {badge && (
        <div
          className={cn(
            'absolute -top-1 -right-1 w-3 h-3 rounded-full',
            badgeColor
          )}
        />
      )}
    </button>
  );
}
