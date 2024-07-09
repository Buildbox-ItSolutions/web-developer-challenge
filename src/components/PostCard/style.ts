import styled from 'styled-components'
import { CancelOutlined } from '@mui/icons-material'

export const Card = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  padding: 50px 25px 25px 25px;
  border: 1px solid ${({ theme }) => theme.palette.brandGrey.dark};
  border-radius: 6px;

  background-color: ${({ theme }) => theme.palette.brandGrey.main};

  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 600px) {
    padding: 40px 15px 20px 15px;

    gap: 15px;
  }
`

export const PostDelete = styled(CancelOutlined)`
  position: absolute;
  right: 10px;
  top: 10px;

  color: ${({ theme }) => theme.palette.brandRed.main};
`

export const ProfileImage = styled.img`
  width: 85px;
  height: 85px;
  border: 1px solid ${({ theme }) => theme.palette.brandGrey.light};
  border-radius: 36px;
`

export const PostContainer = styled.div`
  display: flex;

  width: 70%;

  font-size: ${({ theme }) => theme.typography.fontSize.extraMedium};
  color: ${({ theme }) => theme.palette.brandGrey.lightest};

  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`

export const Message = styled.p`
  
`

export const User = styled.div`
  display: flex;

  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
`

export const SubmittedBy = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.palette.brandGrey.lighter};
`

export const Name = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  color: ${({ theme }) => theme.palette.brandGrey.lightest};
`
