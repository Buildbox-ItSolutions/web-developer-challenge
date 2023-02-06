import { media } from '@bix/themes';
import styled from 'styled-components';

export const FeedStyled = styled.div`
  width: 100%;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.labelColorUp};
  }

  &,
  > div {
    width: 100%;
    max-width: 516px;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 16px;
  }

  ${media.lessThan('sm')`
    padding: 20px;
  `}

  padding-bottom: 30px;
  gap: 8px;
`;
