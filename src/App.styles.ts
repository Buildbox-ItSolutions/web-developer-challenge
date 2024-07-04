import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

export const AppMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 100%;
  min-height: calc(100vh - 120px);
  margin: 120px auto 0 auto;
`;
