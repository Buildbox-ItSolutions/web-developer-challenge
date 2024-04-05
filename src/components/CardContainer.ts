import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  ${({
    theme: {
      borderRadius,
      colors: { card },
    },
  }) => css`
    width: 100%;
    padding: 2.4rem;

    border-radius: ${borderRadius.card};

    color: ${card.content};
    background-color: ${card.background};
    border: 1px solid ${card.border};
  `}
`;
