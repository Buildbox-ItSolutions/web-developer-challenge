// External libraries
import React from 'react'

// Styled
import { Container } from './styles'

interface ButtonProps {
  title: string
  onClick?: () => void

  isActive?: boolean
  type?: any
  disabled?: boolean

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

  fontSize?: string
  fontWeight?: number
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  isActive,
  type,
  disabled,
  width,
  maxWidth,
  height,
  maxHeight,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marignLeft,
  marginRight,
  color,
  colorActive,
  backgroundColor,
  backgroundColorActive,
  border,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  textDecoration,
  fontSize,
  fontWeight
}) => {
  return (
    <Container
      onClick={onClick}
      isActive={isActive}
      type={type}
      disabled={disabled}
      width={width}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marignLeft={marignLeft}
      marginRight={marginRight}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      color={color}
      colorActive={colorActive}
      backgroundColor={backgroundColor}
      backgroundColorActive={backgroundColorActive}
      border={border}
      borderRadius={borderRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      textDecoration={textDecoration}
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight
      }}
    >
      {title}
    </Container>
  )
}

export default Button
