import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  display: flex;

  width: 100%;
  height: 90px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.brandGrey.darkest};
  
  background-color: ${({ theme }) => theme.palette.brandGrey.darker};

  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 60px;
  }
`

export const Title = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.extraLarge};
  font-weight: 900;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.palette.brandGreen.main};
  text-decoration: none;
`

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.palette.brandGrey.lighter};
`
