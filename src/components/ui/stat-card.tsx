import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn, styleConstants } from '@/lib/styles';

export interface StatCardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: LucideIcon;
  className?: string;
}

/**
 * Reusable StatCard component for displaying statistics with trends
 * 
 * @example
 * ```tsx
 * <StatCard 
 *   title="Active Projects" 
 *   value={12} 
 *   trend={8.2} 
 *   icon={FolderOpen} 
 * />
 * ```
 */
export const StatCard = ({ 
  title, 
  value, 
  trend, 
  icon: Icon,
  className 
}: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 border border-zinc-100",
      "hover:border-zinc-200 hover:shadow-sm",
      "group",
      styleConstants.radius.md,
      styleConstants.transition.default,
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "p-2 bg-zinc-50 group-hover:bg-zinc-100",
          styleConstants.radius.sm,
          styleConstants.transition.colors
        )}>
          <Icon size={20} className="text-zinc-600" />
        </div>
        <span className={cn(
          "text-xs font-medium text-green-600 bg-green-50 px-2 py-1",
          styleConstants.radius.full
        )}>
          +{trend}%
        </span>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-zinc-900">{value}</h3>
        <p className="text-sm text-zinc-500">{title}</p>
      </div>
    </div>
  );
};
