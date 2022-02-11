import { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  direction?: CSSProperties['flexDirection'];
  marginX?: number | string;
  marginY?: number | string;
};

export default styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'unset'};
  margin: ${({ marginX, marginY }) =>
    `${marginY ?? 0} ${marginX ?? 0}`};
  align-items: center;
  justify-content: center;
`;
