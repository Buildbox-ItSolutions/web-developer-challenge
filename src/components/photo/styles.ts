import styled from "styled-components";
import theme from "../../Theme";
import ImagePng from "../../assets/img/image.png";



export const Upload = styled.div`
  width: 88px;
  height: 88px;
  margin-top: 10px;
  margin-bottom: 10px;
  object-fit: contain;
  background: transparent url('${ImagePng}') no-repeat center;
  border-radius: 36px ; 
  border: 1px solid ${theme.colors.greyish_brown_three0};
  display: flex;
  align-item: center;
}`;

export const Image = styled.div`

`;