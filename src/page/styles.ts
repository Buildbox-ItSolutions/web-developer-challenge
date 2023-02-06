import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > section {
    width: 516px;
    margin: 0 auto;
    margin-top: 134px;

    @media (max-width: 542px) {
      width: 100%;
    }

    @media (max-width: 562px) {
      padding: 24px;
    }

    @media(max-width: 414px) {
      width: 300px;
      padding: 0;
    }
  }

  h1 {
    margin-top: 56px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #7a7a7a;
  }
`

export const ListCard = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
`

export const FormContainer = styled.form`
  height: 353px;
  max-width: 100%;

  border-radius: 3px;
  padding: 24px;
  border: solid 1px #3b3b3b;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  background: #313131;

  label,
  img {
    border-radius: 36px;
    object-fit: cover;
    width: 88px;
    height: 88px;
  }

  label {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;

    transition: 0.2s;
  }

  input {
    margin-bottom: 8px;

    ::placeholder {
      color: #9f9f9f;
      line-height: 1.29;
      font-size: 14px;
      font-weight: normal;
      letter-spacing: normal;
      font-stretch: normal;
    }
  }

  input,
  textarea {
    outline: none;
    color: white;
    background: #494949;
    border-radius: 8px;
    max-width: 100%;
    border: none;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: normal;
  }

  textarea {
    height: 80px;
    resize: none;
    margin-bottom: 32px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }
`

export const ButtonPublicData = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;

  :hover {
    background: #4f5f5f;
  }
`

export const ButtonDeleteData = styled.button`
  border: none;
  border-bottom: solid 1px #4f5f5f;
  color: #5f5f5f;
  padding: 0;
  background: none;

  display: flex;
  align-items: flex-end;

  :hover {
    color: #4f5f5f;
  }
`
export const InputFile = styled.input`
  display: none;
`

export const PostFormImage = styled.img`
  &[src='profileImage'] {
    width: 8px;
    height: 8px;
  }
`
export const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  > button {
    background: none;
    padding: 0;
    border: none;
    position: absolute;
    left: 286px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 606px) {
    position: static;

    button {
      margin-left: 16px;
      position: static;
    }
  }
`
