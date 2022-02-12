import styled from 'styled-components';
import Text from '@/components/Text';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 12px 24px 32px 24px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.black['500']};
  border: 1px solid ${({ theme }) => theme.black['300']};
  transition: border-color 200ms ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const Header = styled.div`
  align-self: flex-end;
`;

export const Body = styled.div`
  display: flex;
  gap: 32px;
`;

export const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: black;
`;

export const Content = styled.div``;

export const PostText = styled(Text)`
  margin-bottom: 24px;
`;
