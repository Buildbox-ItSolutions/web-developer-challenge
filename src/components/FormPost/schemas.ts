import {z} from "zod"
import imgDefault from "../../assets/image@3x.png"
export const postCreateSchema = z.object({
    author: z.string().min(3,"Você deve informar o seu nome com no mínimo 3 caracteres"),
    content: z.string().min(3, "O conteúdo deve possuir ao menos 3 caracteres"),
    img: z.string().optional().default(imgDefault)
})

export type iPostCreate = z.infer<typeof postCreateSchema>
