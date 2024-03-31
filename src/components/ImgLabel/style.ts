import styled from 'styled-components'

export const ImgLabelContainer = styled.div``

export const ImgContainer = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 8px 16px 190px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px ${(props) => props.theme.imgBorder};
  background-color: rgba(75, 75, 75, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  > svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.text};
  }
`
