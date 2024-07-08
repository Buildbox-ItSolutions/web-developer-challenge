import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;

  position: relative;

  width: 100%;
  max-width: 520px;

  padding: 3rem 2rem;
  background-color: ${(props) => props.theme.color.neutral[700]};
  border: 1px solid ${(props) => props.theme.color.neutral[500]};

  @media (max-width: ${(props) => props.theme.breakpoint.sm}px) {
    gap: 1.5rem;
    padding: 3rem 1rem;
  }
`;

export const Image = styled.img`
  width: 6rem;
  aspect-ratio: 1/1;

  border-radius: ${(props) => props.theme.radius.xl};

  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  color: ${(props) => props.theme.color.neutral[200]};
  line-height: 1.25;
`;

export const Message = styled.p``;

export const AuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-size: 0.875rem;
`;

export const AuthorLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.neutral[200]};
`;

export const Author = styled.p``;

// Component
export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0.75rem;
  right: 0.75rem;

  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.color.danger[400]};
  border-radius: ${(props) => props.theme.radius.sm};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.danger[300]};
  }
`;
