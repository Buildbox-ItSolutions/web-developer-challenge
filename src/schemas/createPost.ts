import * as Yup from 'yup';

export const createPostSchema = Yup.object().shape({
    image: Yup.string().nullable().required('A foto é obrigatório'),
    name: Yup.string().required('O nome é obrigatório'),
    message: Yup.string().required('A mensagem é obrigatória'),
});
