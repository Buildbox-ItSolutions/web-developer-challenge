import styled, { css } from 'styled-components'

import { Icon } from '@/components/atoms'

type ContainerProps = {
  picture?: string
}

export const Container = styled.div<ContainerProps>`
  width: 83px;
  min-width: 83px;
  height: 83px;
  min-height: 83px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.xlg};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray120};

  ${({ picture }) =>
    picture &&
    css`
      background-image: url(${picture});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`

export const Input = styled.input`
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &::file-selector-button {
    cursor: pointer;
  }
`

export const Picture = styled(Icon)`
  position: absolute;
`
