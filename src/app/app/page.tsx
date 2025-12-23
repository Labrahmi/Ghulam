'use client';

import React, { useState } from 'react';
import {
  FolderOpen,
  TrendingUp,
  User,
  Clock,
  Search,
  Bell,
  MoreHorizontal,
  Plus,
  Calendar,
} from 'lucide-react';

/**
 * Dashboard Page - Compact & Clean Design
 */
export default function DashboardPage() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="h-full flex flex-col">
      {/* Header - Compact */}
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
          <button className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors relative">
            <Bell size={16} className="text-zinc-500" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
          <button className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors">
            <User size={16} className="text-zinc-500" />
          </button>
        </div>
      </header>

      {/* Content - Compact */}
      <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-auto">
        {/* Stats Row - Inline compact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {[
            { title: 'Projects', value: 12, trend: '+8%', icon: FolderOpen, color: 'text-blue-600' },
            { title: 'Tasks', value: 124, trend: '+23%', icon: TrendingUp, color: 'text-green-600' },
            { title: 'Team', value: 8, trend: '+2', icon: User, color: 'text-violet-600' },
            { title: 'Hours', value: '47h', trend: '+6%', icon: Clock, color: 'text-amber-600' },
          ].map((stat) => (
            <div
              key={stat.title}
              className="flex items-center gap-2.5 p-2.5 sm:p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-zinc-200 transition-all"
            >
              <div className={`p-1.5 bg-white rounded-md ${stat.color}`}>
                <stat.icon size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base sm:text-lg font-bold text-zinc-900">{stat.value}</span>
                  <span className="text-[10px] font-medium text-green-600">{stat.trend}</span>
                </div>
                <p className="text-[10px] text-zinc-500 truncate">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Recent Activity - Takes 2 cols */}
          <div className="lg:col-span-2 bg-zinc-50 rounded-lg border border-zinc-100">
            <div className="px-3 py-2 border-b border-zinc-100 flex items-center justify-between">
              <h2 className="font-medium text-zinc-900 text-xs">Recent Activity</h2>
              <button className="text-[10px] text-zinc-500 hover:text-zinc-700">View all →</button>
            </div>
            <div className="divide-y divide-zinc-100">
              {[
                { title: 'Project Alpha Review', time: '2h', status: 'done' },
                { title: 'Client Meeting Prep', time: '4h', status: 'pending' },
                { title: 'Code Review', time: '6h', status: 'review' },
                { title: 'Team Standup', time: '1d', status: 'done' },
                { title: 'Deploy v2.1', time: '2d', status: 'done' },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between px-3 py-2 hover:bg-white transition-colors group">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`w-1 h-1 rounded-full ${
                      item.status === 'done' ? 'bg-green-400' : item.status === 'pending' ? 'bg-amber-400' : 'bg-blue-400'
                    }`} />
                    <span className="text-xs text-zinc-700 truncate">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-400">{item.time}</span>
                    <MoreHorizontal size={12} className="text-zinc-300 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions - 1 col */}
          <div className="space-y-2 sm:space-y-3">
            <button className="w-full flex items-center gap-2.5 p-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors group">
              <Plus size={14} className="group-hover:rotate-90 transition-transform" />
              <div className="text-left">
                <p className="text-xs font-medium">New Project</p>
                <p className="text-[10px] text-zinc-400">Create & invite team</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-2.5 p-3 bg-zinc-50 border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors">
              <Calendar size={14} className="text-zinc-500" />
              <div className="text-left">
                <p className="text-xs font-medium text-zinc-900">Schedule</p>
                <p className="text-[10px] text-zinc-500">Book a meeting</p>
              </div>
            </button>
            
            {/* Mini stats */}
            <div className="p-3 bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-lg border border-zinc-200">
              <p className="text-[10px] text-zinc-500 mb-1">This week</p>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xl font-bold text-zinc-900">89%</span>
                  <p className="text-[10px] text-green-600">+12% from last</p>
                </div>
                <div className="flex items-end gap-0.5 h-8">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <div key={i} className="w-1.5 bg-zinc-900 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}