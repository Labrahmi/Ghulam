# ⚡ Quick Start: Customize for Your Project

Follow these steps to adapt this blueprint for your specific project in ~10 minutes.

## 1️⃣ Update App Identity (2 min)

**File:** [`src/config/app.config.ts`](src/config/app.config.ts)

```typescript
export const appConfig = {
  // 👇 Change these values
  name: "MyAwesomeApp",                    // Your app name
  description: "My amazing application",   // Your app description
  
  branding: {
    companyName: "MyCompany",              // Sidebar header
    footer: "© 2025 MyCompany",            // Sidebar footer
  },

  features: {
    notifications: true,    // Show notification bell?
    search: true,          // Show search bar?
    userProfile: true,     // Show user profile icon?
  },

  ui: {
    maxWidth: "lg:max-w-7xl xl:max-w-[120rem]",  // Max content width
    sidebarMinWidth: "min-w-64",                  // Sidebar width
  },
};
```

## 2️⃣ Configure Navigation (3 min)

**File:** [`src/config/navigation.config.ts`](src/config/navigation.config.ts)

```typescript
import {
  Home,
  FolderOpen,
  Settings,
  // 👇 Import icons you need from lucide-react
} from 'lucide-react';

export const navigationConfig: NavigationItem[] = [
  // 👇 Update this array with your navigation items
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/app',
    icon: Home,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/app/projects',
    icon: FolderOpen,
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/app/settings',
    icon: Settings,
  },
  // Add more items as needed...
];
```

## 3️⃣ Update Dashboard Content (5 min)

**File:** [`src/config/dashboard.config.ts`](src/config/dashboard.config.ts)

### Statistics Cards

```typescript
import {
  FolderOpen,
  Users,
  // 👇 Import icons for your stats
} from 'lucide-react';

export const dashboardStats: StatCardData[] = [
  // 👇 Update with your metrics
  {
    title: 'Total Users',
    value: 1234,
    trend: 12.5,
    icon: Users,
  },
  {
    title: 'Active Projects',
    value: 56,
    trend: 8.2,
    icon: FolderOpen,
  },
  // Add more stats...
];
```

### Activity Feed

```typescript
export const recentActivities: ActivityItem[] = [
  // 👇 Update with your activities
  {
    id: '1',
    title: 'New User Signup',
    subtitle: 'john@example.com registered',
    time: '5m ago',
    status: 'completed',  // 'completed' | 'pending' | 'review'
  },
  {
    id: '2',
    title: 'Payment Received',
    subtitle: '$99 from customer',
    time: '1h ago',
    status: 'completed',
  },
  // Add more activities...
];
```

### Quick Actions

```typescript
export const quickActions: QuickAction[] = [
  // 👇 Update with your actions
  {
    id: '1',
    title: 'Create New User',
    description: 'Add a new user to your system',
    buttonText: 'Add User',
    variant: 'primary',  // 'primary' (dark) | 'secondary' (light)
  },
  {
    id: '2',
    title: 'Generate Report',
    description: 'Export data and analytics',
    buttonText: 'Export',
    variant: 'secondary',
  },
  // Add more actions...
];
```

## 4️⃣ Update Package Info (1 min)

**File:** `package.json`

```json
{
  "name": "my-awesome-app",           // 👈 Change this
  "version": "1.0.0",                 // 👈 Your version
  "description": "My app description" // 👈 Optional
}
```

## ✅ Done! Test Your App

```bash
# Install dependencies (if not done)
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

## 🎨 Optional: Customize Styling

**File:** [`src/lib/styles.ts`](src/lib/styles.ts)

Change colors, spacing, or radius:

```typescript
export const styleConstants = {
  radius: {
    sm: 'rounded-xl',   // 👈 Change border radius
    md: 'rounded-2xl',
    full: 'rounded-full',
  },
  
  spacing: {
    xs: 'gap-2',       // 👈 Change spacing values
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
  },
};
```

## 🚀 Next Steps

### Add New Pages

1. Create new page: `src/app/app/my-page/page.tsx`
2. Create config (optional): `src/config/my-page.config.ts`
3. Add navigation item to `navigation.config.ts`

Example new page:

```tsx
'use client';

import { DashboardHeader, StatsGrid } from '@/components/features';

export default function MyPage() {
  return (
    <div className="h-full flex flex-col">
      <DashboardHeader 
        title="My Page" 
        subtitle="Custom page description" 
      />
      <div className="flex-1 p-8 space-y-8">
        {/* Add your content using existing components */}
      </div>
    </div>
  );
}
```

### Customize Components

Browse available components:
- **UI Components**: `src/components/ui/`
- **Feature Components**: `src/components/features/`
- **Navigation**: `src/components/navigation/`

All components have JSDoc documentation with usage examples!

## 📚 Learn More

- **[BLUEPRINT_GUIDE.md](BLUEPRINT_GUIDE.md)** - Complete documentation
- **[REFACTORING_SUMMARY.md](REFACTORING_SUMMARY.md)** - What changed and why
- **[README_BLUEPRINT.md](README_BLUEPRINT.md)** - Technical overview

## 💡 Tips

- ✅ Update config files, not component code
- ✅ Use existing components before creating new ones
- ✅ Follow the established folder structure
- ✅ Add TypeScript types for new data structures
- ✅ Keep the UI unchanged for consistency

---

**That's it! You now have a fully customized dashboard application. Happy coding! 🎉**
