import styled from "styled-components";

export const InputContainer = styled.input`
  @media (max-width: 660px) {
    padding: 12px 21px 11px 16px;
  }

  background-color: ${({ theme }) => theme.grey300};
  border: none;
  border-radius: 8px;
  color: white;
  margin: 16px 0 8px;
  padding: 12px 351px 11px 16px;
`;
