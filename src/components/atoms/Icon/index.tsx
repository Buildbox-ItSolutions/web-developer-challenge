import styled, { css } from 'styled-components'
import * as Icons from '@/assets/icons'

export type IconsKeys = keyof typeof Icons

export type Props = {
  height?: string
  width?: string
  size?: string
  color?: string
  icon?: IconsKeys
  cursor?: 'pointer' | 'default'
}

export const Icon = styled.svg.attrs<Props>(({ icon = 'IcLogo' }) => ({
  as: Icons[icon]
}))<Props>`
  ${({ width, height, size, color, cursor }) => css`
    width: ${width ?? size};
    height: ${height ?? size};
    cursor: ${cursor ?? 'default'};
    fill: ${color};

    > path,
    g {
      fill: ${color};
    }
  `}
`
