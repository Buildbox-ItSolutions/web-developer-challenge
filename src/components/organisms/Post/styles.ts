import styled from 'styled-components';


export const Container = styled.div`
  max-width: 62rem;
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin: auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1.2rem;
  >svg {
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
  }
`

export const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`

export const LeftCol = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-size: 1.6rem;
    line-height: 2rem;
    font-family: 400;
    color: ${({ theme }) => theme.colors.gray[250]};
  }

  p{
    font-size: 1.4rem;
  }
  small, p {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`

