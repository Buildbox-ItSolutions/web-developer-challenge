import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 720px;
  margin-top: 48px;

  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const Title = styled.span`
  width: 100%;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.titleColor};
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;

export const CardList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
  margin-bottom: 170px;
`;

export const EmptyCards = styled(Title)`
  margin: 32px 0;
  text-align: center;
`;
