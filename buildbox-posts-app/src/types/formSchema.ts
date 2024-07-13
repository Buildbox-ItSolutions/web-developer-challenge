import { z } from 'zod';

export const formSchema = z.object({
        name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
        message: z.string().min(10, 'A sua mensagem está muito curta, escreva um pouco mais'),
        picture: z.instanceof(FileList).optional(),
    })