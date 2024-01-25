import React from 'react';
import { InputContainer } from './styles';

const Input:React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
    return (
        <InputContainer {...props} />
    );
}

export default Input;