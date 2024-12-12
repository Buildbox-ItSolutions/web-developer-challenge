import styled, { css } from 'styled-components';

interface IContainerProps {
    margin: string;
    error: string | undefined;
}

export const Container = styled.span<IContainerProps>`
    ${({ margin }) => css`
        margin: ${margin};
    `}
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;

    ${({ error }) =>
        error &&
        css`
            border: 2px solid red;
        `}

    input,
    textarea {
        ${({ theme }) => css`
            background-color: ${theme['gray-500']};
            color: ${theme['gray-100']};
            width: 100%;
            padding: 12px 16px;
            resize: none;
            font-size: 14px;
            flex-grow: 1;
            line-height: 1.29;
        `}
    }
`;
