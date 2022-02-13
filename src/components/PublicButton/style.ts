import styled from 'styled-components'

export const Wrapper = styled.button`
  width: 98px;
  height: 41px;
  border-radius: 8px;

  padding: 0;

  cursor: pointer;
  transition: ease-in-out 0.3s;

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`
