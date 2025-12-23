import { ItemStatus } from '@/types/common.types';

/**
 * Style constants and utility classes
 * Centralized styling for consistent theming
 */

export const styleConstants = {
  // Border radius
  radius: {
    sm: 'rounded-xl',
    md: 'rounded-2xl',
    full: 'rounded-full',
  },

  // Spacing
  spacing: {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
  },

  // Transitions
  transition: {
    default: 'transition-all duration-200',
    colors: 'transition-colors',
    opacity: 'transition-opacity',
  },

  // Shadows
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },
} as const;

/**
 * Status color mapping
 * Returns Tailwind classes for different status types
 */
export const getStatusColors = (status: ItemStatus): string => {
  const statusColorMap: Record<ItemStatus, string> = {
    completed: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    review: 'bg-blue-100 text-blue-700',
  };
  
  return statusColorMap[status];
};

/**
 * Build className strings conditionally
 */
export const cn = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
