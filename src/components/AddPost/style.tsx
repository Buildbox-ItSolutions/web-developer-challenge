import styled from 'styled-components'

export const PostAreaAddPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PostAreaAddFigure = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostAreaRemoveFigure = styled.div`
  position: absolute;
  right: -40px;
  top: 33%;
`

export const PostAreaImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 38px;
  object-fit: contain;
`
export const PostAreaInputs = styled.div`
  width: 100%;
  margin-top: 16px;
`
export const PostAreaInput = styled.div`
  margin-bottom: 8px;
`
export const PostAreaButton = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 400px) {
    & {
      flex-direction: column;
      margin-top: 10px;
    }
  }
`
export const InputFile = styled.input`
  display: none;
`
