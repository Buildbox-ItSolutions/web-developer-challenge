import styled from "styled-components";

export const TagFeed = styled.section`
    width: 98%;
    margin: 0 auto;

    h2 {
        font-size: var(--font-medium);
        color: var(--color-grey-3);
        margin-bottom: 8px;
    }

    .default-card {
        margin-top: 50px;
        width: 100%;
        text-align: center;
        font-size: var(--font-medium);
        color: var(--color-grey-3);
    }

    @media (min-width: 515px) {
        width: 100%;
    }
`