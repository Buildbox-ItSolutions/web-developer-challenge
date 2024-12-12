import { StyledHeader } from './style';

type HeaderProp = {
  children: JSX.Element;
}

export function Header(props: HeaderProp) {
  return (
    <StyledHeader>
      {props.children}
    </StyledHeader>
  )
}