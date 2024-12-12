// External libraries
import React, { ReactNode } from 'react'

// Styled
import { Container, InputLabel } from './styles'

interface InputProps {
  children?: ReactNode
  onChange?: any
  placeholder?: string
  type?: string
  name?: string
  value?: any
  disabled?: boolean
  required?: boolean

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
  backgroundColor?: string
  border?: string
  borderRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
}

const Input: React.FC<InputProps> = ({
  children,
  onChange,
  placeholder,
  type,
  name,
  value,
  disabled,
  required,
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
  backgroundColor,
  border,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius
}) => {
  return (
    <Container
      width={width}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marignLeft={marignLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
    >
      <InputLabel
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        width={width}
        maxWidth={maxWidth}
        height={height}
        maxHeight={maxHeight}
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        color={color}
        backgroundColor={backgroundColor}
        border={border}
        borderRadius={borderRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        style={{
          fontSize: 14,
          fontWeight: 500
        }}
      />
      {children}
    </Container>
  )
}

export default Input
