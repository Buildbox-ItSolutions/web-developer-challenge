import styled from "styled-components";
import theme from "../../Theme";
import ImagePng from "../../assets/img/image.png";

export const Upload = styled.div`
  min-width: 88px;
  min-height: 88px;
  max-width: 88px;
  max-height: 88px;
  margin: 0;
  object-fit: contain;
  background: transparent url('${ImagePng}') no-repeat center;
  border-radius: 36px ; 
  border: 1px solid ${theme.colors.greyish_brown_three0};
  display: flex;
  align-item: center;
}`;

// export const Image = styled.div`

// `;