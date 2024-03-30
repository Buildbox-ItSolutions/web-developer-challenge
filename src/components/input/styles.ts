import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  height: ${(props) => props.theme.spacing[10]};
  padding: ${(props) => `${props.theme.spacing[3]} ${props.theme.spacing[4]}`};
  border-radius: ${(props) => props.theme.radius.lg};
  background-color: ${(props) => props.theme.colors.gray[300]};
  outline: none;
  border: solid 1px transparent;
  color: ${(props) => props.theme.colors.white};
  transition: border-color 0.2s ease-in-out;
  font-size: ${(props) => props.theme.fontSizes.sm};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  &:focus {
    border: solid 1px ${(props) => props.theme.colors.gray[100]};
  }
`
