import React from 'react';
import Link from 'next/link';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { cn, styleConstants } from '@/lib/styles';

export interface NavigationItemProps {
  isActive: boolean;
  label: string;
  href: string;
  icon: LucideIcon;
  onClick?: () => void;
}

/**
 * Reusable navigation item component
 * Can be used in sidebars, mobile menus, or other navigation contexts
 * 
 * @example
 * ```tsx
 * <NavigationItem
 *   isActive={true}
 *   label="Dashboard"
 *   href="/app"
 *   icon={Home}
 * />
 * ```
 */
export const NavigationItem = ({ 
  isActive, 
  label, 
  href, 
  icon: Icon,
  onClick 
}: NavigationItemProps) => {
  const className = cn(
    "group p-3 px-4",
    "flex justify-between items-center",
    "cursor-pointer",
    styleConstants.radius.md,
    styleConstants.transition.default,
    isActive
      ? "bg-zinc-900 text-white shadow-lg scale-[1.02]"
      : "hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900"
  );

  return (
    <Link href={href} className={className} onClick={onClick}>
      <div className="flex items-center gap-3">
        <Icon 
          size={18} 
          className={cn(
            isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-600'
          )} 
        />
        <span className="font-medium text-sm">{label}</span>
      </div>
      {isActive && (
        <ChevronRight size={14} className="text-zinc-400" />
      )}
    </Link>
  );
};
