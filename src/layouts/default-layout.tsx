import styled from "styled-components";

const MainContainer = styled.main`
  padding: 0 ${({theme}) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(516px + ${({theme}) => theme.spacing[8]});
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};

  background-color: ${({ theme }) => theme.colors.gray[800]};

  img:first-child {
    width: 103px;
    height: 45px;
    object-fit: contain;
  }
`;

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <img src="/web-developer-challenge/bx-logo.svg" alt="Buildbox Web Challenge" />
      </Header>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
