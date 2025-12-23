import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn, styleConstants } from '@/lib/styles';

export interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  badge?: boolean;
  className?: string;
  iconSize?: number;
}

/**
 * Reusable IconButton component for header actions
 * 
 * @example
 * ```tsx
 * <IconButton 
 *   icon={Bell} 
 *   badge 
 *   onClick={() => console.log('Notification clicked')} 
 * />
 * ```
 */
export const IconButton = ({ 
  icon: Icon, 
  onClick, 
  badge,
  iconSize = 18,
  className 
}: IconButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "p-2.5 hover:bg-zinc-50 relative",
        styleConstants.radius.sm,
        styleConstants.transition.colors,
        className
      )}
    >
      <Icon size={iconSize} className="text-zinc-600" />
      {badge && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
      )}
    </button>
  );
};
