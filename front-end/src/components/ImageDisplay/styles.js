import styled from "styled-components";

const Image = styled.img `
  max-width: 88px;
  max-height: 88px;
  width: ${props => props.hasImage ? "88px" : "auto"};
  height: ${props => props.hasImage ? "88px" : "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.hasImage ? "36px" : "none"};
  object-fit: cover;
`;

export {
    Image,
};
