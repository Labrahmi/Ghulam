import React, { ButtonHTMLAttributes } from 'react';
import { cn, presets } from '@/lib/styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Button - Primary action button component
 * 
 * @example
 * ```tsx
 * <Button variant="primary">Get Started</Button>
 * <Button variant="secondary" size="sm">Cancel</Button>
 * <Button variant="ghost">Learn More</Button>
 * ```
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClass = {
    primary: presets.button.primary,
    secondary: presets.button.secondary,
    ghost: presets.button.ghost,
  }[variant];

  const sizeClass = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size];

  return (
    <button
      className={cn(
        baseClass,
        sizeClass,
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
