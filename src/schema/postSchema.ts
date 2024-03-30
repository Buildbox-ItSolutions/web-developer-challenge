import { z } from "zod";



export const postSchema = z.object({
  name: z.string().min(2, "Campo obrigatório."),
  message: z.string().min(1, "Campo obrigatório.")
})