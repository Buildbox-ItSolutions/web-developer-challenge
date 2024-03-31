import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  position: relative;
  width: clamp(300px, 100%, 32.25rem);

  & > small {
    position: absolute;
    color: var(--warm-grey-two);
    top: -1.5rem;
    left: 0;
    font-weight: 500;
  }
`;

export const Post = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 14.063rem;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: var(--black-two);
  color: #5f5f5f;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  position: relative;
`;


export const ImageContainer = styled.div<{ hasImage: boolean }>`
  width: 5.5rem;
    height: 5.5rem;
    border-radius: 36px;
    border: solid 1px #eee;
    background-color: rgba(75, 75, 75, 0);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: ${(props) => (props.hasImage ? "cover" : "none")};
    }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;

  p {
    font-size: 1rem;
    line-height: 1.25;
    text-align: left;
    color: #9f9f9f;
  }

  div {
    display: flex;
    flex-direction: column;

    small {
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.33;
      letter-spacing: 0.29px;
      color: #5f5f5f;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.29;
      color: var(--warm-grey-two);
    }
  }
`;

export const DeleteIcon = styled.span`
  color: red;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
`;
