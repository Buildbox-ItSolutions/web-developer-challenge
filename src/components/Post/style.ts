import styled from 'styled-components'
import { animationElementEntry } from '../../utils/animations/index'

interface ThemeProps {
  theme: {
    black: string
    gray: string
    grayLight: string
    grayDark2: string
    borderColor: string
  }
  photo?: string
}

export const Wrapper = styled.div<ThemeProps>`
  width: 100%;
  max-width: 516px;

  position: relative;

  padding: 32px;
  margin-bottom: 24px;

  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${animationElementEntry} ease-in-out 0.3s forwards;

  background-color: ${({ theme }) => theme.colors.black};

  @media only screen and (max-width: 420px) {
    width: 90%;
    padding: 24px;
  }
`

export const ButtonDeletePost = styled.button`
  width: 30px;
  height: 30px;

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

  > svg {
    width: 25px;
    height: 25px;
  }

  @media only screen and (max-width: 420px) {
    width: 35px;
    height: 35px;

    > svg {
      width: 35px;
      height: 35px;
    }
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const Description = styled.p<ThemeProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayLight};

  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`

export const InfoAuthor = styled.div<ThemeProps>`
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

export const PhotoPost = styled.div<ThemeProps>`
  width: 88px;
  height: 88px;

  flex-shrink: 0;
  margin-right: 32px;

  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors.gray};

  ${({ photo }) =>
    photo
      ? `background-image: url(${photo});
           background-size: cover;
           background-position: center;
           background-repeat: no-repeat;`
      : ''}

  @media only screen and (max-width: 420px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`
