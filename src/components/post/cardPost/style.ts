import styled from "styled-components";

export const TagCard = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: var(--color-black-2);
    border: solid 1px var(--color-grey-5);
    border-radius: 3px;

    .options-post {       
        display: flex;
        justify-content: end;
    }

    .options-post button {
        background-color: transparent;
        margin-top: 10px;
    }

    .content-post {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .picture {
        width: 88px;
        height: 88px;
        border-radius: 36px;
    }

    .picture-default {
        width: 88px;
        height: 88px;
        border-radius: 36px;
        display: flex;
        justify-content: center;
        border: solid 1px var(--color-grey-2);
        align-items: center;
    }

    .content-post p {
        text-align: center;
        font-size: var(--font-large);
        color: var(--color-grey-1);
        margin-top: 24px;
        margin-bottom: 20px;
        word-break: break-all;
    }

    .profile-post span {
        font-size: var(--font-small);
        color: var(--color-grey-2);
    }

    .profile-post p {
        font-size: var(--font-medium);
        color: var(--color-grey-3);
        margin-bottom: 5px;
    }

    @media (min-width: 515px) {
        padding-left: 24px;
        padding-right: 12px;

        .content-post {
            flex-direction: row;
            gap: 32px;
            margin-top: 18px;
            align-items: start;
        }
        .content-post p {
            max-width: 320px;
            max-height: 200px;
            margin-top: 0px;
            text-align: start;
        }

        .profile-post {
            margin-left: 120px;
            margin-bottom: 32px;
        }

    }

`
