import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[4]};

  & .animate-pulse {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing[8]};
    padding: ${(props) => props.theme.spacing[4]};
    width: 32.25rem;
    height: 14.0625rem;
    border-radius: 3px;
    border: solid 1px ${({ theme }) => theme.colors.gray[400]};
    background-color: ${({ theme }) => theme.colors.gray[300]};

    @media screen and (max-width: 640px) {
      width: 100%;
      height: 100%;
    }

    & .animate-pulse-thumb {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: ${(props) => props.theme.spacing[8]};
      object-fit: cover;
      flex-shrink: 0;
      background-color: ${({ theme }) => theme.colors.gray[200]};
    }

    & .animate-pulse-texts {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spacing[2]};

      > span {
        width: 21.75rem;
        height: 1rem;
        background-color: ${({ theme }) => theme.colors.gray[200]};
        border-radius: ${(props) => props.theme.spacing[3]};
      }

      > div {
        margin-top: ${(props) => props.theme.spacing[2]};
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.spacing[2]};
        > span {
          background-color: ${({ theme }) => theme.colors.gray[200]};
          border-radius: ${(props) => props.theme.spacing[3]};
        }
        > :first-child {
          width: 8.5rem;
          height: 1rem;
        }
        > :last-child {
          width: 13.5rem;
          height: 1rem;
        }
      }
    }
  }
`
