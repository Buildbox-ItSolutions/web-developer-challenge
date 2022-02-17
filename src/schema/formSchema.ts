import * as Yup from 'yup'

export const formValidation = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  message: Yup.string().required('Campo obrigatório')
})
