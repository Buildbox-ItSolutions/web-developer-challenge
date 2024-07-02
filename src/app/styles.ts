import { FiImage, FiTrash } from 'react-icons/fi';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 6rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2b2b2b;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  h1 {
    color: #71bb01;
  }

  span {
    color: #494949;
  }
`;

export const Body = styled.article`
  width: 100%;
  max-width: 40rem;
  padding: 3rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeedTitle = styled.h2`
  font-size: 1rem;
  color: #7a7a7a;
  margin-top: 2rem;
`;
