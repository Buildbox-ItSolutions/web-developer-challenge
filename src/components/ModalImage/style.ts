import styled from "styled-components";

export const ModalWrap = styled.div`
    background-color: begie;
    cursor: pointer;
    /* height: 88px;
    width: 88px;
    border-radius: 36px;
    overflow: hidden; */

    .modal-backdrop {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        height: 50%;
        width: 80%;
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 8px;
    }

    .modal-img {
        height: 50px;
        width: 50px;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`;