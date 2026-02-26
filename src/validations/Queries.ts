"use client"

import { z } from "zod";

export const validationQueries = z.object({
    temperature: z.string({ message: 'Debe ingresar la temperatura' }).trim(),
    weight: z.string({message: 'Debe ingresar el peso'}).trim(),
    fCardiac: z.string({message: 'Debe ingresar la frecuencia cardiaca'}),
    diagnosis: z.string().max(150, "El diagnostico solo puede tener como máximo 150 caracteres."),
    treatment: z.string().max(150, "El tratamiento solo puede tener como máximo 150 caracteres."),
    note: z.string().max(100, "La nota solo puede tener como máximo 100 caracteres."),
});