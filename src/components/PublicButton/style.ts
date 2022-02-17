import styled from 'styled-components'

interface ThemeProps {
  theme: {
    white: string
    bgButton: string
  }
}

export const Wrapper = styled.button<ThemeProps>`
  width: 98px;
  height: 41px;
  border-radius: 8px;

  padding: 0;

  cursor: pointer;
  transition: ease-in-out 0.3s;

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.bgButton};

  &:disabled {
    cursor: no-drop;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.grayDark2};
  }

  &:disabled&:hover {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`
