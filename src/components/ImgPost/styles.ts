import styled from "styled-components";

const ImgPost = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;

  img {
    object-fit: contain;
    width: 100%;
    height: max-content;
  }

  div {
    cursor: pointer;
    width: 88px;
    height: 88px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 36px;
    border: 1px solid rgba(155, 155, 155, 0.5);
    overflow: hidden;
  }

  input {
    display: none;
  }
`;

export default ImgPost;
