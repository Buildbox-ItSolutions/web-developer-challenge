import styled from 'styled-components';

export const Container = styled.main`
  max-width: 720px;
  width: 100%;
  margin: 4rem auto;
  padding: 0 2rem;
`;

export const List = styled.section`
  margin-top: 5.6rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray['300']};
    margin-bottom: 0.8rem;
  }

  article {
    margin-bottom: 1.6rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
`;

export const Message = styled.span`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.gray['200']};
`;
