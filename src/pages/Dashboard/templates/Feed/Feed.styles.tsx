import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const Caption = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  color: #7a7a7a;
  margin-top: 56px;
  margin-bottom: 8px;
`

export const Imagem = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 33px;
  object-fit: cover;
`

export const Message = styled.span`
  width: 348px;

  font-size: 16px;
  line-height: 1.25;
  color: #9f9f9f;
  word-break: break-all;
`

export const SendBy = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  color: #5f5f5f;

  margin-top: 24px;
`

export const Name = styled.span`
  width: 348px;
  word-break: break-all;

  font-size: 14px;
  line-height: 1.29;
  color: #7a7a7a;
  margin-top: 2px;
`

export const SectionPost = styled.section`
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #313131;
    border-radius: 20px;
    border: 3px solid #343434;
  }
`

export const Signature = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`

export const Delete = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
`
export const WrapperBody = styled.section`
  display: flex;
  margin-top: 32pxflex;
  margin-bottom: 8px;
`
