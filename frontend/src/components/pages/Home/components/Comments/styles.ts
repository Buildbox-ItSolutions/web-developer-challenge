// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  max-width: 516px;
  width: 100%;
  height: fit-content;

  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${theme.colors.gray_700};

  border: solid 1px #3b3b3b;
  border-radius: 3px;
`

export const ButtonDeleteContent = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 12px;
  padding-right: 12px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`


export const ButtonDelete = styled.button`
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

export const Content = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ColumnImage = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Image = styled.div`
  width: 88px;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;
  padding: 32px;

  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
`

export const ColumnInfo = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 32px;

  overflow: hidden;
	overflow-wrap: break-word;

  p {
    margin-bottom: 24px;

    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: ${theme.colors.gray_150};
  }

  span {
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: ${theme.colors.gray_350};
  }

  span:last-child {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`
