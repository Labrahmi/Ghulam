/**
 * Project Index - Complete File Structure
 * 
 * This file documents the complete refactored structure of the application.
 * Use this as a reference when navigating the codebase.
 * 
 * Note: This is a documentation file only. The imports shown are examples
 * of how to import from each module, not actual imports.
 */

/**
 * =============================================================================
 * CONFIGURATION FILES (src/config/)
 * =============================================================================
 * These files contain all app-specific content that should be customized
 * for each new project. This is where you start when adapting the blueprint.
 * 
 * Example imports:
 * 
 * import { appConfig } from '@/config/app.config';
 * import { navigationConfig } from '@/config/navigation.config';
 * import { dashboardStats, recentActivities, quickActions } from '@/config/dashboard.config';
 */

/**
 * =============================================================================
 * TYPE DEFINITIONS (src/types/)
 * =============================================================================
 * Shared TypeScript interfaces and types used throughout the application.
 * 
 * Example imports:
 * 
 * import type {
 *   ItemStatus,
 *   StatCardData,
 *   ActivityItem,
 *   QuickAction,
 *   DataGridProps,
 * } from '@/types/common.types';
 */

/**
 * =============================================================================
 * UTILITIES & HELPERS (src/lib/)
 * =============================================================================
 * Reusable utility functions and constants.
 * 
 * Example imports:
 * 
 * import { styleConstants, getStatusColors, cn } from '@/lib/styles';
 */

/**
 * =============================================================================
 * UI COMPONENTS (src/components/ui/)
 * =============================================================================
 * Atomic, reusable UI components with no business logic.
 * These are the building blocks for more complex components.
 * 
 * Example imports:
 * 
 * import { StatCard, ActivityItem, ActionCard } from '@/components/ui';
 * import { SectionHeader, SearchInput, IconButton } from '@/components/ui';
 */

/**
 * =============================================================================
 * NAVIGATION COMPONENTS (src/components/navigation/)
 * =============================================================================
 * Flexible navigation system that can be configured via config files.
 * 
 * Example imports:
 * 
 * import { NavigationItem, NavigationList } from '@/components/navigation';
 */

/**
 * =============================================================================
 * FEATURE COMPONENTS (src/components/features/)
 * =============================================================================
 * Composed components that combine UI primitives for specific features.
 * These are page-level components that can be reused across pages.
 * 
 * Example imports:
 * 
 * import { DashboardHeader, StatsGrid } from '@/components/features';
 * import { ActivityList, QuickActions } from '@/components/features';
 */

/**
 * =============================================================================
 * LAYOUT COMPONENTS (src/components/layout/)
 * =============================================================================
 * Layout components that provide consistent structure.
 * 
 * Example imports:
 * 
 * import SideBar from '@/components/layout/sidebar';
 */

/**
 * =============================================================================
 * PAGES (src/app/)
 * =============================================================================
 * Next.js pages that compose feature components.
 */

// Landing page - Entry point
// File: src/app/page.tsx

// Root layout - Global styles and metadata
// File: src/app/layout.tsx

// App layout - Sidebar + content area
// File: src/app/app/layout.tsx

// Dashboard page - Main application view
// File: src/app/app/page.tsx

/**
 * =============================================================================
 * DOCUMENTATION FILES
 * =============================================================================
 */

// Quick start guide for new projects (start here!)
// File: QUICK_START.md

// Complete customization guide with examples
// File: BLUEPRINT_GUIDE.md

// Technical overview and features
// File: README_BLUEPRINT.md

// Detailed refactoring documentation
// File: REFACTORING_SUMMARY.md

// Refactoring completion summary
// File: REFACTORING_COMPLETE.md

/**
 * =============================================================================
 * DEPENDENCY GRAPH
 * =============================================================================
 * 
 * Pages
 *   ↓ (use)
 * Feature Components
 *   ↓ (use)
 * UI Components
 *   ↓ (use)
 * Utilities & Types
 *   ↓ (reference)
 * Configuration Files
 * 
 * =============================================================================
 * COMPONENT HIERARCHY
 * =============================================================================
 * 
 * 1. Atoms (UI Components)
 *    - StatCard, ActivityItem, ActionCard
 *    - SearchInput, IconButton, SectionHeader
 * 
 * 2. Molecules (Feature Components)
 *    - DashboardHeader (composes: SearchInput, IconButton, SectionHeader)
 *    - StatsGrid (composes: StatCard)
 *    - ActivityList (composes: ActivityItem, SectionHeader)
 *    - QuickActions (composes: ActionCard)
 * 
 * 3. Organisms (Pages)
 *    - DashboardPage (composes: DashboardHeader, StatsGrid, ActivityList, QuickActions)
 * 
 * 4. Templates (Layouts)
 *    - AppLayout (composes: SideBar + content)
 *    - RootLayout (provides global styles)
 * 
 * =============================================================================
 * FILE COUNTS
 * =============================================================================
 * 
 * Configuration:   3 files
 * Types:           1 file
 * Utilities:       1 file
 * UI Components:   7 files (6 components + 1 index)
 * Navigation:      3 files (2 components + 1 index)
 * Features:        5 files (4 components + 1 index)
 * Layout:          1 file
 * Pages:           4 files
 * Documentation:   5 files
 * 
 * Total:          30 new/modified files
 * 
 * =============================================================================
 * IMPORT PATTERNS
 * =============================================================================
 * 
 * ✅ Good (use barrel exports):
 * import { StatCard, ActivityItem } from '@/components/ui';
 * import { DashboardHeader } from '@/components/features';
 * 
 * ❌ Avoid (direct imports):
 * import { StatCard } from '@/components/ui/stat-card';
 * 
 * ✅ Configuration imports:
 * import { appConfig } from '@/config/app.config';
 * import { navigationConfig } from '@/config/navigation.config';
 * 
 * ✅ Type imports:
 * import type { StatCardData } from '@/types/common.types';
 * 
 * ✅ Utility imports:
 * import { cn, styleConstants } from '@/lib/styles';
 * 
 * =============================================================================
 */
