import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.text.secondary};
`;
