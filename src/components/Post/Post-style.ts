import styled from 'styled-components';

export const Post = styled.section`
    padding: 15px;
    background-color: var(--bg-section-color);
    border-radius: 5px;
    margin-bottom: 15px;

    .first-section {
        padding-left: 45%;
        display: flex;
        justify-content: space-between;
        align-items: start;

        margin-bottom: 35px;
    }

    .first-section button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .first-section #close-icon {
        font-size: x-large;
    }

    p {
        font-size: small;

        margin: 15px 0;
    }

    #nameAuthor {
        color: var(--light-grey);
        font-weight: 700;
        margin: 0;
    }
`;