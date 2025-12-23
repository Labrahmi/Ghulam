import SideBar from "@/components/layout/sidebar";
import { appConfig } from "@/config/app.config";
import { cn } from "@/lib/styles";

/**
 * App layout with sidebar
 * Wraps all authenticated pages with a consistent layout
 * Responsive: sidebar hidden on mobile with toggle
 */
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={cn(
            "p-2 lg:p-4 min-h-screen flex gap-2 lg:gap-4 mx-auto",
            appConfig.ui.maxWidth
        )}>
            <SideBar />
            <div className="w-full rounded-xl lg:rounded-2xl overflow-hidden bg-white border border-zinc-200">
                {children}
            </div>
        </main>
    );
}
