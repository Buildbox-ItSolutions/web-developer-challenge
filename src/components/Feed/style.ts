import styled from 'styled-components'

export const Feed = styled.div`
  display: flex;

  width: 480px;
  padding: 0;
  
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const SectionTitle = styled.p`
  padding-left: 5px;

  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.brandGrey.lighter};
`

export const NoPosts = styled.p`
  margin-top: 20px;

  font-size: ${({ theme }) => theme.typography.fontSize.large};
  color: ${({ theme }) => theme.palette.brandGrey.light};
  
  align-self: center;
`

export const SeeMore = styled.button`
  margin-top: 15px;
  border: none;

  font-size: ${({ theme }) => theme.typography.fontSize.extraMedium};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.brandGrey.lightest};
  text-decoration:underline;

  background-color: ${({ theme }) => theme.palette.brandGrey.main};

  align-self: center;

  cursor: pointer;
`
