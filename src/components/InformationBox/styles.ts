import styled from "styled-components";

export const BoxContainer = styled.div`
  @media (max-width: 660px) {
    width: 212px;
  }

  align-items: center;
  background-color: ${({ theme }) => theme.grey400};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.greyBorder};
  display: flex;
  flex-direction: column;
  height: 353px;
  justify-content: center;
  margin: 40px 425px 56px;
  padding: 24px;
  width: 516px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 660px) {
    gap: 10px;
    button {
      width: 100px;
      margin: 0 auto;
    }
  }
`;
