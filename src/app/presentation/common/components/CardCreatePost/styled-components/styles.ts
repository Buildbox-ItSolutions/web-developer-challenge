import styled from "styled-components";

export const CardContainer = styled("form")`
  margin: 40px 425px 56px;
  display: flex;
  flex-direction: column;

  div#feedText {
    width: 36px;
    margin-top: 30px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
  }
  > main {
    width: 516px;
    height: 423px;

    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    .preview-image {
      display: flex;
      button {
        background-color: ${(props) => props.theme.colors.card};

        margin-left: 0.6rem;
        border: none;

        &:hover {
          cursor: pointer;
        }

        img {
          width: 20px;
        }
      }
    }
    > div#upload_img {
      width: 88px;
      height: 88px;
      margin: 0 8px 16px 190px;
      padding: 32px;
      object-fit: contain;
      border-radius: 36px;
      border: solid 1px #4b4b4b;
      background-color: rgba(75, 75, 75, 0);
      > input#file-input {
        display: none;
      }
    }

    @media (max-width: 600px) {
      & {
        width: 90vw;
      }

      .buttons {
        width: 100%;
        button {
          height: 40px;
          padding: 0 8px;
        }
      }
    }
  }
`;

export const CardImageUpload = styled("input")`
  width: 88px;
  height: 88px;
  margin: 0 8px 16px 190px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
`;

export const CardInput = styled("input")`
  width: 468px;
  height: 40px;
  padding-right: 20px;
  border-radius: 8px;
  background-color: #494949;
  padding-left: 20px;
  color: white;
  border: none;

  ::placeholder {
    width: 120px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
  }
`;

export const CardInputTextArea = styled("textarea")`
  width: 468px;
  height: 80px;
  margin: 8px 0 32px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  color: white;
  background-color: #494949;
  ::placeholder {
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
  }
`;

export const CardButton = styled("button")`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #5f5f5f;
  font-size: 13px;
  /* cursor: not-allowed; */
`;

export const CardDescart = styled("span")`
  width: 60px;
  height: 17px;
  margin: 12px 24px 12px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;
  text-decoration: underline;
  cursor: not-allowed;
`;

export const CardContainerButton = styled("div")`
  display: flex;
  justify-content: flex-end;
`;
