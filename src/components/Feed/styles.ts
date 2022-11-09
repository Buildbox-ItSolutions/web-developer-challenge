import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 1.875rem;

  >p {
    color: ${props => props.theme.colors["gray-700"]};
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: -0.5rem;
  }

  .nonePost {
    color: ${props => props.theme.colors.white};
    font-size: 1.125rem;
    text-align: center;
  }
`