import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Search } from "lucide-react";

const CardCitas = (props: any) => {
    const { title, date } = props;
    console.log(title, 'este es title', date, 'Esto es date')

    const data = [
        { id: 1, date: "2026-02-08", time: "09:00", pet: "Max", species: "Perro", owner: "Carlos Mendez", reason: "Vacunacion", vet: "Dr. Vargas", status: "confirmada", description: "Vacuna Rabia Anual" },
        { id: 2, date: "2026-02-08", time: "09:30", pet: "Luna", species: "Gato", owner: "Ana Torres", reason: "Revision general", vet: "Dra. Martinez", status: "en-curso", description: "Control Semestral" },
        { id: 3, date: "2026-02-08", time: "10:15", pet: "Rocky", species: "Perro", owner: "Miguel Ruiz", reason: "Problema dermatologico", vet: "Dr. Vargas", status: "confirmada", description: "dfsfs" },
        { id: 4, date: "2026-02-08", time: "11:00", pet: "Milo", species: "Gato", owner: "Laura Garcia", reason: "Cirugia Menor", vet: "Dra. Martinez", status: "pendiente", description: "Esterilizacion" },
        { id: 5, date: "2026-02-08", time: "11:45", pet: "Nina", species: "Perro", owner: "Pedro Sanchez", reason: "Control post-operatorio", vet: "Dr. Vargas", status: "confirmada", description: "Por cirugia en la pata izquierda" },
        { id: 6, date: "2026-02-08", time: "14:00", pet: "Coco", species: "Perro", owner: "Maria Lopez", reason: "Vacunacion", vet: "Dr. Vargas", status: "pendiente", description: "Vacuna Rabia Anual" },
        { id: 7, date: "2026-02-09", time: "09:00", pet: "Whiskers", species: "Gato", owner: "Jorge Diaz", reason: "Limpieza dental", vet: "Dra. Martinez", status: "confirmada", description: "fsfafsdf" },
        { id: 8, date: "2026-02-09", time: "10:30", pet: "Buddy", species: "Perro", owner: "Sofia Herrera", reason: "Revision de piel", vet: "Dr. Vargas", status: "pendiente", description: "fdfs" },
    ]
    const today = data.filter((a) => a.date === "2026-02-08");
    const tomorrow = data.filter((a) => a.date === "2026-02-09");

    return (
        data.map((data, index) => (
            <Card key={index} className="m-3">
                <CardContent className="pt-0">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="border border-cyan-100/25 rounded-lg bg-cyan-200/25 py-3 px-2 text-sm text-cyan-700 me-3">{data.time}</div>
                            <div>
                                {data.pet}
                                <p className="text-sm">{data.owner}</p>
                            </div>
                        </div>
                        <div>
                            {data.reason}
                            <p className="text-sm text-gray-700/50">{data.vet}</p>
                        </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">{data.description}</div>
                </CardContent>
            </Card >
        ))
    )
};

export default CardCitas;