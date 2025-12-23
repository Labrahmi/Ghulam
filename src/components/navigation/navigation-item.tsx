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
        'group p-3 px-4 flex justify-between items-center cursor-pointer',
        theme.radius.lg,
        theme.transition.default,
        isActive
          ? 'bg-zinc-900 text-white shadow-lg scale-[1.02]'
          : 'hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900'
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={18}
          className={cn(isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-600')}
        />
        <span className={cn(theme.font.medium, theme.text.sm)}>{label}</span>
      </div>
      {isActive && <ChevronRight size={14} className="text-zinc-400" />}
    </Link>
  );
}