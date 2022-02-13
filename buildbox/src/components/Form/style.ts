import styled from "styled-components";

export const FormContainer = styled.div`
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  .defaultPhotoContainer {
    margin: 0 auto;
    width: 86px;
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #4b4b4b;
    border-radius: 36px;
    cursor: pointer;
  }
  .profilePhotoContainer {
    display: flex;
    align-items: center;
    .trash {
      height: 24px;
      width: 24px;
      cursor: pointer;
      transition: 0.2s;
      :hover {
        transform: scale(1.2);
      }
    }
    @media screen and (max-width: 570px) {
      justify-content: center;
    }
  }
  .buttons {
    float: right;
    height: 41px;
  }
  width: 468px;
  height: 305px;
  background-color: #313131;
  padding: 24px;
  .remove {
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    width: 60px;
    height: 17px;
    margin: 12px 24px 12px 0;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 1.29;
    color: #5f5f5f;
    border: none;
    background-color: inherit;
    :hover {
      color: #797979;
    }
  }
  @media screen and (max-width: 570px) {
    margin: 0 auto;
    width: 80vw;
  }
`;
