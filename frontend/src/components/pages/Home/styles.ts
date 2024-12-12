// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

export const ContentHeader = styled.div`
  width: 100%;
  height: 93px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding-bottom: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 12px;
  }
`

export const FormCard = styled.form`
  max-width: 516px;
  width: 100%;
  height: fit-content;

  margin-top: 41px;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${theme.colors.gray_700};

  border: solid 1px #3b3b3b;
  border-radius: 3px;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
  }
`

export const PhotoContent = styled.div`
  width: 100%;
  height: 88px;

  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Photo = styled.div`
  width: 88px;
  height: 88px;

  padding: 32px;
  margin-right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);

  transition: 0.5s;
  &:hover {
    filter: brightness(75%)
  }

  input {
    width: 88px;
    height: 88px;

    border-radius: 36px;

    font-size:0px;

    opacity: 0;
    -moz-opacity: 0;
    position:absolute;

    cursor: pointer;
  }
`

export const Trash = styled.button`
  border: none;
  background: transparent;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    filter: brightness(75%);
  }

  @media screen and (max-width: 768px) {
    cursor: none;
  }
`

export const RowButton = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`
