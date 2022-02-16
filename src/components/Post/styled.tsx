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

export const AvatarContainer = styled.div`
  width: fit-content;
  max-width: 88px;
`;

export const Header = styled.div`
  align-self: flex-end;
`;

export const Body = styled.div`
  display: flex;
  gap: 32px;
`;

export const Content = styled.div`
  position: relative;
`;

type PostTextProps = {
  readMore?: boolean;
};

export const PostText = styled(Text)<PostTextProps>`
  margin-bottom: 24px;
`;

export const PostShowMoreText = styled(Text)`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;
