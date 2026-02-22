"use client"

import { z } from "zod";

export const validationPatients = z.object({
    name: z.string({ message: 'Debe ingresar el nombre' }).trim(),
    species: z.string().nonempty('Debe seleccionar una especie'),
    gender: z.string().nonempty('Debe seleccionar el género'),
    race: z.string({ message: 'Debe ingresar la raza' }).trim(),
    age: z.string({ message: 'Debe ingresar la edad' }),
    weight: z.string({message: 'Debe ingresar el peso'}),
    owner: z.string().nonempty('Debe Seleccionar a un propietario'),
});