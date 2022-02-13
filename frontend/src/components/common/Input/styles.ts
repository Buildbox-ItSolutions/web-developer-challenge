// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

interface ContainerProps {
  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  backgroundColor?: string
  border?: string
  borderRadius?: string
}

interface InputProps {
  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string

  paddingVertical?: string
  paddingHorizontal?: string

  color?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height};
  max-height: ${props => props.maxHeight};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};

  display: flex;
  align-items: center;
  flex-direction: row;

  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
`

export const InputLabel = styled.input<InputProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height};
  max-height: ${props => props.maxHeight};

  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};

  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  border-end-start-radius: ${props => props.borderBottomLeftRadius};
  border-end-end-radius: ${props => props.borderBottomRightRadius};
  border-start-start-radius: ${props => props.borderTopLeftRadius};
  border-start-end-radius: ${props => props.borderTopRightRadius};

  text-align: left;

  ::placeholder {
    font-family: Roboto;
    color: ${theme.colors.gray_150};
  }
`
