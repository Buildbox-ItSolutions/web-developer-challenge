import styled from 'styled-components'

import { COLORS } from '../../core/constants'

export const Textarea = styled.textarea`
  background-color: ${COLORS.charcoal};
  border: none;
  border-radius: 8px;

  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 80px;
  padding: 6px 16px;
  resize: none;
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
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.darkShadeOfGrey};
    border: 3px solid ${COLORS.charcoal};
    border-radius: 20px;
  }
`
