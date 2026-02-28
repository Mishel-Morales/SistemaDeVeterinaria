import { ChartBarMultiple } from "@/components/ChartBarMultiple";
import { ChartPieDonutText } from "@/components/ChartPieDonutText";
import { CalendarDays, PawPrint, Stethoscope, UsersRound } from "lucide-react";

const Dashboard = () => {
    const dataCard = [
        {
            title: 'Pacientes Activos',
            icon:
                <div className="rounded-lg bg-cyan-500/25 p-3 flex items-center text-cyan-600">
                    <PawPrint />
                </div>,
            titleFooter: 'vs mes anterior'
        },
        {
            title: 'Citas Hoy',
            icon:
                <div className="rounded-lg bg-orange-500/25 p-3 flex items-center">
                    <CalendarDays color="orange" />
                </div>,
            titleFooter: 'vs mes anterior'
        },
        {
            title: 'Consultas Mes',
            icon:
                <div className="rounded-lg bg-sky-600/25 text-sky-600 p-3 flex items-center">
                    <Stethoscope />
                </div>,
            titleFooter: 'vs mes anterior'
        },
        {
            title: 'Propietarios',
            icon:
                <div className="rounded-lg bg-rose-300/25 p-3 flex items-center text-rose-500">
                    <UsersRound />
                </div>,
            titleFooter: 'vs mes anterior'
        }
    ];

    return (
        <div className="p-8">
            <div className="rounded-lg bg-cyan-500 text-white p-5">
                <p className="text-2xl font-bold">Buenos días, Dr. Vargas</p>
                <p>Tiene 18 citas programadas para hoy y 3 consultas pendientes de seguimiento.</p>
            </div>
            <div className="flex justify-between gap-4 mt-4">
                {
                    dataCard.map((d) =>
                        <div className="flex justify-between border rounded-lg p-6 w-full">
                            <div>
                                <p>{d.title}</p>
                                <p>10</p>
                            </div>
                            {d.icon}
                        </div>
                    )
                }
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="w-full col-span-2">
                    <ChartBarMultiple />
                </div>
                <div className="w-full">
                    <ChartPieDonutText />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;