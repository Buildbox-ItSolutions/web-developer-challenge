// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 93px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${theme.colors.headers_background};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const Content = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: 100;
    text-transform: uppercase;

    text-align: left;

    line-height: 14px;
    letter-spacing: 0.3px;

    color: ${theme.colors.gray_250};
  }
`
