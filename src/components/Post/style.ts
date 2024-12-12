import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 32.25rem;
  background-color: ${(props) => props.theme.post};
  border: 1px solid ${(props) => props.theme.border};
  padding: 1.5rem;
  border-radius: 3px;
  display: flex;
  position: relative;
  margin-bottom: 1rem;

  @media (max-width: 516px) {
    width: 90%;
  }

  > img {
    width: 5.5rem;
    height: 5.5rem;
    margin: 24px 32px 16px 0;
    object-fit: contain;
    border-radius: 36px;
  }

  > svg {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => props.theme.delete};
    cursor: pointer;
  }
`

export const PostInfoContainer = styled.div`
  > p {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.25;
    text-align: left;
    color: ${(props) => props.theme.text};
    margin: 1.5rem 0;
    overflow-wrap: break-word;
    word-break: break-all;
  }

  > h3 {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: ${(props) => props.theme.credits};
  }

  > span {
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.29;
    text-align: left;
    color: ${(props) => props.theme.author};
    overflow-wrap: break-word;
    word-break: break-all;
  }
`
