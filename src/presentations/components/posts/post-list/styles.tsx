import styled from "styled-components";

export const Container = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const ContentItems = styled.div`
  height: auto;
  width: 100%;
  max-width: 516px;

  > div:last-child {
    margin-bottom: 170px;
  }
`;

export const Title = styled.span`
  color: #7a7a7a;
  width: 100%;
  max-width: 516px;
  margin-bottom: 8px;
`;
