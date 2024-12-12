import styled, { css } from 'styled-components';

interface IDropzone {
    isDragActive?: boolean;
    isDragReject?: boolean;
}

export const Dropzone = styled.div<IDropzone>`
    cursor: pointer;
    transition: height 0.2s ease;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

interface IContainerProps {
    error: string | undefined;
}

export const DropzoneContainer = styled.div<IContainerProps>`
    ${({ theme }) => css`
        border: 1px solid ${theme['gray-500']};
    `}
    ${({ error }) =>
        error &&
        css`
            border: 1px solid red;
        `}

    width: 88px;
    height: 88px;
    border-radius: 36px;

    position: relative;

    > img {
        width: 88px;
        height: 88px;

        border-radius: 36px;
    }
`;

export const ClearImage = styled.button`
    position: absolute;
    display: flex;

    background: transparent;
    top: 50%;
    transform: translateY(-50%) translateX(100%);
    right: -16px;
`;

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`;
