import styled from 'styled-components'
import { COLORS } from '../../../../core/constants'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const Caption = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  color: ${COLORS.shadeOfGray};
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
  color: ${COLORS.lightColor};
  word-break: break-all;
`

export const SendBy = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  color: ${COLORS.mediumDarkShadeOfGray};

  margin-top: 24px;
`

export const Name = styled.span`
  width: 348px;
  word-break: break-all;

  font-size: 14px;
  line-height: 1.29;
  color: ${COLORS.shadeOfGray};
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
    background-color: ${COLORS.darkShadeOfGrey};
    border-radius: 20px;
    border: 3px solid ${COLORS.darkGray};
  }
`

export const Signature = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  @media (max-width: 578px) {
    margin-left: 0;
    margin-top: 18px;
  }
`

export const Delete = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
`
export const WrapperBody = styled.section`
  display: flex;
  margin-top: 32px;
  margin-bottom: 8px;

  @media (max-width: 578px) {
    align-items: center;

    flex-direction: column;
  }
`
