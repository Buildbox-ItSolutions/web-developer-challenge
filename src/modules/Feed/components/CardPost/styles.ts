import styled from "styled-components";

export const Container = styled.div`
  width: 38vw;
  max-height: 280px;
  max-width: 620px;
  min-height: 180px;
  min-width: 520px;
  margin: 8px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-height: 680px;
    min-width: 320px;
    width: 90vw;
    padding: 12px;
  }
`;

export const CardPostInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1;
  gap: 12px;
  justify-content: center;
  align-items: center;
  color: #9f9f9f;
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 10px 42px 20px 20px;
  flex-grow: 1;
  font-size: 1rem;
`;

export const Authorship = styled.div`
  margin-top: 1vh;
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 7px;
  cursor: pointer;
`;
