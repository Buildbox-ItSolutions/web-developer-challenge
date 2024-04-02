import styled from "styled-components";

export const TagFormPost = styled.section`
    width: 98%;
    height: 353px;
    margin: 41px auto 56px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-black-2);
    border: solid 1px var(--color-grey-5);
    border-radius: 3px;

    .content-picture {
        display: flex;
        align-items: center;
        position: relative;
    }

    .picture {
        width: 88px;
        height: 88px;
        margin: 24px 0px 16px 0px;
        display: flex;
        justify-content: center;
        background-color: transparent;
        border: solid 1px var(--color-grey-2);
        border-radius: 36px;
        align-items: center;
        cursor: pointer;
    }

    .picture-active {
        width: 86px;
        height: 86px;
        border-radius: 36px;
    }

    .trash-icon {
        display: none;
    }

    .trash-icon-active {
        position: absolute;
        left: 100px;
        cursor: pointer;
    }

    .form-add {
        width: 95%;
        margin: 0 auto;

        input {
            width: 100%;
            background-color: var(--color-grey-4);
            border: none;
            color: var(--color-white);
            padding-left: 16px;
            padding-right: 5px;
            border-radius: 8px;
        }

        textarea {
            width: 100%;
            background-color: var(--color-grey-4);
            border: none;
            color: var(--color-white);
            padding-left: 16px;
            padding-right: 5px;
            padding-top: 12px;
            border-radius: 8px;
            resize: none;
        }
    }

    .form-add .form-input-name {
        height: 40px;
        font-size: var(--font-medium);
    }

    .form-add .form-input-name::placeholder {
        color: var(--color-grey-1);
    }

    .form-add .form-input-message {
        height: 80px;
        margin-top: 8px;
        font-size: var(--font-medium);
    }

    .form-add .form-input-message::placeholder {
        color: var(--color-grey-1);
    }

    .form-add .form-button {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 24px;
        margin-top: 32px;
    }

    .form-add .form-button span {
        font-size: var(--font-medium);
        color: var(--color-grey-2);
        border-bottom: solid 1px;
        cursor: pointer;
    }

    .form-add .form-button .send-button {
        width: 98px;
        height: 41px;
        border-radius: 8px;
        background-color: var(--color-grey-2);
        color: var(--color-black-2);
        font-size: var(--font-medium);
    }

    .form-add .form-button .send-button-active {
        width: 98px;
        height: 41px;
        border-radius: 8px;
        background-color: var(--color-green);
        color: var(--color-white);
        font-size: var(--font-medium);
    }

    @media (min-width: 515px) {
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        .form-add {
            width: 100%;
        }
    }

`
