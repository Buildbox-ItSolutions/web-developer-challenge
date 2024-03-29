import { z } from "zod";

export const formSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório!").min(1, "É necessário pelo menos um caracter."),
    message: z.string().nonempty("Mensagem é obrigatória!").min(1, "É necessário pelo menos um caracter."),
});
