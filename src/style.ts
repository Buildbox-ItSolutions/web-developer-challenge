import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    width: 32.25rem;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    text-align: left;
    color: ${(props) => props.theme.span};
    margin: 3.5rem 0 0.5rem;

    @media (max-width: 516px) {
      width: 90%;
    }
  }
`
