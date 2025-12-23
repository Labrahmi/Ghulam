import React from 'react';
import { Bell, User } from 'lucide-react';
import { SearchInput, IconButton, SectionHeader } from '@/components/ui';
import { appConfig } from '@/config/app.config';
import { cn } from '@/lib/styles';

export interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserProfile?: boolean;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  hasUnreadNotifications?: boolean;
  className?: string;
}

/**
 * Reusable dashboard header component
 * Includes title, subtitle, search, notifications, and user profile
 * 
 * @example
 * ```tsx
 * <DashboardHeader
 *   title="Dashboard"
 *   subtitle="Welcome back, here's what's happening"
 *   showSearch
 *   showNotifications
 *   hasUnreadNotifications
 * />
 * ```
 */
export const DashboardHeader = ({ 
  title = 'Dashboard',
  subtitle = "Welcome back, here's what's happening",
  showSearch = appConfig.features.search,
  showNotifications = appConfig.features.notifications,
  showUserProfile = appConfig.features.userProfile,
  onNotificationClick,
  onProfileClick,
  hasUnreadNotifications = false,
  className 
}: DashboardHeaderProps) => {
  return (
    <header className={cn("p-8 pb-6 border-b border-zinc-100", className)}>
      <div className="flex items-center justify-between mb-6">
        <SectionHeader title={title} subtitle={subtitle} />
        
        <div className="flex items-center gap-3">
          {showSearch && (
            <SearchInput placeholder="Search projects, tasks..." />
          )}
          
          {showNotifications && (
            <IconButton
              icon={Bell}
              badge={hasUnreadNotifications}
              onClick={onNotificationClick}
            />
          )}
          
          {showUserProfile && (
            <IconButton
              icon={User}
              onClick={onProfileClick}
            />
          )}
        </div>
      </div>
    </header>
  );
};
