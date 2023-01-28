import styled from 'styled-components'

export const CreatePostForm = styled.div`
  width: 100%;
  height: 353px;
  margin-bottom: 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  font-size: 0.875em;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 516px) {
    width: 516px;
  }

`

export const ImgContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .deleteUserImage {
    font-size: 1.5em;
    color: #d65923;
    margin-left: 130px;
    position: absolute;
    cursor: pointer;
  }
`

export const ImgContent = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 36px;
  }

  svg {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`

export const InputName = styled.input`
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  background-color: #494949;
  color: #ffffff;
`

export const InputTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 12px;
  border-radius: 8px;
  background-color: #494949;
  color: #ffffff;
  resize: none;
`

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;

  .descartar {
    color: #5f5f5f;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Button = styled.button`
  width: 98px;
  height: 41px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #71bb00;
  color: #ffffff;
`