import { ComponentProps } from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary';

interface IContainerProps extends ComponentProps<'button'> {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: css`
        ${({ theme }) => css`
            background: ${theme.primary};
            color: ${theme['gray-100']};
            padding: 12px 24px;
        `}
    `,
    secondary: css`
        ${({ theme }) => css`
            background: transparent;
            color: ${theme['gray-400']};
            text-decoration: underline;
        `}
    `,
};

export const Container = styled.button<IContainerProps>`
    ${({ variant }) => buttonVariants[variant]};

    border-radius: 8px;

    margin-left: 24px;
`;
