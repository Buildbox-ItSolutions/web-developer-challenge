import styled from 'styled-components'

import { COLORS } from '../../core/constants'
import { Props } from '.'

export const InputStyled = styled.input`
  background-color: ${COLORS.charcoal};
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 40px;
  margin-bottom: ${(props: Props) => props.mb};
  margin-top: ${(props: Props) => props.mt};
  padding: 6px 16px;
  width: calc(100% - 32px);

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    color: ${COLORS.lightColor};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.29;
  }
`
