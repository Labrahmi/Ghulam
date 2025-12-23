'use client';

import React from 'react';
import {
  Home,
  FolderOpen,
  Layers3,
  Settings,
  Info,
} from 'lucide-react';
import { NavigationList } from '@/components/navigation';
import { appConfig } from '@/config/app.config';
import { cn } from '@/lib/styles';
import { NavigationItem } from '@/config/navigation.config';

/**
 * Navigation items configuration
 * Defined here because icon components can't be passed through server/client boundary
 */
const navigationItems: NavigationItem[] = [
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

/**
 * Sidebar component for the application layout
 * Uses NavigationList with configuration defined above
 * Customize branding in app.config.ts
 */
export default function SideBar() {
  return (
    <NavigationList
      items={navigationItems}
      header={<span>{appConfig.branding.companyName}</span>}
      footer={<span>{appConfig.branding.footer}</span>}
      className={cn(
        appConfig.ui.sidebarMinWidth,
        "flex-1 md:flex justify-between flex-col gap-2 hidden transition-all"
      )}
    />
  );
}