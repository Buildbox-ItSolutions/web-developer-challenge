import styled from "styled-components";

export const CardsList = styled.div`
  width: 95%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding-bottom: 64px;

  @media (min-width: 768px) {
    width: 520px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  flex-direction: column;
  align-items: center;
`;

export const SiteContent = styled.article`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-top: 94px;
  padding-top: 40px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
