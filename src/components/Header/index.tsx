import styled from 'styled-components';
import Logo from '@/assets/bx-logo.svg?component';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.black[700]};
  background: ${({ theme }) => theme.black[600]};
  height: 93px;
  z-index: 1;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}
