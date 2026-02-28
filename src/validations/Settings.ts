import { z } from "zod";

const validationSettings = z.object({
    firstName: z.string().trim().min(1, "El nombre es requerido"),
    lastName: z.string().trim().min(1, "El apellido es requerido"),
    email: z.email(),
});

export default validationSettings;