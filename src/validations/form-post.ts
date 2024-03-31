interface Form {
  [key: string]: string | string[]
}

interface FormValidate {
  [key: string]: string
}

export function isNotValid(form: Form, formValidate: FormValidate, preview: any): boolean {
  const inputs = ['name', 'description']

  const invalid = (label: string) =>
    !Object.keys(form).includes(label) || (form[label] as string).length === 0

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0

  return (
    inputs.some((item) => invalid(item)) || validations || preview?.length === 0
  )
}

export function fieldValidate(name: string, value: string): string {
  let message: string = ''
  switch (name) {
    case 'name':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 5) {
        message += 'Acima de 5 caracteres!'
      } else if (value.length >= 20) {
        message += 'Abaixo de 20 caracteres!'
      }
      break

    case 'description':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 20) {
        message += 'Acima de 20 caracteres!'
      } else if (value.length >= 100) {
        message += 'Abaixo de 100 caracteres!'
      }
      break
  }

  return message
}
