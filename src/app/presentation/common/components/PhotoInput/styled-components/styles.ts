import styled from "styled-components";

export const StyledPhotoInput = styled("div")`
  background-color: ${(props) => props.theme.colors.card};
  width: 88px;
  height: 88px;

  margin: 0 8px 16px 190px;

  border: solid 1px ${(props) => props.theme.colors.input};
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  label > img#uploadImg {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  input[type="file"] {
    display: none;
  }
  label > .icon {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: ${(props) => props.theme.colors.card};
    transition: 0.5s;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    label > img#uploadImg {
      width: 24px;
      height: 24px;
      object-fit: contain;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }
  }
`;
