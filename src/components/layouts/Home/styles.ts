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

  padding-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    width: 95vw;
  }
`;

export const HomePostsListContainer = styled.div`
  width: 100%;

  margin-top: 5.6rem;
`;

export const HomePostsListHeading = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;

  margin-bottom: 0.8rem;

  font-weight: 500;
  color: ${({ theme }) => theme.colors.text[600]};
`;
