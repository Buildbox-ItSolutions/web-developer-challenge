import { z } from "zod";

export const postSchema = z.object({
  postId: z.number().optional(),
  author: z
    .string({ required_error: "Por favor informe um nome válido" })
    .min(3, { message: "Nome precisa ter no mínimo 3 caracteres" }),
  messagePost: z
    .string({ required_error: "Informe uma mensagem entre 10 e 300 caracteres" })
    .min(10, { message: " mensagem precisa ter no mínimo 10 caracteres" })
    .max(300, { message: "Límite de 300 caracteres atingido" }),
  imgUrl: z.string().optional(),
});

export type PostType = z.infer<typeof postSchema>;
