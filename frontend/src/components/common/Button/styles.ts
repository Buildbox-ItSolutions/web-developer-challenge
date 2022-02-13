// External libraries
import styled from 'styled-components'

interface ButtonProps {
  isActive?: boolean

  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string

  paddingVertical?: string
  paddingHorizontal?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  color?: string
  colorActive?: string
  backgroundColor?: string
  backgroundColorActive?: string
  border?: string
  borderRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
  textDecoration?: string
}

export const Container = styled.button<ButtonProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height};
  max-height: ${props => props.maxHeight};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};
  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};

  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  border-end-start-radius: ${props => props.borderBottomLeftRadius};
  border-end-end-radius: ${props => props.borderBottomRightRadius};
  border-start-start-radius: ${props => props.borderTopLeftRadius};
  border-start-end-radius: ${props => props.borderTopRightRadius};
  text-decoration: ${props => props.textDecoration};
  text-align: center;

  cursor: pointer;

  transition: .5s;

  background-color: ${(props) => props.isActive
    ? props.backgroundColorActive
    : props.backgroundColor
  };
  color: ${(props) => props.isActive
    ? props.colorActive
    : props.color
  };

  &:hover {
    filter: brightness(75%)
  }

  @media screen and (max-width: 768px) {
    cursor: none;
  }
`
