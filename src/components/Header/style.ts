import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding: 24px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.blackDark};
`
