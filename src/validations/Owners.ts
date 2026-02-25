"use client"

import { z } from "zod";

export const validationOwners = z.object({
    name: z.string({ message: 'Debe ingresar el nombre' }).trim(),
    phone: z.string({ message: 'Debe ingresar la raza' }).trim(),
    email: z.string({ message: 'Debe ingresar la edad' }).trim(),
    address: z.string({message: 'Debe ingresar una dirección'}).trim(),
});