import { ActivityItem, QuickAction } from '@/types/common.types';

/**
 * Dashboard data configuration
 * Customize this file to change dashboard content for your specific app
 * 
 * Note: Statistics with icons are defined in the page component because
 * icon components cannot be passed through the server/client boundary.
 * See src/app/app/page.tsx for stats configuration.
 */

/**
 * Recent activity items to display
 */
export const recentActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'Project Alpha Review',
    subtitle: 'Design system updates',
    time: '2h ago',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Client Meeting Prep',
    subtitle: 'Q3 roadmap discussion',
    time: '4h ago',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Code Review',
    subtitle: 'Authentication module',
    time: '6h ago',
    status: 'review',
  },
  {
    id: '4',
    title: 'Team Standup',
    subtitle: 'Weekly sync meeting',
    time: '1d ago',
    status: 'completed',
  },
];

/**
 * Quick action cards to display
 */
export const quickActions: QuickAction[] = [
  {
    id: '1',
    title: 'Start New Project',
    description: 'Create a new project and invite your team',
    buttonText: 'Get Started',
    variant: 'primary',
  },
  {
    id: '2',
    title: 'Schedule Meeting',
    description: 'Book time with your team or clients',
    buttonText: 'Open Calendar',
    variant: 'secondary',
  },
];
