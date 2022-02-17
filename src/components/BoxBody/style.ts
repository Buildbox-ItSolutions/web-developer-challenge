import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 566px;
    margin: auto;

    @media(max-width: 566px) {
        margin: 0 15px;
    }
`;

export default Container;