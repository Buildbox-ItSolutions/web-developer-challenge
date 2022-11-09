import styled from 'styled-components'
import { Props } from '.'
import { COLORS } from '../../core/constants'

export const InputStyled = styled.input`
  width: calc(100% - 32px);
  height: 40px;
  background-color: ${COLORS.charcoal};
  border-radius: 8px;
  border: none;
  padding: 6px 16px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  margin-top: ${(props: Props) => props.mt};
  margin-bottom: ${(props: Props) => props.mb};

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: ${COLORS.lightColor};
    line-height: 1.29;
  }
`
