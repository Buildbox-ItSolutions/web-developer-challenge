import { SVGProps } from 'react';
import styled from 'styled-components';

export const StyledIcon = styled.svg<SVGProps<SVGSVGElement>>`
  cursor: pointer;
  transition: filter 0.3s ease; 

  &:hover {
    filter: brightness(2); 
  }
`;