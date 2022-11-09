import styled from 'styled-components'

import { COLORS } from '../../core/constants'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 568px;
  min-width: 200px;
  width: 100%;
`

export const Wrapper = styled.div`
  background-color: ${COLORS.darkGray};
  display: flex;
  height: calc(100% - 94px);
  justify-content: center;
  padding: 0px 24px;
  width: calc(100% - 48px);
`
