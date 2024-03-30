import { Container } from './styles'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <Container variant={variant} {...props} />
}
