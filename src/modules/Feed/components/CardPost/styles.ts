import styled from "styled-components";

export const Container = styled.div`
  width: 38vw;
  height: 30vh;
  max-width: 620px;
  max-height: 250px;
  margin: 8px;
  padding: 24px 42px 24px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardPostInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1;
  justify-content: center;
  align-items: center;
  color: #9f9f9f;
  font-size: 16px;
`;

export const Authorship = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
`;
