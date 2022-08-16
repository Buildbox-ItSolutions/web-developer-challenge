import React, { ReactNode } from 'react';
import { ButtonVariant, Container } from './styles';

interface IButtonProps {
    variant?: ButtonVariant;
    content: string | ReactNode;
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
    variant = 'primary',
    type = 'button',
    content,
    onClick,
}) => {
    return (
        <Container variant={variant} type={type} onClick={onClick}>
            {content}
        </Container>
    );
};

export default Button;
