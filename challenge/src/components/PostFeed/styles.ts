import styled, { css } from 'styled-components'

interface FormProps {
  hasData?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
`

export const FormPanel = styled.form`
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
  margin: 8px 0 15px;
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

export const ButtonSubmit = styled.button<FormProps>`
  width: 98px;
  height: 41px;
  margin: 0 24px 0 0;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  border: none;
  background-color: #5f5f5f;
  color: #313131;
  ${(props) => props.hasData && css`background-color: greenyellow;`}
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

export const SpanError = styled.span`
  font-size: 12px;
  color: red;
  font-weight: 700;
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 81px;
  width: 100%;
`

export const Title = styled.div`
  width: 516px;
  margin-bottom: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;    
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 516px;
  height: 225px;
  padding: 12px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;  
  margin-bottom: 16px;
`

export const PostDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const Delete = styled.button`
  height: 20px;
  width: 20px;
  border: none;
  background: url('./src/assets/delete.png') no-repeat;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 193px;
`

export const PostImage = styled.div`
  width: 88px;
  height: 100%;
`

export const NoImage = styled.div`
  width: 88px;
  height: 88px;
  padding: 24px;
  margin-top: 24px;
  border-radius: 36px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  background: url('./src/assets/image.png') no-repeat center;  
`

export const Image = styled.img`
  width: 88px;
  height: 88px;
  margin-top: 24px;
  border-radius: 36px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  margin: 24px 12px 24px 32px;
`

export const MessageBody = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 1.25;
  color: #9f9f9f;
`

export const AuthorLabel = styled.span`
  margin-top: 24px;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
`

export const Author = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;  
`
