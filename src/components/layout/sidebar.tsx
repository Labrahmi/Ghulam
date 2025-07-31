import React from 'react';
import Link from 'next/link';
import {
    Home,
    FolderOpen,
    Layers3,
    Settings,
    Info,
    ChevronRight,
    LucideIcon,
} from 'lucide-react';

interface SideItemProps {
    isCurrent: boolean,
    text: string,
    link: string,
    icon: LucideIcon
}

const SideItem = ({ isCurrent, text, link, icon: Icon }: SideItemProps) => {
    const className = `group transition-all duration-200 rounded-2xl p-3 px-4 flex justify-between items-center cursor-pointer
    ${isCurrent
            ? "bg-zinc-900 text-white shadow-lg scale-[1.02]"
            : "hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900"
        }`

    return (
        <Link href={link} className={className}>
            <div className="flex items-center gap-3">
                <Icon size={18} className={`${isCurrent ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-600'}`} />
                <span className="font-medium text-sm">{text}</span>
            </div>
            {isCurrent && (
                <ChevronRight size={14} className="text-zinc-400" />
            )}
        </Link>
    );
}

export default function SideBar() {
    return (
        <nav className="min-w-64 flex-1 md:flex justify-between flex-col gap-2 hidden transition-all">
            <span className="cursor-default">Ghulam</span>
            <div className='flex flex-col gap-3'>
                <SideItem isCurrent={true} text="Dashboard" link="#" icon={Home} />
                <SideItem isCurrent={false} text="Projects" link="#" icon={FolderOpen} />
                <SideItem isCurrent={false} text="Side Projects" link="#" icon={Layers3} />
                <SideItem isCurrent={false} text="Settings" link="#" icon={Settings} />
                <SideItem isCurrent={false} text="APIs" link="#" icon={Info} />
            </div>
            <span className="cursor-default">Github</span>
        </nav>
    );
}