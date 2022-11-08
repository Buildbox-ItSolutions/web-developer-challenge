import styled from 'styled-components';

export const Container = styled.div`
  width: 516px;

  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.grey200};
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.grey200};
`;
