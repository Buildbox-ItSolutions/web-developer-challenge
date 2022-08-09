import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export interface IButtonProps extends ButtonTypes {
  color?: 'primary' | 'secondary' | 'black'
  shadow?: boolean
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
}

const Button = ({ children, ...props }: IButtonProps) => {
  const { color = 'primary', icon, shadow = true, fullWidth, minimal } = props

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    props?.onClick?.(event)
  }

  return (
    <S.Button
      type="button"
      color={color}
      icon={icon}
      shadow={shadow}
      fullWidth={fullWidth}
      minimal={minimal}
      {...props}
      onClick={handleClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
