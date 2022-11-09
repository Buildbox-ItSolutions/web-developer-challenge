import styled from 'styled-components'
import { COLORS } from '../../core/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 568px;
  min-width: 200px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${COLORS.darkGray};
  height: calc(100% - 94px);
  width: calc(100% - 48px);
  padding: 0px 24px;
`
