import styled from "styled-components";

const ImgPost = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  width: 88px;
  height: 88px;
  position: relative;

  div:nth-child(1) {
    cursor: pointer;
    position: absolute;
    opacity: 0;
    transform: translate(-120%, -50%);
    visibility: hidden;
    top: 50%;
    right: -40px;
  }

  div:nth-child(1).active {
    animation: 0.5s FadeIn forwards;
  }

  @keyframes FadeIn {
    from {
      opacity: 0;
      transform: translate(-120%, -50%);
      visibility: hidden;
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  div:nth-child(2) {
    cursor: pointer;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 36px;
    border: 1px solid rgba(155, 155, 155, 0.5);
    overflow: hidden;

    img {
      object-fit: contain;
      width: 100%;
      height: max-content;
    }

    input {
      display: none;
    }
  }
`;

export default ImgPost;
