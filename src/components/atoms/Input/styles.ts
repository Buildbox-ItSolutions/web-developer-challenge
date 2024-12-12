import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${props => props.theme.colors.input};
  color: white;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.font};
  }

  width: 468px;
  height: 40px;

  padding: 1rem;

  border: 0;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
