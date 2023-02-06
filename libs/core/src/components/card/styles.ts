import styled from 'styled-components';

import { CardProps } from './model';

export const CardStyled = styled.div<CardProps>`
  background: ${({ theme }) => theme.backgroundColorUp};
  border: 1px solid ${({ theme }) => theme.borderColorDown};
`;
