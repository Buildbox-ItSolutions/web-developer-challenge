import styled from 'styled-components'
import { animationElementEntry } from '../../utils/animations'

interface ThemeProps {
  theme: {
    white: string
    black: string
    borderColor: string
    grayDark1: string
  }
  photo?: string
}

export const Wrapper = styled.form<ThemeProps>`
  width: 100%;
  max-width: 516px;

  margin: 32px auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 24px;

  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};

  background-color: ${({ theme }) => theme.colors.black};

  @media only screen and (max-width: 420px) {
    width: 90%;
  }
`

export const FieldWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  > span {
    top: 0;
    left: -155px;
    position: relative;
    display: inline-block;
    animation: ${animationElementEntry} ease-in-out 0.3s;
  }

  @media only screen and (max-width: 420px) {
    > span {
      left: -80px;
    }
  }
`

export const PhotoWrapper = styled.div`
  width: 100%;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const InputPhotoElement = styled.label<ThemeProps>`
  width: 88px;
  height: 88px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;

  ${({ photo }) =>
    photo
      ? `background-image: url(${photo});
           background-size: cover;
           background-position: center;
           background-repeat: no-repeat;`
      : ''}

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grayDark1};

  .inputFile {
    display: none;
  }
`

export const ButtonDiscardPhoto = styled.button`
  width: 20px;
  margin-left: 16px;

  border: none;
  background-color: transparent;

  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 420px) {
    width: 40px;
    margin-left: 0;
    margin-top: 16px;

    svg {
      width: 35px;
      height: 35px;
    }
  }
`

export const InputElement = styled.input<ThemeProps>`
  width: 100%;
  height: 40px;
  max-width: 468px;

  padding: 16px;
  margin: 16px 0 8px;

  font-size: 14px;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grayDark1};
`

export const TextAreaElement = styled.textarea<ThemeProps>`
  width: 100%;
  height: 80px;
  max-width: 468px;

  margin: 8px;
  padding: 12px 16px;

  font-size: 14px;
  font-family: 'Roboto', sans-serif;

  border: none;
  outline: none;
  resize: none;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grayDark1};
`

export const ButtonsWrappers = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > button:nth-child(1) {
    margin-right: 32px;
  }

  @media only screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
`
