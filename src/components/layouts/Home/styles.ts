import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HomeContent = styled.main`
  flex: 1;

  width: 51.6rem;
  margin-top: 4rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    width: 95vw;
  }
`;
