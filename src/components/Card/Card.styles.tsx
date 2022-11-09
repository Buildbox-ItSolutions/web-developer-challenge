import styled from 'styled-components'
import { COLORS } from '../../core/constants'
import { Props } from '.'

export const Container = styled.div`
  padding: 24px;
  background-color: ${COLORS.darkShadeOfGrey};
  border: 1px solid ${COLORS.darkEclipsi};
  border-radius: 3px;
  margin-top: ${(p: Props) => p.mt};
  position: relative;

  width: 516px;
`
