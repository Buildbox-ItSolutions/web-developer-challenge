import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.gray['600']};
  padding: 1.2rem 2.4rem 3.2rem 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray['550']};
  border-radius: 0.3rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 2.4rem;
`;

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 2rem;
  cursor: pointer;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 0 3.2rem;

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray['200']};
    margin-bottom: 2.4rem;
  }

  span:first-child {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray['350']};
  }

  span:last-child {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray['300']};
  }
`;

export const Thumbnail = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  object-fit: cover;
  border-radius: 3.6rem;
`;

export const GroupAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;
