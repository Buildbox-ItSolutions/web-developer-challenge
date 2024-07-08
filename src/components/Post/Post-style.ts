import styled from 'styled-components';

export const Post = styled.section`
    padding: 15px;
    background-color: var(--bg-section-color);
    border-radius: 5px;

    .first-section {
        padding-left: 45%;
        display: flex;
        justify-content: space-between;
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