"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Bird, Cat, Dog, Rabbit } from "lucide-react";
import { useEffect, useState } from "react";

const TablePatients = (props: any) => {
    const { title } = props;
    const titles = ['Paciente', 'Raza', 'Edad / Peso', 'Propietario', 'Ultima visita', 'Estado'];
    const info = {
        todos: [
            {
                name: 'Scott',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Pitbull',
                age: 3,
                weight: 28,
                owner: 'Mishel Morales',
                lastVisit: '02-11-2025',
                status: 'Activo'
            },
            {
                name: 'Luna',
                typeOfAnimal: 'Gato',
                gender: 'Hembra',
                race: 'Siames',
                age: 2,
                weight: 4.5,
                owner: 'Carlos Pérez',
                lastVisit: '15-10-2025',
                status: 'En tratamiento'
            },
            {
                name: 'Rocky',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Pastor Alemán',
                age: 5,
                weight: 34,
                owner: 'Andrea Gómez',
                lastVisit: '28-09-2025',
                status: 'Activo'
            },
            {
                name: 'Milo',
                typeOfAnimal: 'Conejo',
                gender: 'Macho',
                race: 'Enano Holandés',
                age: 1,
                weight: 1.8,
                owner: 'Laura Sánchez',
                lastVisit: '01-11-2025',
                status: 'Activo'
            },
            {
                name: 'Kiara',
                typeOfAnimal: 'Ave',
                gender: 'Hembra',
                race: 'Periquito',
                age: 2,
                weight: 0.04,
                owner: 'José Ramírez',
                lastVisit: '20-10-2025',
                status: 'Activo'
            },
            {
                name: 'Max',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Labrador',
                age: 6,
                weight: 30,
                owner: 'Fernanda López',
                lastVisit: '05-10-2025',
                status: 'Inactivo'
            },
            {
                name: 'Nala',
                typeOfAnimal: 'Gato',
                gender: 'Hembra',
                race: 'Persa',
                age: 4,
                weight: 5,
                owner: 'Miguel Torres',
                lastVisit: '18-09-2025',
                status: 'Activo'
            },
            {
                name: 'Coco',
                typeOfAnimal: 'Ave',
                gender: 'Macho',
                race: 'Cacatúa',
                age: 7,
                weight: 0.9,
                owner: 'Paola Mendoza',
                lastVisit: '22-08-2025',
                status: 'Activo'
            },
            {
                name: 'Bruno',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Bulldog',
                age: 4,
                weight: 25,
                owner: 'Ricardo Núñez',
                lastVisit: '12-10-2025',
                status: 'Activo'
            },
            {
                name: 'Bella',
                typeOfAnimal: 'Conejo',
                gender: 'Hembra',
                race: 'Cabeza de León',
                age: 3,
                weight: 2.1,
                owner: 'Daniela Rojas',
                lastVisit: '30-09-2025',
                status: 'Activo'
            }
        ],

        perros: [
            /* mismos datos pero solo perros */
            {
                name: 'Scott',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Pitbull',
                age: 3,
                weight: 28,
                owner: 'Mishel Morales',
                lastVisit: '02-11-2025',
                status: 'Activo'
            },
            {
                name: 'Rocky',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Pastor Alemán',
                age: 5,
                weight: 34,
                owner: 'Andrea Gómez',
                lastVisit: '28-09-2025',
                status: 'Activo'
            },
            {
                name: 'Max',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Labrador',
                age: 6,
                weight: 30,
                owner: 'Fernanda López',
                lastVisit: '05-10-2025',
                status: 'Inactivo'
            },
            {
                name: 'Bruno',
                typeOfAnimal: 'Perro',
                gender: 'Macho',
                race: 'Bulldog',
                age: 4,
                weight: 25,
                owner: 'Ricardo Núñez',
                lastVisit: '12-10-2025',
                status: 'Activo'
            }
        ],

        gatos: [
            {
                name: 'Luna',
                typeOfAnimal: 'Gato',
                gender: 'Hembra',
                race: 'Siames',
                age: 2,
                weight: 4.5,
                owner: 'Carlos Pérez',
                lastVisit: '15-10-2025',
                status: 'En tratamiento'
            },
            {
                name: 'Nala',
                typeOfAnimal: 'Gato',
                gender: 'Hembra',
                race: 'Persa',
                age: 4,
                weight: 5,
                owner: 'Miguel Torres',
                lastVisit: '18-09-2025',
                status: 'Activo'
            }
        ],

        aves: [
            {
                name: 'Kiara',
                typeOfAnimal: 'Ave',
                gender: 'Hembra',
                race: 'Periquito',
                age: 2,
                weight: 0.04,
                owner: 'José Ramírez',
                lastVisit: '20-10-2025',
                status: 'Activo'
            },
            {
                name: 'Coco',
                typeOfAnimal: 'Ave',
                gender: 'Macho',
                race: 'Cacatúa',
                age: 7,
                weight: 0.9,
                owner: 'Paola Mendoza',
                lastVisit: '22-08-2025',
                status: 'Activo'
            }
        ],

        conejos: [
            {
                name: 'Milo',
                typeOfAnimal: 'Conejo',
                gender: 'Macho',
                race: 'Enano Holandés',
                age: 1,
                weight: 1.8,
                owner: 'Laura Sánchez',
                lastVisit: '01-11-2025',
                status: 'Activo'
            },
            {
                name: 'Bella',
                typeOfAnimal: 'Conejo',
                gender: 'Hembra',
                race: 'Cabeza de León',
                age: 3,
                weight: 2.1,
                owner: 'Daniela Rojas',
                lastVisit: '30-09-2025',
                status: 'Activo'
            }
        ]
    };
    const [mostrar, setMostrar] = useState(info.todos);

    const information = () => {
        const cambio = title.toLowerCase();
        setMostrar(info[cambio]);
        console.log(mostrar, ' que guarda mostrar');

    };

    useEffect(() => {
        information();
    }, [])

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
                    mostrar.map((datos, index) => (
                        <TableRow key={index}>
                            <TableCell className="flex items-center">
                                <div className="p-1 border-1 rounded-lg me-3">
                                    {
                                        datos.typeOfAnimal == 'Perro' && <Dog className="text-cyan-500" /> ||
                                        datos.typeOfAnimal == 'Gato' && <Cat className="text-cyan-500" /> ||
                                        datos.typeOfAnimal == 'Ave' && <Bird className="text-cyan-500" /> ||
                                        datos.typeOfAnimal == 'Conejo' && <Rabbit className="text-cyan-500" />
                                    }
                                </div>
                                <div>
                                    {datos.name}
                                    <p className="text-muted-foreground">{datos.typeOfAnimal} - {datos.gender}</p>
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
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default TablePatients