import styled from "styled-components";

export const TextFiledContainer = styled.textarea`
  @media (max-width: 660px) {
    width: 212px;
  }

  margin: 8px 0 32px;
  border-radius: 8px;
  width: 512px;
  background-color: ${({ theme }) => theme.grey300};
`;
