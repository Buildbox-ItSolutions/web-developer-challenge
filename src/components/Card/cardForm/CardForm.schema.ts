import {z} from "zod";

export const CardSchema = z.object({
    nome: z.string({message: "Nome é obrigatório"}).min(1, {message: "O nome deve ter no mínimo 1 caracter"}),
    mensagem: z.string({message: "Mensagem é obrigatória"}).min(1, {message: "A mensagem deve ter no mínimo 1 caracter"}),
    imagem: z.string({message: "Imagem é obrigatória"}).min(1, {message: "Voce precisa enviar uma imagem junto"}),
})

export type CardSchemaType = z.infer<typeof CardSchema>
