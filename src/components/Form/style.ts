import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 100%;
  max-width: 516px;

  margin: 24px auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 24px;

  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.borderColor};

  background-color: ${({ theme }) => theme.colors.black};
`

export const PhotoWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputPhotoElement = styled.label`
  width: 88px;
  height: 88px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;

  background-color: transparent;

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grayDark1};

  .inputFile {
    display: none;
  }
`

export const ButtonDiscardPhoto = styled.button`
  width: 20px;
  margin-left: 24px;

  border: none;
  background-color: transparent;

  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const InputElement = styled.input`
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

export const TextAreaElement = styled.textarea`
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

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > button:nth-child(1) {
    margin-right: 32px;
  }
`
