import React, { InputHTMLAttributes, useState } from 'react';
import { Search } from 'lucide-react';
import { cn, theme, presets } from '@/lib/styles';

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Icon to show (defaults to Search) */
  icon?: React.ReactNode;
  /** Whether to expand on focus */
  expandOnFocus?: boolean;
  /** Default width class */
  defaultWidth?: string;
  /** Expanded width class */
  expandedWidth?: string;
}

/**
 * SearchInput - Search input field with icon and optional focus expansion
 * 
 * @example
 * ```tsx
 * <SearchInput placeholder="Search..." expandOnFocus />
 * <SearchInput placeholder="Find users" defaultWidth="w-48" expandedWidth="w-72" />
 * ```
 */
export function SearchInput({
  placeholder = 'Search...',
  icon,
  expandOnFocus = true,
  defaultWidth = 'w-64',
  expandedWidth = 'w-80',
  className,
  onFocus,
  onBlur,
  ...props
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div
      className={cn(
        'relative',
        theme.transition.default,
        expandOnFocus && (isFocused ? expandedWidth : defaultWidth),
        !expandOnFocus && defaultWidth,
        className
      )}
    >
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
        {icon || <Search size={16} />}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={cn(presets.input.base, 'pl-10')}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
}
