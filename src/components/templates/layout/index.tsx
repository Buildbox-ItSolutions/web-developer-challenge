import Image from 'next/image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface PageTemplateProps {
  children: ReactElement;
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-y: auto;
`;

const Content = styled.div`
  margin: auto;
  word-break: break-word;
  height: 100%;
  padding-top: ${props => props.theme.spacing[8]};

  @media only screen and (max-width: 800px) {
    width: 100%;
    max-width: 516px;
  }

  @media only screen and (min-width: 800px) {
    width: 50%;
    max-width: 516px;
  }
`;

const Header = styled.div`
  height: 100px;
  background-color: ${props => props.theme.colors.gray_scale_1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }: PageTemplateProps) {
  return (
    <MainContainer>
      <Header>
        <Image width={120} height={50} src="/logo.png" alt="Logo" />
      </Header>
      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>
    </MainContainer>
  );
}

export default Layout;
