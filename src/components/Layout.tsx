import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export default function Layout() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-14 items-center gap-3 border-b bg-card px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" />
                        <h1 className="text-base font-semibold text-card-foreground">Separator</h1>
                        <div className="ml-auto flex items-center gap-3">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Buscar..."
                                    className="h-8 w-56 pl-8 text-sm"
                                />
                            </div>
                            <Button variant="ghost" size="icon" className="relative h-8 w-8">
                                <Bell className="h-4 w-4" />
                                <Badge className="absolute -right-1 -top-1 h-4 w-4 items-center justify-center rounded-full p-0 text-[10px]">
                                    3
                                </Badge>
                            </Button>
                            <Separator orientation="vertical" />
                            <div className="flex items-center gap-2">
                                <Avatar className="h-7 w-7">
                                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                        DV
                                    </AvatarFallback>
                                </Avatar>
                                <span className="hidden text-sm font-medium md:block">Dr. Vargas</span>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1">
                        <Outlet />
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
};