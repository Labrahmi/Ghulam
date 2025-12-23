/**
 * Theme Configuration
 * Central place for all design tokens and styling utilities
 */

// =============================================================================
// DESIGN TOKENS
// =============================================================================

export const theme = {
  // Colors - Zinc-based neutral palette
  colors: {
    // Background colors
    background: {
      primary: 'bg-white',
      secondary: 'bg-zinc-50',
      tertiary: 'bg-zinc-100',
      inverse: 'bg-zinc-900',
      gradient: 'bg-gradient-to-br from-zinc-900 to-zinc-800',
    },
    // Text colors
    text: {
      primary: 'text-zinc-900',
      secondary: 'text-zinc-600',
      muted: 'text-zinc-500',
      subtle: 'text-zinc-400',
      inverse: 'text-white',
      light: 'text-zinc-300',
    },
    // Border colors
    border: {
      light: 'border-zinc-100',
      default: 'border-zinc-200',
      dark: 'border-zinc-300',
    },
    // Status colors
    status: {
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      info: 'bg-blue-100 text-blue-700',
      error: 'bg-red-100 text-red-700',
    },
    // Accent colors
    accent: {
      success: 'bg-green-50 text-green-600',
      notification: 'bg-red-500',
    },
  },

  // Border radius
  radius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  },

  // Spacing (padding/margin)
  spacing: {
    xs: '2',
    sm: '3',
    md: '4',
    lg: '6',
    xl: '8',
  },

  // Gap sizes
  gap: {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  },

  // Transitions
  transition: {
    fast: 'transition-all duration-150',
    default: 'transition-all duration-200',
    slow: 'transition-all duration-300',
    colors: 'transition-colors duration-200',
    opacity: 'transition-opacity duration-200',
  },

  // Shadows
  shadow: {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  },

  // Typography
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  },

  // Font weights
  font: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Conditionally join class names
 * Filters out falsy values and joins with space
 */
export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Get status color classes based on status type
 */
export type StatusType = 'success' | 'warning' | 'info' | 'error' | 'completed' | 'pending' | 'review';

export const getStatusColor = (status: StatusType): string => {
  const statusMap: Record<StatusType, string> = {
    success: theme.colors.status.success,
    completed: theme.colors.status.success,
    warning: theme.colors.status.warning,
    pending: theme.colors.status.warning,
    info: theme.colors.status.info,
    review: theme.colors.status.info,
    error: theme.colors.status.error,
  };
  return statusMap[status] || theme.colors.status.info;
};

// =============================================================================
// COMPONENT PRESETS
// =============================================================================

/**
 * Pre-defined component style combinations for consistency
 */
export const presets = {
  // Card styles
  card: {
    base: cn(
      theme.colors.background.primary,
      theme.radius.lg,
      'border',
      theme.colors.border.light
    ),
    interactive: cn(
      theme.colors.background.primary,
      theme.radius.lg,
      'border',
      theme.colors.border.light,
      'hover:border-zinc-200',
      theme.transition.default,
      'hover:shadow-sm',
      'group'
    ),
    dark: cn(
      theme.colors.background.gradient,
      theme.radius.lg,
      theme.colors.text.inverse
    ),
    muted: cn(
      theme.colors.background.secondary,
      theme.radius.lg,
      'border',
      theme.colors.border.default
    ),
  },

  // Button styles
  button: {
    primary: cn(
      theme.colors.background.inverse,
      theme.colors.text.inverse,
      theme.radius.md,
      'px-4 py-2',
      theme.text.sm,
      theme.font.medium,
      'hover:bg-zinc-800',
      theme.transition.colors
    ),
    secondary: cn(
      theme.colors.background.primary,
      theme.colors.text.primary,
      theme.radius.md,
      'px-4 py-2',
      theme.text.sm,
      theme.font.medium,
      'hover:bg-zinc-100',
      theme.transition.colors
    ),
    ghost: cn(
      'p-2.5',
      theme.radius.md,
      'hover:bg-zinc-50',
      theme.transition.colors
    ),
  },

  // Input styles
  input: {
    base: cn(
      'w-full',
      'px-4 py-2.5',
      theme.colors.background.secondary,
      'border',
      theme.colors.border.default,
      theme.radius.md,
      theme.text.sm,
      'focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent',
      theme.transition.default
    ),
  },

  // Badge styles
  badge: cn(
    theme.text.xs,
    theme.font.medium,
    'px-2 py-1',
    theme.radius.full
  ),

  // Icon container
  iconBox: cn(
    'p-2',
    theme.colors.background.secondary,
    theme.radius.md,
    'group-hover:bg-zinc-100',
    theme.transition.colors
  ),
} as const;
