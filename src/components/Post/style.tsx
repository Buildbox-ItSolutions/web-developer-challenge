import styled from 'styled-components'

export const PostHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
`

export const PostHeaderClose = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
`
export const PostHeaderAreaContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`
export const PostAreaFigure = styled.div`
  width: 88px;
  height: 88px;
  margin-right: 32px;
`

export const PostAreaMessage = styled.div`
  flex: 1;
`
export const PostParagraph = styled.p`
  color: #9f9f9f;
  font-size: 16px;
`
export const PostAreaParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const PostAuthor = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: column;

  & > .post__author-invited {
    font-size: 12px;
    color: var(--black-four);
  }
  & > .post__author-name {
    color: #7a7a7a;
    font-size: 14px;
  }
`
