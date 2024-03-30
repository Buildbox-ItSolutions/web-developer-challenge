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
