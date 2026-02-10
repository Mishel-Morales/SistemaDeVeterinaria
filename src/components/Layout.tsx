import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <SidebarProvider className="bg-red-500">
            <div className="flex min-h-screen">
                <AppSidebar />
                <SidebarInset>
                    <main >
                        <SidebarTrigger />

                        <Outlet />
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
};