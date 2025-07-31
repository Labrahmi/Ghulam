'use client';
import React, { useState } from 'react';
import {
    FolderOpen,
    Search,
    Bell,
    User,
    TrendingUp,
    Clock,
    MoreHorizontal,
    LucideIcon
} from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    trend: number;
    icon: LucideIcon;
}

const StatCard = ({ title, value, trend, icon: Icon }: StatCardProps) => {
    return (
        <div className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-zinc-200 transition-all duration-200 group hover:shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-zinc-50 rounded-xl group-hover:bg-zinc-100 transition-colors">
                    <Icon size={20} className="text-zinc-600" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +{trend}%
                </span>
            </div>
            <div className="space-y-1">
                <h3 className="text-2xl font-bold text-zinc-900">{value}</h3>
                <p className="text-sm text-zinc-500">{title}</p>
            </div>
        </div>
    );
}

interface RecentItemProps {
    title: string;
    subtitle: string;
    time: string;
    status: 'completed' | 'pending' | 'review';
}

const RecentItem = ({ title, subtitle, time, status }: RecentItemProps) => {
    const statusColors = {
        completed: 'bg-green-100 text-green-700',
        pending: 'bg-yellow-100 text-yellow-700',
        review: 'bg-blue-100 text-blue-700'
    };

    return (
        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-zinc-50 transition-colors group">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zinc-300 rounded-full group-hover:bg-zinc-400 transition-colors"></div>
                <div>
                    <h4 className="font-medium text-zinc-900 text-sm">{title}</h4>
                    <p className="text-xs text-zinc-500">{subtitle}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[status]}`}>
                    {status}
                </span>
                <span className="text-xs text-zinc-400">{time}</span>
                <MoreHorizontal size={14} className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
}


const App = () => {
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <div>
            <div className="h-full flex flex-col">
                {/* Header */}
                <header className="p-8 pb-6 border-b border-zinc-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-zinc-900 mb-1">Dashboard</h1>
                            <p className="text-zinc-500 text-sm">Welcome back, here s what s happening</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className={`relative transition-all duration-200 ${searchFocused ? 'w-80' : 'w-64'}`}>
                                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                                <input
                                    type="text"
                                    placeholder="Search projects, tasks..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                />
                            </div>
                            <button className="p-2.5 hover:bg-zinc-50 rounded-xl transition-colors relative">
                                <Bell size={18} className="text-zinc-600" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                            </button>
                            <button className="p-2.5 hover:bg-zinc-50 rounded-xl transition-colors">
                                <User size={18} className="text-zinc-600" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 p-8 space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title="Active Projects" value={12} trend={8.2} icon={FolderOpen} />
                        <StatCard title="Completed Tasks" value={124} trend={23.1} icon={TrendingUp} />
                        <StatCard title="Team Members" value={8} trend={12.5} icon={User} />
                        <StatCard title="This Month" value="47h" trend={5.7} icon={Clock} />
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
                        <div className="p-6 border-b border-zinc-100">
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold text-zinc-900">Recent Activity</h2>
                                <button className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors">View all</button>
                            </div>
                        </div>
                        <div className="divide-y divide-zinc-50">
                            <RecentItem
                                title="Project Alpha Review"
                                subtitle="Design system updates"
                                time="2h ago"
                                status="completed"
                            />
                            <RecentItem
                                title="Client Meeting Prep"
                                subtitle="Q3 roadmap discussion"
                                time="4h ago"
                                status="pending"
                            />
                            <RecentItem
                                title="Code Review"
                                subtitle="Authentication module"
                                time="6h ago"
                                status="review"
                            />
                            <RecentItem
                                title="Team Standup"
                                subtitle="Weekly sync meeting"
                                time="1d ago"
                                status="completed"
                            />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 text-white">
                            <h3 className="font-semibold mb-2">Start New Project</h3>
                            <p className="text-zinc-300 text-sm mb-4">Create a new project and invite your team</p>
                            <button className="bg-white text-zinc-900 px-4 py-2 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-colors">
                                Get Started
                            </button>
                        </div>
                        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
                            <h3 className="font-semibold mb-2 text-zinc-900">Schedule Meeting</h3>
                            <p className="text-zinc-500 text-sm mb-4">Book time with your team or clients</p>
                            <button className="bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">
                                Open Calendar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;