import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  background-color: #313131;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0 56px;
  padding: 24px;
  width: 516px;

  @media (max-width: 672px) {
    width: 80%;
  }
`;
