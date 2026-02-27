import type { RootState } from "@/app/store";
import { AccordionDemo } from "@/components/Accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { patients } from "@/types/patients/listPatients";
import { useState } from "react";
import { useSelector } from "react-redux";

const Record = () => {
    const { patientsList } = useSelector((state: RootState) => state.PatientsSlice.data);
    const [patientSelect, setPatientSelect] = useState<number>(0);

    console.log(patientSelect, 'Cambio??????')
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-3">
                <div>
                    <h1 className="font-display text-2xl font-bold tracking-tight">Historial Medico</h1>
                    <p className="text-sm text-muted-foreground">Expedientes medicos completos de cada paciente</p>
                </div>
                <Select onValueChange={(value) => setPatientSelect(Number(value))}>
                    <SelectTrigger className="w-full max-w-75">
                        <SelectValue placeholder="Selecciona a un paciente" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Pacientes</SelectLabel>
                            {
                                patientsList.map((p: patients) =>
                                    <SelectItem key={p.id} value={String(p.id)}>{p.name}</SelectItem>
                                )
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            {
                patientSelect != 0 && (
                    <div className="border rounded-xl w-full col-span-2 p-3">
                        <div>
                            {
                                <div className="my-5 flex justify-center boder rounded-lg p-2">
                                    <div className="flex">
                                        <Avatar className="h-15 w-15">
                                            <AvatarFallback className="bg-cyan-300/25 text-cyan-300 text-xl font-semibold">
                                                MM
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="ms-3 text-xl">
                                            {
                                                patientsList.find((p) => p.id === patientSelect)?.name
                                            }
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground text-sm font-light pe-3">
                                                    {
                                                        patientsList.find((p) => p.id === patientSelect)?.race
                                                    }
                                                </span>
                                                <span className="text-muted-foreground text-sm font-light pe-3">
                                                    {
                                                        patientsList.find((p) => p.id === patientSelect)?.gender
                                                    }
                                                </span>
                                                <span className="text-muted-foreground text-sm font-light pe-3">
                                                    {
                                                        patientsList.find((p) => p.id === patientSelect)?.age
                                                    } años
                                                </span>
                                                <span className="text-muted-foreground text-sm font-light">
                                                    {
                                                        patientsList.find((p) => p.id === patientSelect)?.weight
                                                    } kg
                                                </span>
                                            </div>
                                        </div>
                                        <div className="ms-4">
                                            <p className="text-xl">
                                                {
                                                    patientsList.find((p) => p.id === patientSelect)?.owner
                                                }
                                            </p>
                                            <p className="text-muted-foreground text-sm font-light">Propietario/a</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <hr />
                        <AccordionDemo
                        id={patientSelect}
                        />
                    </div>
                )
            }
        </div>
    )
};

export default Record;

