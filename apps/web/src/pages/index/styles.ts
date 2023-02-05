import styled from 'styled-components';

export const IndexStyled = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;

  background: ${({ theme }) => theme.backgroundColorDown};

  section {
    width: 100%;
    height: 100%;
    padding-top: 80px;
  }
`;
