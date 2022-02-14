import styled from "styled-components";

export const ModalWrap = styled.div`
    background-color: begie;
    cursor: pointer;
    /* height: 88px;
    width: 88px;
    border-radius: 36px;
    overflow: hidden; */

    .news-image {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;

        &__wrap {
            height: 88px;
            width: 88px;
            overflow: hidden;
            border-radius: 36px;
            border: solid 1px #3b3b3b;
            margin-right: 1rem;

            img {
                overflow: hidden;
            }
        }

        &__delete-icon {
            height: 100%;
        }

    }

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
            width: 90%;
            overflow-x: scroll;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            border-radius: 10px;
            background-color: ${props => props.theme.colors.secondaryAlt};
        }
    
        &__image {
            height: 70px;
            width: 70px;
            flex: 1 1 auto;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`;