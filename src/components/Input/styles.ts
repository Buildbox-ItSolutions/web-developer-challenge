import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${props => props.theme.colors.input};
  color: white;
  width: 468px;
  height: 40px;
  padding: 1rem;
  border: 0;
  border-radius: 8px;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.font};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;