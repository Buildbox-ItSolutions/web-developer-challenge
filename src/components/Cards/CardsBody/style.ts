import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.base.spacing.medium};
`;
