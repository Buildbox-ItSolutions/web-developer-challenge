import styled, { css } from 'styled-components';

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 24px;

    z-index: 1;

    ${({ theme }) => css`
        background-color: ${theme['gray-900']};
    `}
`;
