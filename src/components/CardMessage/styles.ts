import styled from "styled-components";

export const CardContainer = styled.div`
  align-items: start;
  background-color: ${({ theme }) => theme.grey400};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.greyBorder};
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 500px;
  justify-content: center;
  margin-bottom: 30px;
  padding: 12px 12px 32px 24px;
  width: 516px;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImageUser = styled.img`
  width: 70px;
  align-self: flex-start;
  position: relative;
  top: 18px;
`;

export const DescriptionInfos = styled.div`
  margin-top: 20px;
  align-self: flex-end;
`;

export const ContainerCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    align-self: flex-end;
    position: relative;
    top: 40px;
  }
`;
