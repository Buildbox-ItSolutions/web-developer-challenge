import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  padding: 55px 12px 32px 24px;
  @media (max-width: 905px) {
    flex-direction: column;
  }
`;
