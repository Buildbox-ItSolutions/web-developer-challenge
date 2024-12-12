import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;

export const Content = styled.main`
  width: 100vw;
  min-height: calc(100vh - 93px);
  padding-bottom: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background);
`;

export const Header = styled.header`
  width: 100vw;
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--header);
`;

export const Image = styled.img`
  width: 103px;
  height: 45px;
  object-fit: contain;
`;
