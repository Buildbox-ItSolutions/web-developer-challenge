import { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './styles'

type Props = {
  fullWidth?: boolean
} & InputHTMLAttributes<{}>

export const Input = forwardRef<HTMLInputElement, Props>(({ fullWidth = false, ...props }, ref) => {
  return <S.Input fullWidth={fullWidth} {...props} ref={ref} />
})
