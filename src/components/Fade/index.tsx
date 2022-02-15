import * as React from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import styled from 'styled-components';

type AnimationProps = {
  state: TransitionStatus;
};

type FadeProps = {
  in?: boolean;
  children: React.ReactNode;
};

const Animation = styled.div<AnimationProps>`
  transition: 100ms;
  transform: translateY(-50px);
  opacity: 0;

  ${({ state }) =>
    state === 'entered' &&
    `
    transform: translateY(0px);
    opacity: 1;
  `};
`;

function Fade({ children, in: inAnimation }: FadeProps) {
  return (
    <Transition
      in={inAnimation}
      timeout={100}
      unmountOnExit
      mountOnEnter
    >
      {(state) => <Animation state={state}>{children}</Animation>}
    </Transition>
  );
}

export default Fade;
