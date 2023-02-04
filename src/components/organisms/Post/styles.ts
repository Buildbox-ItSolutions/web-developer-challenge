import styled from 'styled-components';


export const Container = styled.div`
  width: 62rem;
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 2.5rem;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;

  >svg {
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
  }
`

export const ControlContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 500px) {
    gap: 0;
  }
`

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
  width: 0%;
  img {
    display: none;
  }
  }
`

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  gap: 2rem;
  span {
    display: flex;
    flex-wrap: wrap;
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

  .img-corner {
    display: none;
  }

  @media (max-width: 500px){
    text-align: justify;

    .author {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .img-corner{
      display: block;
      width: 18%;
    }
  }
`

