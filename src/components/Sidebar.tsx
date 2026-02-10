import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { PawPrint, Layout, CalendarHeart, Users, ClipboardList, Stethoscope, Settings, LogOut } from "lucide-react"
import { NavLink } from "react-router-dom"

export function AppSidebar() {
    const options = [
        {
            name: 'Dashboard',
            route: '/dashboard',
            icon: ClipboardList
        },
        {
            name: 'Pacientes',
            route: '/pacientes',
            icon: PawPrint
        },
        {
            name: 'Citas',
            route: '/citas',
            icon: CalendarHeart
        },
        {
            name: 'Propietarios',
            route: '/propietarios',
            icon: Users
        },
        {
            name: 'Consultas',
            route: '/consultas',
            icon: Stethoscope
        },
        {
            name: 'Historial',
            route: '/historial',
            icon: ClipboardList
        }
    ];

    return (
        <Sidebar className="bg-cyan-500">
            <SidebarHeader>
                <PawPrint />
                <p className="font-semibold">VetAle</p>
                <p className="text-sm text-muted-foreground">Clínica Veterinaria</p>
            </SidebarHeader>

            <SidebarContent>
                <hr />
                <p className="text-sm text-muted-foreground">General</p>
                <SidebarGroup>
                    {
                        options.map((data, index) => (
                            <NavLink key={index} to={data.route} className={({ isActive }) => isActive ? 'flex p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-blue-700 dark:text-slate-500' : 'flex p-2 hover:bg-gray-100 rounded-xl transition ease-in dark:hover:bg-white/10'} >
                                <data.icon />
                                <p>{data.name}</p>
                            </NavLink>
                        ))
                    }
                </SidebarGroup>
                <SidebarGroup>
                    <NavLink to='/configuracion' className={({ isActive }) => isActive ? 'flex p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-blue-700 dark:text-slate-500' : 'flex p-2 hover:bg-gray-100 rounded-xl transition ease-in dark:hover:bg-white/10'} >
                        <Settings />
                        <p>Configuración</p>
                    </NavLink>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <p>Cerrar Sesión</p>
                <LogOut />
            </SidebarFooter>
        </Sidebar>
    )
};