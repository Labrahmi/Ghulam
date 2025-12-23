'use client';

import React from 'react';
import {
  FolderOpen,
  TrendingUp,
  User,
  Clock,
} from 'lucide-react';
import { DashboardHeader, StatsGrid, ActivityList, QuickActions } from '@/components/features';
import { recentActivities, quickActions } from '@/config/dashboard.config';
import { StatCardData } from '@/types/common.types';

/**
 * Dashboard statistics data
 * Defined here because icon components can't be passed through server/client boundary
 */
const dashboardStats: StatCardData[] = [
  {
    title: 'Active Projects',
    value: 12,
    trend: 8.2,
    icon: FolderOpen,
  },
  {
    title: 'Completed Tasks',
    value: 124,
    trend: 23.1,
    icon: TrendingUp,
  },
  {
    title: 'Team Members',
    value: 8,
    trend: 12.5,
    icon: User,
  },
  {
    title: 'This Month',
    value: '47h',
    trend: 5.7,
    icon: Clock,
  },
];

/**
 * Main dashboard page
 * Composed of reusable feature components that can be customized via config files
 * 
 * To customize this dashboard:
 * - Edit the stats array above to change statistics
 * - Edit dashboard.config.ts for activities and quick actions
 * - Edit app.config.ts to toggle features
 * - Edit navigation.config.ts to change sidebar items
 */
const DashboardPage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Header with search, notifications, and user profile */}
      <DashboardHeader
        title="Dashboard"
        subtitle="Welcome back, here's what's happening"
        hasUnreadNotifications={true}
      />

      {/* Main content area */}
      <div className="flex-1 p-8 space-y-8">
        {/* Statistics overview */}
        <StatsGrid stats={dashboardStats} />

        {/* Recent activity feed */}
        <ActivityList 
          title="Recent Activity"
          items={recentActivities}
          onViewAll={() => console.log('View all activities')}
        />

        {/* Quick action cards */}
        <QuickActions actions={quickActions} />
      </div>
    </div>
  );
};

export default DashboardPage;