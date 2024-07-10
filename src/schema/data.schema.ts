import { z } from "zod";

const dataSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
    })
    .min(
      3,
      'Nome deve ter no mínimo 3 caracteres'
    ),
  message: z
    .string(
      {
        required_error: 'Mensagem é obrigatória',
      }
    )
    .min(8,
      'Mensagem deve ter no mínimo 8 caracteres'
    ),
  imgUrl: z.string().trim().min(1, 'Imagem é obrigatória'),
});


export default dataSchema;