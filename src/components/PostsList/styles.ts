import styled from 'styled-components';

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const EmptyPostsListFeedback = styled.p`
  margin-top: 3.2rem;
  margin-inline: auto;

  font-size: 1.4rem;
  line-height: 1.8rem;

  color: ${({ theme }) => theme.colors.text[500]};
  user-select: none;
`;
