import { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children: ReactNode
  variant?: S.Variants
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, variant = 'full', ...props }: Props) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  )
}
