import styled from "styled-components";

export const Container = styled.div`
  background-color: #343434;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const Form = styled.div`
  background-color: #313131;
  width: 37vw;
  height: 50vh;
  max-width: 570px;
  margin: 40px 0;
  padding: 24px 45px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Actions = styled.div`
  max-width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: flex-end;
  padding: 0 24px;
`;

export const FeedArea = styled.section`
  display: flex;
  align-items: center;
  width: 516px;
  flex-direction: column;

  > h4 {
    font-size: 14px;
    color: #7a7a7a;
    align-self: start;
  }
`;
