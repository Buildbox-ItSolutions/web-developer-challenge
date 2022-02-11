import { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  direction?: CSSProperties['flexDirection'];
};

export default styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'unset'};
  align-items: center;
  justify-content: center;
`;
