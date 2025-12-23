import { LucideIcon } from 'lucide-react';

/**
 * Common Type Definitions
 * Shared types used across the application
 */

// =============================================================================
// BASE TYPES
// =============================================================================

/** Standard size options */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Common variant options */
export type Variant = 'primary' | 'secondary' | 'ghost';

/** Status types for items, tasks, badges */
export type Status = 'success' | 'warning' | 'info' | 'error' | 'completed' | 'pending' | 'review';

// =============================================================================
// COMPONENT DATA TYPES
// =============================================================================

/** Data structure for stat/metric cards */
export interface StatData {
  title: string;
  value: string | number;
  trend?: number;
  icon?: LucideIcon;
}

/** Data structure for activity/list items */
export interface ActivityData {
  id: string;
  title: string;
  subtitle?: string;
  time?: string;
  status?: Status;
}

/** Data structure for action/CTA cards */
export interface ActionData {
  id: string;
  title: string;
  description?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  onAction?: () => void;
}

/** Data structure for navigation items */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/** Props that accept children */
export interface WithChildren {
  children?: React.ReactNode;
}

/** Props that accept className */
export interface WithClassName {
  className?: string;
}

/** Common base props for most components */
export interface BaseProps extends WithChildren, WithClassName {}

