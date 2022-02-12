import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5% 30%;
  width: 100vw;

  @media (max-width: 1200px) {
    padding: 5% 25%;
  }
  @media (max-width: 1000px) {
    padding: 5% 20%;
  }
  @media (max-width: 800px) {
    padding: 5% 10%;
  }
  @media (max-width: 600px) {
    padding: 5% 5%;
  }

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 2%;
  }

  .ant-form {
    width: 100%;

    background-color: #eef;
    padding: 2%;
    padding-top: 5%;
    border-radius: 10px;
    margin: 0;
  }

  .posts {
    margin: 0;
    margin-top: 5%;
    padding: 5%;
    border-radius: 10px;
    width: 100%;
    background-color: #eef;
  }
`;
