import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 88px;
  height: 88px;

  flex-shrink: 0;
  margin-right: 32px;

  border-radius: 36px;

  background-color: ${({ theme }) => theme.colors.gray};

  img {
    width: 100%;
    object-fit: contain;
  }
`
