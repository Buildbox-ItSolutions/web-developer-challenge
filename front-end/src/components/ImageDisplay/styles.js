import styled from "styled-components";

const Image = styled.img `
  max-width: 88px;
  max-height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.hasImage ? "36px" : "none"};
`;

export {
    Image,
};
