import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.gray350};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray300};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.xxs};
  display: flex;
  flex-direction: column;
  padding: 12px;

  > svg {
    align-self: flex-end;
  }
`
export const Content = styled.div`
  display: flex;
  margin-left: 12px;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 32px;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.gray100};

  > span {
    margin-top: 24px;

    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary.gray200};

    > span {
      font-size: 14px;

      color: ${({ theme }) => theme.colors.primary.gray150};
      white-space: nowrap;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
      max-width: 140px;
    }
  }
`
