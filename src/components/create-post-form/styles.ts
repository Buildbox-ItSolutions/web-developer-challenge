import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.gray[400]};
  background-color: ${({ theme }) => theme.colors.gray[800]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[14]};
`

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[8]};
  justify-content: flex-end;
`

export const ErrorMessage = styled.small`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`
