import styled from 'styled-components'
import { COLORS } from '../../core/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${COLORS.darkGray};
  height: calc(100% - 94px);
`
