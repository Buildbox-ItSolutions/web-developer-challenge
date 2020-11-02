import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  background-color: ${props => props.theme.colors.input};
  color: white;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.font};
  }

  width: 468px;
  height: 80px;

  padding: 1rem;

  border: 0;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
