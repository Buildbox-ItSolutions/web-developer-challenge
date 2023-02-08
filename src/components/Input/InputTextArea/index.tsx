import { Container, ErrorMessage, Label, Textarea } from './styled'

interface InputTextprops {
    label: string
    placeholder: string
    register: any
    required: boolean
    type: string
    name: string
    errors: any
}

function InputTextarea({ errors, label, register, type, name }: InputTextprops) {
    return (
        <Container>
            <Label>{label}</Label>
            <Textarea type={type} name={name} {...register(name)} />
            {errors[name] && errors[name].message && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </Container>
    )
}

export default InputTextarea
