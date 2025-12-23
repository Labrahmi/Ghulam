# Project Structure & Customization Guide

This codebase is designed as a **reusable blueprint** for dashboard applications. All app-specific content is externalized into configuration files, making it easy to adapt for new projects.

## 📁 Project Structure

```
src/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Landing page
│   └── app/                 # Authenticated app section
│       ├── layout.tsx       # App layout with sidebar
│       └── page.tsx         # Dashboard page
│
├── components/
│   ├── ui/                  # Reusable UI primitives
│   │   ├── stat-card.tsx
│   │   ├── activity-item.tsx
│   │   ├── action-card.tsx
│   │   ├── section-header.tsx
│   │   ├── search-input.tsx
│   │   ├── icon-button.tsx
│   │   └── index.ts         # Barrel export
│   │
│   ├── navigation/          # Navigation components
│   │   ├── navigation-item.tsx
│   │   ├── navigation-list.tsx
│   │   └── index.ts
│   │
│   ├── features/            # Feature-specific compositions
│   │   ├── dashboard-header.tsx
│   │   ├── stats-grid.tsx
│   │   ├── activity-list.tsx
│   │   ├── quick-actions.tsx
│   │   └── index.ts
│   │
│   └── layout/              # Layout components
│       └── sidebar.tsx
│
├── config/                  # ⚡ Configuration files (customize here!)
│   ├── app.config.ts        # App metadata, branding, features
│   ├── navigation.config.ts # Sidebar navigation items
│   └── dashboard.config.ts  # Dashboard content data
│
├── types/                   # TypeScript type definitions
│   └── common.types.ts      # Shared types
│
└── lib/                     # Utilities and helpers
    └── styles.ts            # Style constants and utilities
```

## 🎨 Customization Guide

### 1. App Identity & Branding

Edit [`src/config/app.config.ts`](src/config/app.config.ts):

```typescript
export const appConfig = {
  name: "YourAppName",           // Change app name
  description: "Your description", // Change description
  
  branding: {
    companyName: "YourCompany",   // Sidebar header
    footer: "Footer Text",         // Sidebar footer
  },
  
  features: {
    notifications: true,           // Toggle notification bell
    search: true,                  // Toggle search bar
    userProfile: true,             // Toggle user profile icon
  },
};
```

### 2. Navigation Menu

Edit [`src/config/navigation.config.ts`](src/config/navigation.config.ts):

```typescript
import { Home, Settings } from 'lucide-react';

export const navigationConfig: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/app',
    icon: Home,
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/app/settings',
    icon: Settings,
  },
  // Add more navigation items here
];
```

### 3. Dashboard Content

Edit [`src/config/dashboard.config.ts`](src/config/dashboard.config.ts):

**Statistics Cards:**
```typescript
export const dashboardStats: StatCardData[] = [
  {
    title: 'Your Metric',
    value: 100,
    trend: 15.5,
    icon: YourIcon,
  },
  // Add more stats...
];
```

**Activity Feed:**
```typescript
export const recentActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'Activity Title',
    subtitle: 'Description',
    time: '2h ago',
    status: 'completed', // 'completed' | 'pending' | 'review'
  },
  // Add more activities...
];
```

**Quick Actions:**
```typescript
export const quickActions: QuickAction[] = [
  {
    id: '1',
    title: 'Action Title',
    description: 'Action description',
    buttonText: 'Click Me',
    variant: 'primary', // 'primary' | 'secondary'
  },
  // Add more actions...
];
```

## 🧩 Component Architecture

### UI Components (`components/ui/`)
Atomic, reusable components with minimal business logic:
- **StatCard**: Display metrics with trends
- **ActivityItem**: Show activity feed items
- **ActionCard**: Call-to-action cards
- **SearchInput**: Animated search input
- **IconButton**: Icon buttons with badges
- **SectionHeader**: Section titles with optional actions

### Feature Components (`components/features/`)
Composed components that combine UI primitives:
- **DashboardHeader**: Complete header with search, notifications, profile
- **StatsGrid**: Responsive grid of stat cards
- **ActivityList**: List of activities with header
- **QuickActions**: Grid of action cards

### Navigation Components (`components/navigation/`)
Flexible navigation system:
- **NavigationItem**: Single nav item with active state
- **NavigationList**: Full navigation with header/footer

## 🎯 Usage Examples

### Creating a New Page

```tsx
'use client';

import { DashboardHeader, StatsGrid } from '@/components/features';
import { myPageStats } from '@/config/my-page.config';

export default function MyPage() {
  return (
    <div className="h-full flex flex-col">
      <DashboardHeader title="My Page" subtitle="Custom page" />
      <div className="flex-1 p-8 space-y-8">
        <StatsGrid stats={myPageStats} />
      </div>
    </div>
  );
}
```

### Using UI Components Directly

```tsx
import { StatCard, ActivityItem } from '@/components/ui';
import { Users } from 'lucide-react';

<StatCard 
  title="Active Users" 
  value={1234} 
  trend={8.5} 
  icon={Users} 
/>

<ActivityItem
  title="User Signup"
  subtitle="New user registered"
  time="5m ago"
  status="completed"
/>
```

## 🎨 Styling System

### Style Constants
Located in [`src/lib/styles.ts`](src/lib/styles.ts):

```typescript
import { styleConstants } from '@/lib/styles';

// Border radius
styleConstants.radius.sm  // rounded-xl
styleConstants.radius.md  // rounded-2xl
styleConstants.radius.full // rounded-full

// Spacing
styleConstants.spacing.xs  // gap-2
styleConstants.spacing.md  // gap-6

// Transitions
styleConstants.transition.default  // transition-all duration-200
```

### Utility Functions

**`cn()` - Conditional classNames:**
```typescript
import { cn } from '@/lib/styles';

<div className={cn(
  "base-class",
  isActive && "active-class",
  "another-class"
)}>
```

**`getStatusColors()` - Status styling:**
```typescript
import { getStatusColors } from '@/lib/styles';

<span className={getStatusColors(status)}>
  {status}
</span>
```

## 🔧 Type Definitions

All shared types are in [`src/types/common.types.ts`](src/types/common.types.ts):

```typescript
// Status for activities, tasks, etc.
type ItemStatus = 'completed' | 'pending' | 'review';

// Stat card data
interface StatCardData {
  title: string;
  value: string | number;
  trend: number;
  icon: LucideIcon;
}

// Activity item data
interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  status: ItemStatus;
}
```

## 🚀 Getting Started with a New Project

1. **Clone this repository**
2. **Update configuration files:**
   - `src/config/app.config.ts` - App name, branding
   - `src/config/navigation.config.ts` - Navigation menu
   - `src/config/dashboard.config.ts` - Dashboard content
3. **Customize metadata:**
   - Update `package.json` name and description
   - Modify root layout metadata
4. **Add your features:**
   - Create new pages in `src/app/app/`
   - Add new config files for page-specific data
   - Compose from existing UI components
5. **Extend as needed:**
   - Add new UI components to `src/components/ui/`
   - Create feature components in `src/components/features/`
   - Define new types in `src/types/`

## 📦 Key Benefits

✅ **Separation of Concerns**: Logic, UI, and data are clearly separated
✅ **Type Safety**: Full TypeScript coverage with shared type definitions
✅ **Reusable Components**: Atomic design with composable pieces
✅ **Easy Customization**: All app-specific content in config files
✅ **Consistent Styling**: Centralized style constants and utilities
✅ **Well Documented**: Inline JSDoc comments on all components
✅ **Scalable Architecture**: Clear patterns for extending functionality

## 🎓 Best Practices

- **Keep config files app-specific**: Don't hardcode data in components
- **Use TypeScript types**: Import types from `types/common.types.ts`
- **Compose, don't duplicate**: Build new features from existing UI components
- **Document new components**: Add JSDoc comments with examples
- **Follow the folder structure**: Keep related files organized together
- **Use barrel exports**: Import from `index.ts` files for cleaner imports

---

**This blueprint is designed to be cloned and customized for each new project. All app-specific content lives in configuration files, making it quick and easy to bootstrap new dashboard applications.**
