import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.div`
  display: flex;

  height: 50vh;

  color: ${({ theme }) => theme.palette.brandGrey.lighter};

  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const HomeLink = styled(Link)`
  margin-top: 30px;

  color: ${({ theme }) => theme.palette.brandGrey.lightest};

  cursor: pointer;
`
