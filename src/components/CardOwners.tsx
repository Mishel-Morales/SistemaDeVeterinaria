import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Mails, MapPin, Phone, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const CardOwners = (props: any) => {
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
            <Card className="w-full max-w-sm hover:not-focus:bg-gray-200/25">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-cyan-300/25 text-cyan-300 ">
                                MM
                            </AvatarFallback>
                        </Avatar>
                        <span className="text-sm mx-2">
                            Mishel Morales
                        </span>
                        <div className={data.status == 'pendiente' && 'bg-red-500 rounded-xl px-2 text-sm font-normal' || data.status == 'confirmada' && 'bg-lime-300 rounded-xl p-1 text-sm font-normal'}>
                            {data.status}
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col text-sm text-light">
                    <p className="flex m-1">
                        <Phone className="me-3" />+502 3952 5421
                    </p>
                    <p className="flex m-1">
                        <Mails className="me-3" />  usuario2026@gmail.com
                    </p>
                    <p className="flex m-1">
                        <MapPin className="me-3" /> Tecpán, zona 1
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between border-t-2 pt-3">
                    <p className="rounded-xl px-3 text-sm bg-gray-100">Luna</p>
                    <p>3 visitas</p>
                </CardFooter>
            </Card>
        ))
    )
};

export default CardOwners;