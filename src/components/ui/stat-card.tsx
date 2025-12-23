import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn, theme, presets } from '@/lib/styles';

export interface StatCardProps {
  /** Card title/label */
  title: string;
  /** Main value to display */
  value: string | number;
  /** Optional trend percentage (positive number) */
  trend?: number;
  /** Optional icon component */
  icon?: LucideIcon;
  /** Additional CSS classes */
  className?: string;
}

/**
 * StatCard - Display a metric with optional trend and icon
 * 
 * @example
 * ```tsx
 * <StatCard title="Revenue" value="$12,345" trend={8.5} icon={DollarSign} />
 * <StatCard title="Users" value={1234} />
 * ```
 */
export function StatCard({ title, value, trend, icon: Icon, className }: StatCardProps) {
  return (
    <div className={cn(presets.card.interactive, 'p-6', className)}>
      <div className="flex items-center justify-between mb-4">
        {Icon && (
          <div className={presets.iconBox}>
            <Icon size={20} className={theme.colors.text.secondary} />
          </div>
        )}
        {trend !== undefined && (
          <span className={cn(presets.badge, theme.colors.accent.success)}>
            +{trend}%
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className={cn(theme.text['2xl'], theme.font.bold, theme.colors.text.primary)}>
          {value}
        </h3>
        <p className={cn(theme.text.sm, theme.colors.text.muted)}>{title}</p>
      </div>
    </div>
  );
}
