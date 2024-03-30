import { XCircle } from 'lucide-react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 32.25rem;
  height: 14.0625rem;
  padding: ${({ theme }) =>
    `${theme.spacing[3]} ${theme.spacing[3]} ${theme.spacing[8]} ${theme.spacing[6]}`};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.gray[400]};
  background-color: ${({ theme }) => theme.colors.gray[800]};

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`
export const Thumbnail = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: ${(props) => props.theme.spacing[8]};
  object-fit: cover;
  flex-shrink: 0;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`
export const Body = styled.p`
  max-width: 21.75rem;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray[100]};
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  & > span {
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
export const Author = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
`

export const RemoveButton = styled(XCircle)`
  width: ${({ theme }) => theme.spacing[5]};
  height: ${({ theme }) => theme.spacing[5]};
  margin-left: auto;
  display: block;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.red[500]};

  &:hover {
    opacity: 0.8;
  }
`
