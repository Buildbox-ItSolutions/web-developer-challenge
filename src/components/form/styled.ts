import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const SPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`

export const SButton = styled(Button)`
  background-color: #473f57 !important;
  color: white !important;
  width: 100px;
  padding: 20px;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  height: 50px !important;
  cursor: pointer;
  @media (max-width: 555px) {
    padding-left: 0px;
  }
  :hover {
    background-color: #716589 !important;
  }
  :disabled {
    background-color: #716589 !important;
  }
`

export const SContainer = styled.div`
  width: 516px;
  height: 353px;
  margin: 40px 425px 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  margin: 0 auto;
`

export const SContainerImage = styled.div`
  width: 100%;
`

export const SImage = styled.img``

export const SImgTrash = styled.img`
  width: 24px;
  height: 24px;
  margin: 32px 150px 48px 16px;
  object-fit: contain;
`

export const SInputName = styled.input`
  width: 436px;
  height: 40px;
  margin: 16px 0 8px;
  padding: 12px 349px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
  color: white;
`

export const SInputDescription = styled.input`
  width: 436px;
  height: 56px;
  padding: 12px 349px 11px 16px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  background-color: #494949;
  color: white;
  border-radius: 8px;
`

export const SContainerButton = styled.div`
  text-align: right;
  margin: 29px;
`

export const SButtonPublish = styled.button`
  width: 100px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 10px auto;
  background-color: #71bb00;
  color: white;  
  border-radius: 8px;
`

export const SButtonDiscard = styled.a`
  width: 60px;
  height: 17px;
  margin: 12px 24px 12px 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;
`
