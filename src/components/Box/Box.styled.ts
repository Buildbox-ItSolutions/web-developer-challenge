import styled from "styled-components";

export const BoxWrapper = styled.div`
  padding: 2.4rem;
  border-radius: 0.3rem;
  border: solid 1px ${({ theme }) => theme.colors.box_border};
  background-color: ${({ theme }) => theme.colors.box_bg};
`;
