import React, { ComponentProps } from 'react'

interface IButton extends ComponentProps<'button'>{
    children: React.ReactNode;
    disabled?: boolean;
}
function Button({disabled, children, ...props}: IButton) {
  return (
    <button {...props} disabled={disabled}>{children}</button>
  )
}

export default Button