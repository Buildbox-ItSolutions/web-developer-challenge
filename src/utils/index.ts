import * as yup from 'yup';

export const ImagePreviewSchema = () =>
  yup
    .mixed()
    .required('Imagem é obrigatória')
    .test('fileSize', 'Imagem muito grande', (value) => {
      return value && value.size <= 1000000;
    })
    .test('fileFormat', 'Formato inválido', (value) => {
      return value && ['image/jpeg', 'image/png'].includes(value.type);
    });
