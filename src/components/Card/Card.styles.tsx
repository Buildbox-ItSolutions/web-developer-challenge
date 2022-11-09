import styled from 'styled-components'

import { COLORS } from '../../core/constants'
import { Props } from '.'

export const Container = styled.div`
  background-color: ${COLORS.darkShadeOfGrey};
  border: 1px solid ${COLORS.darkEclipsi};
  border-radius: 3px;
  margin-top: ${(p: Props) => p.mt};
  padding: 24px;
  position: relative;

  width: ${(p: Props) => p.width};
`
