import styled from "styled-components";

export const Container = styled.main({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
});

export const TopBar = styled.div`
  width: 100%;
  background-color: #2b2b2b;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  width: 95%;
  max-width: 516px;
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
