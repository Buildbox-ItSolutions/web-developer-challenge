import styled from 'styled-components'

export const PostAreaAddPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PostAreaAddFigure = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostAreaRemoveFigure = styled.div`
  position: absolute;
  right: 33%;
`

export const PostAreaSelectFigure = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid var(--black-three);
`
export const PostAreaImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 38px;
  object-fit: cover;
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
`
export const InputFile = styled.input`
  display: none;
`
