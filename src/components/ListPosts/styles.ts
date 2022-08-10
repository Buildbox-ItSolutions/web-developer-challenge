import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  width: 500px;
  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
  h1 {
    font-size: 0.85rem;
  }
`;
