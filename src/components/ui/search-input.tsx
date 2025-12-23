import React, { InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';
import { cn, styleConstants } from '@/lib/styles';

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onFocusChange?: (focused: boolean) => void;
  focusWidth?: string;
  defaultWidth?: string;
}

/**
 * Reusable SearchInput component with focus animation
 * 
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Search projects, tasks..."
 *   onFocusChange={(focused) => console.log('Focus:', focused)}
 * />
 * ```
 */
export const SearchInput = ({ 
  placeholder = 'Search...',
  onFocusChange,
  focusWidth = 'w-80',
  defaultWidth = 'w-64',
  className,
  ...props 
}: SearchInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocusChange?.(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocusChange?.(false);
  };

  return (
    <div className={cn(
      "relative",
      styleConstants.transition.default,
      isFocused ? focusWidth : defaultWidth,
      className
    )}>
      <Search 
        size={16} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" 
      />
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "w-full pl-10 pr-4 py-2.5",
          "bg-zinc-50 border border-zinc-200",
          "text-sm",
          "focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent",
          styleConstants.radius.sm,
          styleConstants.transition.default
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};
