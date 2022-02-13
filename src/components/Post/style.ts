import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 185px;
  max-width: 516px;

  position: relative;

  padding: 32px;
  margin-bottom: 24px;

  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black};
`

export const ButtonDeletePost = styled.button`
  width: 20px;
  height: 20px;

  border: none;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  top: 10px;
  right: 15px;
  position: absolute;

  background-color: transparent;

  &:hover {
    transform: scale(1.05);
  }
`

export const ContentWrapper = styled.div`
  width: 100%;

  margin-top: 32px;
  margin-bottom: 16px;

  display: flex;
`

export const Description = styled.p`
  font-size: 16px;

  color: ${({ theme }) => theme.colors.grayLight};
`

export const InfoAuthor = styled.div`
  margin-bottom: 32px;

  > span {
    font-size: 12px;
    font-weight: 500;

    margin-bottom: 4px;
    display: inline-block;

    color: ${({ theme }) => theme.colors.gray};
  }

  > p {
    font-size: 14px;

    color: ${({ theme }) => theme.colors.grayDark2};
  }
`
