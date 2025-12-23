'use client';

import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

/**
 * Dashboard Page - Clean Template
 * Header with search/notifications/profile
 * Empty body ready for any content
 */
export default function DashboardPage() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <header className="px-3 sm:px-4 py-2.5 border-b border-zinc-100 flex items-center justify-between gap-3">
        <div className="pl-8 lg:pl-0">
          <h1 className="text-base sm:text-lg font-semibold text-zinc-900">Dashboard</h1>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Search */}
          <div className={`relative transition-all duration-200 ${searchFocused ? 'w-48 sm:w-56' : 'w-32 sm:w-40'}`}>
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-2 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
          {/* Notifications */}
          <button className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors relative">
            <Bell size={16} className="text-zinc-500" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
          {/* Profile */}
          <button className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors">
            <User size={16} className="text-zinc-500" />
          </button>
        </div>
      </header>

      {/* Content - Empty, ready for any app */}
      <div className="flex-1 p-3 sm:p-4 overflow-auto">
        {/* Add your content here */}
      </div>
    </div>
  );
}