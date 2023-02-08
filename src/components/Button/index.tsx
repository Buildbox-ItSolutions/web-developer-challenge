import React from 'react'
import styled from 'styled-components'

interface Props {
    background?: boolean
    children?: any
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = styled.button<Props>`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    text-decoration: ${(props) => (props.background ? 'none' : 'underline')};
    background-color: ${(props) => (props.background ? 'green' : 'transparent')};
    color: ${(props) => (props.background ? 'white' : '#a3a3a3')};
    cursor: pointer;
    float: right;
`

const ButtonPattern: React.FC<Props> = ({ background = false, children, type, onClick }) => {
    return (
        <Button type={type} onClick={onClick} background={background}>
            {children}
        </Button>
    )
}

export default ButtonPattern
