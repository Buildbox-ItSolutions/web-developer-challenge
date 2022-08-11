import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const TextFieldStyled = styled(TextField)`
    background: #494949;
    border-radius: 8px;

    & label{
        color: #9f9f9f;
    }

    & div {
        border-radius: 8px;

        & textarea{
            color: #9f9f9f;
        }
        & input{
            color: #9f9f9f;
        }
    }
`

export const ButtonOutlinedStyled = styled(Button)`
    background: #5f5f5f;
    border-radius: 8px;
    color: #313131;
    font-size: 14px;
    text-transform: capitalize;
    padding: 12px 24px;
`

export const ButtonTextStyled = styled(Button)`
    border-radius: 8px;
    color: #5f5f5f;
    font-size: 14px;
    text-transform: capitalize;
    text-decoration: underline;
    padding: 12px 24px;
`

export const Container = styled(Grid)`
    margin-top: 40px;
`

export const CardContainer = styled.div`
    border-radius: 3px;
    padding: 24px;
    border: solid 1px #3b3b3b;
    background: #313131;
    text-align: center;
`

export const InputImage = styled.input`
    margin-bottom: 10px;
`