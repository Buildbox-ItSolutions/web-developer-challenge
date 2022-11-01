import styled from "styled-components";

export const CardContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.grey400};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.greyBorder};
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 225px;
  justify-content: center;
  margin: 8px 425px 16px;
  padding: 12px 12px 32px 24px;
  width: 516px;
`;

export const UserContainer = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 15px;

  img {
    border-radius: 40%;
    position: relative;
    top: 12px;
    width: 80px;
  }
`;

export const UserInfos = styled.div`
  margin-top: 50px;
`;
