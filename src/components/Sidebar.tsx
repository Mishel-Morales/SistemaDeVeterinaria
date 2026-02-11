import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { PawPrint, LayoutDashboard, CalendarHeart, Users, ClipboardList, Stethoscope, Settings, LogOut } from "lucide-react"
import { NavLink } from "react-router-dom"

export function AppSidebar() {
    const options = [
        {
            name: 'Dashboard',
            route: '/dashboard',
            icon: LayoutDashboard
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
        <Sidebar>
            <SidebarHeader>
                <div className="p-2 flex items-center">
                    <div className="rounded-lg p-2 me-3 bg-cyan-500">
                        <PawPrint color="white" />
                    </div>
                    <div>
                        <p className="font-medium text-white">VetAle</p>
                        <p className="text-sm text-white/75">Clínica Veterinaria</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-2">

                <hr />
                <p className="text-sm text-white/75">General</p>
                {
                    options.map((data, index) => (
                        <NavLink key={index} to={data.route} className={({ isActive }) => isActive ? 'flex p-2 rounded-xl bg-gray-100/25' : 'flex p-2 hover:bg-gray-100/25 rounded-xl transition ease-in'} >
                            <data.icon color="white" className="me-2" />
                            <p className="text-white">{data.name}</p>
                        </NavLink>
                    ))
                }
            </SidebarContent>

            <SidebarFooter>
                <hr />
                <NavLink to='/configuracion' className={({ isActive }) => isActive ? 'flex p-2 rounded-xl bg-gray-100/25' : 'flex p-2 hover:bg-gray-100/25 rounded-xl transition ease-in'}>
                    <Settings color="white" className="me-2" />
                    <p className="text-white">Configuración</p>
                </NavLink>
                <hr />
                <NavLink to='/loguout' className={({ isActive }) => isActive ? 'flex p-2 rounded-xl bg-gray-100/25' : 'flex p-2 hover:bg-gray-100/25 rounded-xl transition ease-in'} >
                    <p className="text-white">Cerrar Sesión</p>
                    <LogOut color="white" className="ms-25" />
                </NavLink>
            </SidebarFooter>
        </Sidebar>
    )
};