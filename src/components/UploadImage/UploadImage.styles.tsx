import styled from 'styled-components'
import { COLORS } from '../../core/constants'

export const Imagem = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 33px;
  object-fit: cover;
`

export const EmptyImage = styled.img`
  width: 24px;
  height: 24px;
`

export const TrashImage = styled.img`
  position: absolute;
  top: 30px;
  left: 98px;
`

export const Container = styled.div`
  width: 250;
  height: 90;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img: {
    object-fit: cover;
  }
`

export const InputFile = styled.input`
  display: none;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: solid 1px ${COLORS.darkShadeOfGray};
  background-color: rgba(75, 75, 75, 0);
  padding: 0;
  cursor: pointer;
  label: {
    cursor: 'pointer';
  }
`

export const WrapperImage = styled.div`
  position: relative;
`
