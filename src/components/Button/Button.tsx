import React from 'react';
import { ButtonPrimary, ButtonUnderlined } from './styles';

const Button:React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return props?.className &&  props?.className === 'underlined' ? (
        <ButtonUnderlined {...props}>
        </ButtonUnderlined>
    ) : (
        <ButtonPrimary {...props} >
        </ButtonPrimary>
    );
};

export default Button;