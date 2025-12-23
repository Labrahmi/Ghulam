'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { NavigationItem } from './navigation-item';
import { NavigationItem as NavItemType } from '@/config/navigation.config';

export interface NavigationListProps {
  items: NavItemType[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

/**
 * Reusable navigation list component
 * Renders a list of navigation items with optional header and footer
 * Automatically handles active state based on current pathname
 * 
 * @example
 * ```tsx
 * <NavigationList
 *   items={navigationConfig}
 *   header={<span>App Name</span>}
 *   footer={<span>Footer Text</span>}
 * />
 * ```
 */
export const NavigationList = ({ 
  items, 
  header, 
  footer,
  className 
}: NavigationListProps) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {header && (
        <div className="cursor-default mb-3 text-xs font-bold text-zinc-900 tracking-wide">{header}</div>
      )}
      
      <div className="flex flex-col gap-0.5">
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            isActive={pathname === item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>

      {footer && (
        <div className="cursor-default mt-3 text-[10px] text-zinc-400">{footer}</div>
      )}
    </nav>
  );
};
