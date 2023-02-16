import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.header};
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 130px;
  }
  
  @media (max-height: 1024px) {
    min-height: 90px;
  }
`;