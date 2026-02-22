"use client"

import type { RootState } from "@/app/store";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { patients } from "@/types/patients/listPatients";
import { Bird, Cat, Dog, Rabbit, RotateCw, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertDialogDestructive } from "./AlertDialogDestructive";
import { Button } from "./ui/button";
import { setModal, setPatientsList, setSelectModal } from "@/features/patients/slice";

type typeProps = {
    title: string,
};

const TablePatients = (props: typeProps) => {
    const { data } = useSelector((state: RootState) => state.PatientsSlice);
    const { title } = props;
    const titles = ['Paciente', 'Raza', 'Edad / Peso', 'Propietario', 'Ultima visita', 'Estado', 'Acciones'];
    const [mostrar, setMostrar] = useState<patients[] | []>(data.patientsList);
    const dispatch = useDispatch();

    const information = () => {

        if (title != 'Todos') {
            const filtro = data.patientsList.filter((datos: patients) => datos.species == title.slice(0, -1));
            setMostrar(filtro);
        } else {
            setMostrar(data.patientsList);
        };

    };

    const deletePatient = (id: number) => {

        const deleteP = data.patientsList.filter((patient) => patient.id != id);
        dispatch(setPatientsList(deleteP));
    };

    const updatePatient = (id: number) => {
        const patient = data.patientsList.find((p) => p.id === id);

        const select = patient && {
            id: patient.id,
            name: patient.name,
            species: patient.species,
            gender: patient.gender,
            race: patient.race,
            age: patient.age,
            weight: patient.weight,
            owner: patient.owner
        };

        dispatch(setSelectModal(select));
        dispatch(setModal(true));
    };

    useEffect(() => {
        information();
    }, [data.patientsList, title]);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {
                        titles.map((title, key) => <TableHead key={key} className="w-[100px] text-base text-muted-foreground">{title}</TableHead>)
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    mostrar.length == 0 ? (
                        <TableRow>
                            <TableCell className="flex items-center">
                                No hay pacientes
                            </TableCell>
                        </TableRow>
                    ) : (
                        mostrar.map((datos, index) => (
                            <TableRow key={index}>
                                <TableCell className="flex items-center">
                                    <div className="p-1 border-1 rounded-lg me-3">
                                        {
                                            datos.species == 'Perro' && <Dog className="text-cyan-500" /> ||
                                            datos.species == 'Gato' && <Cat className="text-cyan-500" /> ||
                                            datos.species == 'Ave' && <Bird className="text-cyan-500" /> ||
                                            datos.species == 'Conejo' && <Rabbit className="text-cyan-500" />
                                        }
                                    </div>
                                    <div>
                                        {datos.name}
                                        <p className="text-muted-foreground">{datos.species} - {datos.gender}</p>
                                    </div>
                                </TableCell>
                                <TableCell>{datos.race}</TableCell>
                                <TableCell>{datos.age} años / {datos.weight} kg</TableCell>
                                <TableCell>
                                    {datos.owner}
                                    <p className="text-muted-foreground">+502 3598 9536</p>
                                </TableCell>
                                <TableCell>{datos.lastVisit}</TableCell>
                                <TableCell>{datos.status}</TableCell>
                                <TableCell className="flex gap-4">
                                    <AlertDialogDestructive
                                        title={datos.name}
                                        onClick={() => deletePatient(datos.id)}
                                    >
                                        <Button variant="ghost">
                                            <Trash2 color="red" />
                                        </Button>
                                    </AlertDialogDestructive>
                                    <Button onClick={() => updatePatient(datos.id)} variant="ghost">
                                        <RotateCw color="green" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )
                }
            </TableBody>
        </Table>
    )
};

export default TablePatients;