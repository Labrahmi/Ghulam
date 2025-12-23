'use client';

import React, { useState } from 'react';
import {
  Home,
  FolderOpen,
  Layers3,
  Settings,
  Info,
  Menu,
  X,
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
 * Includes mobile toggle for responsive design
 */
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-2.5 left-2.5 z-50 p-1.5 bg-zinc-900 text-white rounded-md shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <NavigationList
        items={navigationItems}
        header={<span>{appConfig.branding.companyName}</span>}
        footer={<span>{appConfig.branding.footer}</span>}
        className={cn(
          appConfig.ui.sidebarWidth,
          "flex-col justify-between py-2 transition-all duration-300 shrink-0",
          // Desktop: always visible
          "hidden lg:flex",
          // Mobile: slide in from left
          isOpen && "!flex fixed left-0 top-0 h-full z-40 bg-white shadow-xl p-4 pt-16"
        )}
      />
    </>
  );
}