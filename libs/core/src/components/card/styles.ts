import styled from 'styled-components';

export const CardStyled = styled.div`
  background: ${({ theme }) => theme.foregroundColorDown};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
