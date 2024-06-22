import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 10rem 1rem;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 10rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 10rem 40rem;
  }
`;
