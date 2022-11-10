import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div`
  background-color: #313131;
  border: 1px solid #3b3b3b;
  border-radius: 3px;
  margin-top: ${(p: Props) => p.mt};
  padding: 24px;
  position: relative;

  width: ${(p: Props) => p.width};
`;
