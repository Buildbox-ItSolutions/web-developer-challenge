import styled, { css } from 'styled-components';
import Card from '../Card';

export const Container = styled(Card)`
    display: flex;
    padding-top: 56px;

    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0px;
    }

    > img {
        border-radius: 36px;

        align-self: flex-start;
    }

    > button {
        position: absolute;
        top: 12px;
        right: 12px;

        display: flex;
        background: transparent;
    }
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 32px;

    max-width: 100%;
    overflow-wrap: break-all;
    white-space: normal;

    > p {
        margin-bottom: 24px;
        ${({ theme }) => css`
            color: ${theme['gray-200']};
        `}
        line-height: 1.25;
    }

    > strong {
        font-size: 12px;
        font-weight: 500;
        ${({ theme }) => css`
            color: ${theme['gray-400']};
        `}
    }

    > span {
        margin-bottom: 2px;
        font-size: 14px;
    }
`;
