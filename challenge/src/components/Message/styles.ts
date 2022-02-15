import styled, { css } from 'styled-components'

interface ImageProps {
  imageSrc?: string
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
`

export const MessagePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 516px;
  height: 353px;
  background: #313131;
`

export const ImageUpload = styled.input.attrs({
  type: 'file',
  accept: 'image',
  id: 'file-input'
})`
  display: none;
`

export const ImageLabelUpload = styled.label.attrs({
  htmlFor: 'file-input'  
})`
  width: 88px;
  height: 88px;
  padding: 24px;
  margin-top: 24px;
  border-radius: 36px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  background: url('./src/assets/image.png') no-repeat center;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
`

export const ImageView = styled.img`
  width: 88px;
  height: 88px;
  margin-top: 24px;
  border-radius: 36px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`

export const ImageDelete = styled.button`
  height: 24px;
  width: 24px;
  margin: 56px 0 0 16px;
  border: none;
  outline: none;  
  background: url('./src/assets/trash.png') no-repeat center;
`
export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px 0 24px;
`

export const Input = styled.input`
  height: 40px;
  margin: 16px 0 8px;
  padding: 12px 16px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
  border: none;  
  color: #fff;
`
export const TextArea = styled.textarea`
  height: 80px;
  margin: 8px 0 32px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #494949;
  color: #fff;
  line-height: 18px;
  resize: none;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  width: 98px;
  height: 41px;
  margin: 0 24px 0 0;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  border: none;
  background-color: #5f5f5f;
  color: #313131;
`
export const ButtonCancel = styled.button`
  width: 98px;
  height: 41px;
  margin: 0 24px 0 0;
  padding: 12px 24px;
  border: none;
  background: transparent;
  text-decoration: underline;
  color: #5f5f5f;
`
