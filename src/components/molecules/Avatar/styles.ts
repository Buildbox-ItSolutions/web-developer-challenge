import styled, { css } from 'styled-components'

type ContainerProps = {
  picture?: string
}

export const Container = styled.div<ContainerProps>`
  width: 83px;
  height: 83px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.xlg};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray120};

  ${({ picture }) =>
    picture &&
    css`
      background-image: src(${picture});
    `}
`
