import styled from 'styled-components'

interface InputTextprops {
    label: string
    placeholder: string
    register: any
    required: boolean
    type: string
    name: string
    errors: any
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

const Label = styled.label`
    color: #a3a3a3;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
`

const Input = styled.input`
    border: 1px solid #323232;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 3px;
    width: 100%;
    background-color: #5a5a5a;
    color: #fff;
    max-width: 100%;

    &:focus {
        border-color: #555;
        outline: none;
    }
`

const ErrorMessage = styled.div`
    color: #9d9d9d;
    font-size: 12px;
    margin-top: 4px;
`

function InputText({ errors, label, register, type, name }: InputTextprops) {
    return (
        <Container>
            <Label>{label}</Label>
            <Input type={type} name={name} {...register(name)} />
            {errors[name] && errors[name].message && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </Container>
    )
}

export default InputText
