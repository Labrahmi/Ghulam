import React from 'react';
import Link from 'next/link';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { cn, theme } from '@/lib/styles';

export interface NavigationItemProps {
  /** Whether this item is currently active */
  isActive: boolean;
  /** Display label */
  label: string;
  /** Navigation href */
  href: string;
  /** Icon component */
  icon: LucideIcon;
  /** Click handler */
  onClick?: () => void;
}

/**
 * NavigationItem - Single navigation link with icon and active state
 * 
 * @example
 * ```tsx
 * <NavigationItem isActive={true} label="Dashboard" href="/app" icon={Home} />
 * ```
 */
export function NavigationItem({
  isActive,
  label,
  href,
  icon: Icon,
  onClick,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group py-1.5 px-2.5 flex justify-between items-center cursor-pointer',
        theme.radius.md,
        theme.transition.default,
        isActive
          ? 'bg-zinc-900 text-white'
          : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900'
      )}
    >
      <div className="flex items-center gap-2">
        <Icon
          size={14}
          className={cn(isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-500')}
        />
        <span className="text-xs font-medium">{label}</span>
      </div>
      {isActive && <ChevronRight size={10} className="text-zinc-400" />}
    </Link>
  );
}