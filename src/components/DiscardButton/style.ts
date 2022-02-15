import styled from 'styled-components'

interface ThemeProps {
  theme: {
    gray: string
  }
}

export const Wrapper = styled.button<ThemeProps>`
  width: 60px;
  padding: 16px;

  position: relative;

  cursor: pointer;
  transition: ease-in-out 0.3s;

  font-size: 14px;
  font-weight: normal;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    display: block;

    top: 32px;
    position: absolute;

    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`
