import styled from "styled-components";

export const Image = styled.picture`
  img {
    width: 88px;
    height: 88px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
  }
`;

export const NoImage = styled.div`
  position: relative;
`;

export const NoImageCenter = styled.img`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;
