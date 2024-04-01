import styled from 'styled-components'

export const ImgUploadContainer = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 auto;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px ${(props) => props.theme.imgBorder};
  background-color: rgba(75, 75, 75, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;

  > button {
    position: absolute;
    right: -40px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.delete};

    > svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`

export const ImgLabelContainer = styled.label`
  width: 5.5rem;
  height: 5.5rem;
  padding: 32px;
  object-fit: contain;
  background-color: rgba(75, 75, 75, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.text};
  }

  > input {
    display: none;
  }
`

export const ImgContainer = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  object-fit: contain;
  border-radius: 36px;
`
