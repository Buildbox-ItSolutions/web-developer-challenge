import styled from "styled-components";

interface ContainerProps {
  haveImage: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  button#btn-delete {
    background: transparent;
    border: 0;
    margin-left: 0.5rem;
  }

  label {
    border-radius: 36px;
    width: 88px;
    height: 88px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img#icon-image {
      width: 24px;
      height: 24px;
      display: ${({ haveImage }) => (haveImage ? "none" : "block")};
      position: absolute;
    }

    &:hover {
      cursor: pointer;
    }

    input {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 36px;
    }
  }
`;
