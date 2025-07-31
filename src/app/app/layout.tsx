import SideBar from "@/components/layout/sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="p-8 min-h-screen flex gap-8 lg:max-w-7xl xl:max-w-[120rem] mx-auto">
            <SideBar />
            <div className="w-full rounded-3xl overflow-hidden bg-white border border-zinc-200">
                {children}
            </div>
        </main>
    );
}
