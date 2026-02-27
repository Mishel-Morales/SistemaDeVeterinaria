import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { cita } from "@/types/citas/citasTypes";
import { Slice, Stethoscope, Syringe } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
    id: number;
};

export function AccordionDemo({ id }: Props) {
    const data = [
        { id: 1, id_pet: 3, date: "2026-02-08", time: "09:00", pet: "Max", species: "Perro", owner: "Carlos Mendez", reason: "Vacunación", vet: "Dr. Vargas", status: "confirmada", description: "Vacuna Rabia Anual" },
        { id: 2, id_pet: 2, date: "2026-02-08", time: "09:30", pet: "Luna", species: "Gato", owner: "Carlos Pérez", reason: "Revisión general", vet: "Dra. Martinez", status: "en-curso", description: "Control Semestral" },
        { id: 3, id_pet: 1, date: "2026-02-08", time: "10:15", pet: "Scott", species: "Perro", owner: "Mishel Mejia", reason: "Problema dermatologico", vet: "Dr. Vargas", status: "confirmada", description: "dfsfs" },
        { id: 4, id_pet: 4, date: "2026-02-08", time: "11:00", pet: "Milo", species: "Gato", owner: "Laura Garcia", reason: "Cirugia Menor", vet: "Dra. Martinez", status: "pendiente", description: "Esterilizacion" },
        { id: 5, id_pet: 1, date: "2026-05-12", time: "14:00", pet: "Scott", species: "Perro", owner: "Mishel Mejia", reason: "Cirugia Menor", vet: "Dra. Martinez", status: "pendiente", description: "Esterilizacion" },
    ];
    const [dataSelect, setDataSelect] = useState<cita[] | []>([]);

    useEffect(() => {
        const d = data.filter((d) => d.id_pet === id);
        setDataSelect(d);
    }, [id]);

    return (
        <div className="flex justify-center">
            <Accordion
                type="single"
                collapsible
                defaultValue="shipping"
                className="max-w-2xl w-full"
            >
                {
                    dataSelect.map((item, index) =>
                        <AccordionItem key={index} value={item.reason}>
                            <AccordionTrigger>
                                <span className="rounded-full p-2 bg-cyan-300/25 text-cyan-300">
                                    {
                                        item.description.includes('Vacuna') && <Syringe /> ||
                                        item.reason.includes('Cirugia') && <Slice /> ||
                                        <Stethoscope />
                                    }
                                </span>
                                {item.reason}
                            </AccordionTrigger>
                            <AccordionContent className="ms-15">
                                <div className="mb-2">
                                    <span className="text-muted-foreground me-3">{item.date}</span>
                                    <span className="text-muted-foreground">{item.vet}</span>
                                </div>
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    )
                }
            </Accordion>
        </div>
    )
};