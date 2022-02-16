import { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  direction?: CSSProperties['flexDirection'];
  marginX?: number | string;
  marginY?: number | string;
};

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  align-items: center;
  justify-content: center;
`;
