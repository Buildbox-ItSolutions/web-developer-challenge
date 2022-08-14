import { forwardRef, TextareaHTMLAttributes } from 'react'

import * as S from './styles'

type Props = {
  fullWidth?: boolean
} & TextareaHTMLAttributes<{}>

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ fullWidth = false, ...props }, ref) => {
    return <S.Input ref={ref} fullWidth={fullWidth} {...props} />
  }
)
