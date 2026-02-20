import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock4, FileSpreadsheet, HeartPulse, Stethoscope } from "lucide-react";
import { useState } from "react";

const Queries = () => {
    const info = [
        {
            title: 'Hoy',
            total: 5,
            icon: <Stethoscope />
        },
        {
            title: 'En Curso',
            total: 2,
            icon: <Clock4 />
        },
        {
            title: 'En Espera',
            total: 1,
            icon: <FileSpreadsheet />
        },
        {
            title: 'Completadas',
            total: 2,
            icon: <HeartPulse />
        }
    ];
    const dataQueries = [
        { id: 1, date: "2026-02-08", time: "09:00", pet: "Max", species: "Perro", owner: "Carlos Mendez", reason: "Vacunacion", vet: "Dr. Vargas", status: "confirmada", race: "Bulldog" },
        { id: 2, date: "2026-02-08", time: "09:30", pet: "Luna", species: "Gato", owner: "Ana Torres", reason: "Revision general", vet: "Dra. Martinez", status: "en-curso", race: "Siames" },
        { id: 3, date: "2026-02-08", time: "10:15", pet: "Rocky", species: "Perro", owner: "Miguel Ruiz", reason: "Problema dermatologico", vet: "Dr. Vargas", status: "confirmada", race: "Chihuahua" },
        { id: 4, date: "2026-02-08", time: "11:00", pet: "Milo", species: "Gato", owner: "Laura Garcia", reason: "Cirugia Menor", vet: "Dra. Martinez", status: "pendiente", race: "Pelon" },
        { id: 5, date: "2026-02-08", time: "11:45", pet: "Nina", species: "Perro", owner: "Pedro Sanchez", reason: "Control post-operatorio", vet: "Dr. Vargas", status: "confirmada", race: "Dalmata" }
    ];

    return (
        <div className="p-8">
            <div className="mb-5">
                <h1 className="font-display text-2xl font-bold tracking-tight">Consultas</h1>
                <p className="text-sm text-muted-foreground">Registros de Consultas Médicas y Diagnosticos</p>
            </div>
            <div className="flex gap-3">
                {
                    info.map((content, index) =>
                        <div className="border rounded-xl p-3 w-full flex">
                            <div className="border rounded-xl bg-sky-500 flex p-2">
                                {content.icon}
                            </div>
                            <div>
                                <p>
                                    {content.title}
                                </p>
                                <p>
                                    {content.total}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="border rounded-xl w-full p-4">
                    <p>Consultas del Día</p>
                    <div>
                        {
                            dataQueries.map((dataQ) =>
                                <div className="my-5 flex">
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="bg-cyan-300/25 text-cyan-300 ">
                                            MM
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ms-2">
                                        {dataQ.pet}
                                        <span className="text-muted-foreground text-sm ms-2">
                                            {dataQ.species}
                                        </span>
                                        <p className="text-muted-foreground text-sm font-light">
                                            {dataQ.reason} - {dataQ.time}
                                        </p>
                                    </div>
                                    <div className="">
                                        <div className="border rounded-xl col-start-2">
                                            {dataQ.status}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="border rounded-xl w-full col-span-2"></div>
            </div>
        </div>
    )
};

export default Queries;