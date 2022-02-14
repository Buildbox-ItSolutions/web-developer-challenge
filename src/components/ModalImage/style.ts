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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 8px;

        &__wrap {
            height: 80%;
            width: 80%;
            border-radius: 10px;
            overflow: hidden;
            background-color: ${props => props.theme.colors.secondaryAlt};
        }
    
        &__image {
            height: 50px;
            width: 50px;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`;