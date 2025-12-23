import { LucideIcon } from 'lucide-react';

/**
 * Common type definitions used throughout the application
 */

// Status types for items, tasks, etc.
export type ItemStatus = 'completed' | 'pending' | 'review';

// Stat card data structure
export interface StatCardData {
  title: string;
  value: string | number;
  trend: number;
  icon: LucideIcon;
}

// Activity/Recent item data structure
export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  status: ItemStatus;
}

// Quick action card data structure
export interface QuickAction {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  variant: 'primary' | 'secondary';
  onAction?: () => void;
}

// Generic data grid props
export interface DataGridProps<T> {
  items: T[];
  columns?: number;
  gap?: number;
}
