import { TextButtonContainer } from './style'

interface TextButtonProps {
  text: string
}

export function TextButton({ text, ...rest }: TextButtonProps) {
  return <TextButtonContainer {...rest}>{text}</TextButtonContainer>
}
