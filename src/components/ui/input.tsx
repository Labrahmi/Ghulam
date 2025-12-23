import React, { InputHTMLAttributes } from 'react';
import { cn, theme, presets } from '@/lib/styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Input label */
  label?: string;
  /** Helper or error text */
  helperText?: string;
  /** Error state */
  error?: boolean;
  /** Left icon/addon */
  leftAddon?: React.ReactNode;
  /** Right icon/addon */
  rightAddon?: React.ReactNode;
}

/**
 * Input - Text input field with optional label and addons
 * 
 * @example
 * ```tsx
 * <Input label="Email" placeholder="you@example.com" />
 * <Input label="Password" type="password" error helperText="Invalid password" />
 * ```
 */
export function Input({
  label,
  helperText,
  error,
  leftAddon,
  rightAddon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-');

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(theme.text.sm, theme.font.medium, theme.colors.text.primary, 'block mb-1.5')}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftAddon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
            {leftAddon}
          </div>
        )}
        <input
          id={inputId}
          className={cn(
            presets.input.base,
            leftAddon ? 'pl-10' : '',
            rightAddon ? 'pr-10' : '',
            error ? 'border-red-300 focus:ring-red-500' : ''
          )}
          {...props}
        />
        {rightAddon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
            {rightAddon}
          </div>
        )}
      </div>
      {helperText && (
        <p
          className={cn(
            theme.text.xs,
            'mt-1.5',
            error ? 'text-red-600' : theme.colors.text.muted
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
