import SideBar from "@/components/layout/sidebar";
import { appConfig } from "@/config/app.config";
import { cn } from "@/lib/styles";

/**
 * App layout with sidebar
 * Wraps all authenticated pages with a consistent layout
 */
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={cn(
            "p-8 min-h-screen flex gap-8 mx-auto",
            appConfig.ui.maxWidth
        )}>
            <SideBar />
            <div className="w-full rounded-3xl overflow-hidden bg-white border border-zinc-200">
                {children}
            </div>
        </main>
    );
}
