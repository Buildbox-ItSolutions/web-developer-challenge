import React from 'react';
import { SVGProps } from 'react';
import { StyledIcon } from './styles';

export const DeleteIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <StyledIcon 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    {...props}
  >
    <g id="prefix__trash" transform="translate(-1181 -306)">
        <g id="prefix__cancel" transform="translate(1181.75 306.75)">
            <path 
              id="prefix__Caminho_10" 
              d="M14.575 13.992L8.658 8.075a.412.412 0 0 0-.583.583l5.917 5.917a.412.412 0 1 0 .583-.583zm-.583-5.917l-5.917 5.917a.412.412 0 0 0 .583.583l5.917-5.917a.412.412 0 0 0-.583-.583z" 
              fill="#d65923"
              transform="translate(-2.492 -2.658)"
            />
            <path 
              id="prefix__Caminho_11" 
              d="M4.317 16.183l.333-.333a7.826 7.826 0 0 1-2.333-5.583A7.689 7.689 0 0 1 4.65 4.683a7.689 7.689 0 0 1 5.583-2.333 7.689 7.689 0 0 1 5.583 2.333 7.826 7.826 0 0 1 2.333 5.583 7.689 7.689 0 0 1-2.333 5.583 7.826 7.826 0 0 1-5.583 2.333A7.689 7.689 0 0 1 4.65 15.85l-.333.333-.333.333A8.783 8.783 0 0 0 10.15 19.1a8.443 8.443 0 0 0 6.167-2.583A8.783 8.783 0 0 0 18.9 10.35a8.443 8.443 0 0 0-2.583-6.167A8.783 8.783 0 0 0 10.15 1.6a8.443 8.443 0 0 0-6.167 2.583A8.783 8.783 0 0 0 1.4 10.35a8.443 8.443 0 0 0 2.583 6.167z" 
              fill="#d65923"
              transform="translate(-1.4 -1.6)"
            />
        </g>
        <path 
          id="prefix__Retângulo_5" 
          d="M0 0H24V24H0z" 
          data-name="Retângulo 5" 
          transform="translate(1181 306)" 
          fill="none"
        />
    </g>
  </StyledIcon>
);

