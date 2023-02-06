import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;

  span:first-child {
    font-weight: 900;
    font-size: 2.8rem;

    color: ${({ theme }) => theme.colors.primary};
  }

  span:last-child {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray['250']};
  }
`;
