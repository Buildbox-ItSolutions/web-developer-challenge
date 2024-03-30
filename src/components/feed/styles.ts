import styled from 'styled-components'

export const Container = styled.div`
  & > h3 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[4]};

  @media screen and (max-width: 640px) {
    width: 22.25rem;
  }
`

export const EmptyState = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray[500]};
`
