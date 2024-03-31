import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #343434;
  .content {
    width: 550px;
    margin-top: 100px;
  }
  @media (max-width: 600px) {
    .content {
    width: 95%;
    }
  }
`;

export const Header = styled.div`
  position: fixed;
  height: 93px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  img {
    height: 60px;
  }
`;

export const Feed = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  h3 {
    color: #5f5f5f;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
