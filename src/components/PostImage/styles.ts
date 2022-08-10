import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px ${(props) => props.theme.colors.border.grayLight};
  background-color: ${(props) => props.theme.colors.bg.blackDark};
  display: grid;
  place-items: center;

  img {
    width: 88px;
  }
`;
