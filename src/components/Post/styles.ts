import styled from 'styled-components'

export const PostWrapper = styled.div`
  background: var(--backgroundPost);
  border: 1px solid #3b3b3b;
  border-radius: 0.187rem;
  padding: 3.5rem 1.5rem 2rem 2.5rem;
  position: relative;

  display: grid;
  grid-template-areas: 'avatar content';
  grid-template-columns: 30% 70%;

  @media (max-width: 360px) {
    & {
      grid-template-areas: 'avatar' 'content';
      grid-template-columns: 1fr;
      padding: 2rem 1.5rem 2rem 2rem;
      gap: 1rem;
      justify-items: center;
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.75rem;
    cursor: pointer;
    transition: 0.2s;

    img {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      filter: brightness(1.3);
    }
  }

  > img {
    grid-area: avatar;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 40%;
    border: 1px solid #3b3b3b;
  }
`

export const PostContent = styled.div`
  grid-area: content;

  @media (max-width: 360px) {
    & {
      justify-self: start;
    }
  }

  p {
    color: var(--white900);
    line-height: 1.25rem;
    margin-bottom: 2rem;
  }

  > span:nth-child(1) {
    display: block;
    font-size: 0.75rem;
    color: var(--white100);
    line-height: 1rem;
  }

  > span:nth-child(2) {
    display: block;
    font-size: 0.875rem;
    color: var(--white500);
    line-height: 1.25rem;
  }
`
