import {
  Home,
  FolderOpen,
  Layers3,
  Settings,
  Info,
  LucideIcon,
} from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Navigation configuration for the application
 * Customize this array to change the sidebar navigation
 */
export const navigationConfig: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/app',
    icon: Home,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#',
    icon: FolderOpen,
  },
  {
    id: 'side-projects',
    label: 'Side Projects',
    href: '#',
    icon: Layers3,
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '#',
    icon: Settings,
  },
  {
    id: 'apis',
    label: 'APIs',
    href: '#',
    icon: Info,
  },
];
