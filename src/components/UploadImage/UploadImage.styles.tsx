import styled from 'styled-components'

import { COLORS } from '../../core/constants'

export const Imagem = styled.img`
  border-radius: 33px;
  cursor: pointer;
  height: 88px;
  object-fit: cover;
  width: 88px;
`

export const EmptyImage = styled.img`
  cursor: pointer;
  height: 24px;
  width: 24px;
`

export const TrashImage = styled.img`
  left: 98px;
  position: absolute;
  top: 30px;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 90;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 250;

  img: {
    object-fit: cover;
  }
`

export const InputFile = styled.input`
  display: none;
`

export const Button = styled.button`
  align-items: center;
  background-color: rgba(75, 75, 75, 0);
  border: solid 1px ${COLORS.darkShadeOfGray};

  border-radius: 36px;
  cursor: pointer;
  display: flex;
  height: 88px;
  justify-content: center;
  padding: 0;
  width: 88px;
  label: {
    cursor: 'pointer';
  }
`

export const WrapperImage = styled.div`
  position: relative;
`
