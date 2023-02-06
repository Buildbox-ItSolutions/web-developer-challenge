import styled from 'styled-components';

export const IndexStyled = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;

  overflow-y: auto;
  overflow-x: hidden;

  background: ${({ theme }) => theme.backgroundColorDown};

  section {
    width: 100%;
    height: 100%;
    padding-top: 80px;

    display: flex;
    flex-direction: column;
    gap: 56px;
  }
`;
