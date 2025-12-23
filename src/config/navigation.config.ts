import { LucideIcon } from 'lucide-react';

/**
 * Navigation Item Type
 * Used for sidebar and navigation menus
 */
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Navigation items are defined in the sidebar component
 * because icon components cannot cross the server/client boundary.
 * 
 * This file exports the type for use across the app.
 * See: src/components/layout/sidebar.tsx for the actual navigation config.
 */
