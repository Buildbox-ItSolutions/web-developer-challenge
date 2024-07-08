import { z } from "zod";

// ----------------------------------------
// # Schemas
// ----------------------------------------

export const postSchema = z.object({
  id: z.string().uuid(),
  message: z
    .string()
    .min(2, { message: "Campo deve conter no mínimo 2 caracteres" })
    .max(300, { message: "Campo deve conter no máximo 300 caracteres" }),
  author: z
    .string()
    .min(2, { message: "Campo deve conter no mínimo 2 caracteres" })
    .max(60, { message: "Campo deve conter no máximo 60 caracteres" }),
  imageFile: z.instanceof(File, { message: "Insira uma imagem para prosseguir" }).nullable(),
});

// ----------------------------------------
// # Types
// ----------------------------------------

export type PostType = z.infer<typeof postSchema>;
