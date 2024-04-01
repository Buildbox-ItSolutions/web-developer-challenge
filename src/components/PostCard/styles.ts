import styled from 'styled-components';

import { CardContainer } from '../CardContainer';

export const PostCardContainer = styled(CardContainer)`
  position: relative;

  padding-top: 5.6rem;
  padding-bottom: 3.2rem;

  display: flex;
  align-items: start;
  gap: 3.2rem;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }
`;

export const ImgStyled = styled.img`
  width: 8.8rem;
  height: 8.8rem;

  flex-shrink: 0;

  border-radius: 9999px;
  object-fit: contain;

  overflow: hidden;

  @media (max-width: 640px) {
    width: 6.4rem;
    height: 6.4rem;
  }
`;

export const Content = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Message = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.card.content};
`;

export const Footer = styled.footer`
  small {
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.card.senderText};

    user-select: none;

    display: block;
    margin-bottom: 0.2rem;
  }
`;

export const Name = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;

  color: ${({ theme }) => theme.colors.card.senderName};
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  background-color: transparent;
  border: none;
  outline: none;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
