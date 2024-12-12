import { StyledContainer } from "./style";

type ContainerProp = {
  children: JSX.Element[];
}

export function Container(props: ContainerProp) {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  );
};
