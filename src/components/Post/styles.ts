import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #bbf;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  border-radius: 10px;
  margin-bottom: 3%;
  position: relative;

  h3 {
    margin: 0;
    padding: 0;
  }

  span {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    color: red;
    margin-right: 2%;
    margin-top: 2%;
    font-size: 20px;
    cursor: pointer;
  }

  p {
    margin: 0;
    margin-bottom: 3%;
    padding: 0;
  }
`;
