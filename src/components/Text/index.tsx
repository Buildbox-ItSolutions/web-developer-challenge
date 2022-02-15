import styled from 'styled-components';

type Props = {
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
};

export default styled.p<Props>`
  font-size: ${({ fontSize }) => fontSize ?? '14px'};
  font-family: ${({ fontFamily }) => fontFamily ?? 'Roboto, sans-serif'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'unset'};
  line-height: ${({ lineHeight }) => lineHeight ?? 'unset'};
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${letterSpacing}`};
  color: ${({ theme, color }) => color ?? theme.text.secondary};

  ${({ theme }) => `
    @media screen and (max-width: ${theme.breakpoints.sm}) {
      line-height: 16px;
    }
  `};
`;
