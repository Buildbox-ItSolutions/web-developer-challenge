import { z } from "zod";

export const postSchema = z.object({
  name: z
    .string({ required_error: "Por favor informe um nome válido" })
    .min(3, { message: "Mínimo de 3 caracteres" }),
  messagePost: z
    .string({ required_error: "Informe uma mensagem entre 10 e 300 caracteres" })
    .min(10, { message: "Mínimo de 10 caracteres" })
    .max(300, { message: "Límite de 300 caracteres atingido" }),
});

export type PostType = z.infer<typeof postSchema>;
