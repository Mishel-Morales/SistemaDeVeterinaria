"use client"

import { z } from "zod";

export const validationLogin = z.object({
    email: z.email({message: 'Correo Inválido'}),
    password: z.string().min(8, 'La contraseña debe al menos ser de 8'),
});