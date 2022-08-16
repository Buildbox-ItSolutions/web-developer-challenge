import styled, { css } from 'styled-components';

export default styled.div`
    ${({ theme }) => css`
        background: ${theme['gray-800']};
        border: 1px solid ${theme['gray-600']};
    `};

    border-radius: 3px;
    padding: 24px;
    width: 100%;

    position: relative;
`;
