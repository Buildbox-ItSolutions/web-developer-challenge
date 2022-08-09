import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #343434;
  height: auto;
  min-height: 100vh;
`;

export const ContainerBody = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 0 0 170px;
  background-color: #343434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .containerFeed {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5%;
    h5 {
      font-family: Roboto;
      font-size: 17px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      text-align: left;
      color: #7a7a7a;
    }
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 93px;
  background-color: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #232323;
  h2 {
    font-family: SFProDisplay;
    font-size: 24px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    color: #71bb00;
  }
  h3 {
    font-family: SFProDisplay;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: 0.29px;
    text-align: left;
    color: #707070;
  }
`;
export const TextSmall = styled.h4`
  font-family: Roboto;
  font-size: ${(props) => (props.small ? "12px" : "14px")};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
`;
export const DisplayBoxContainer = styled.div`
  width: 77vw;
  max-width: 516px;
  padding: 24px;
  min-height: 180px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2%;

  .ContainerImg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;

    input[type="file"] {
      display: none;
    }
    label {
      text-align: center;
      display: block;
      cursor: pointer;
    }
  }
  .ContainerInputs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .ContainerButtons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 3%;
    margin-top: 7%;
  }
  .flexComent {
    display: flex;
    justify-content: space-around;
  }
  .boxComent {
    width: 70%;
    > p {
      font-family: Roboto;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: left;
      color: #9f9f9f;
    }
  }
  .sentTo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 5%;
    h3 {
      font-family: Roboto;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      text-align: left;
      color: #7a7a7a;
    }
  }
  .BoxTrash {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -28px;
    right: -12px;
  }
  @media (max-width: 425px) {
    .flexComent {
      flex-direction: column;
    }
    .boxComent {
      width: 100%;
    }
    .BoxTrash {
      top: -10px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 98px;
  height: 41px;
  object-fit: contain;
  border-radius: 8px;
  background-color: ${(props) => (props.disable ? "#5f5f5f" : "#71bb00")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4%;
  p {
    color: ${(props) => (props.disable ? "#313131" : "#fff")};
  }
`;

export const Input = styled.input`
  width: 90%;
  max-width: 468px;
  height: 40px;
  border-radius: 8px;
  background-color: #494949;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  padding: 5px 5px;
  border: 0;
`;
export const BoxText = styled.textarea`
  width: 90%;
  max-width: 468px;
  resize: vertical;
  padding: 5px 5px;
  border-radius: 8px;
  background-color: #494949;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  border: 0;
`;

export const Imagem = styled.img`
  width: ${(props) => (props.start ? "24px" : " 88px")};
  height: ${(props) => (props.start ? "24px" : " 88px")};
  border-radius: 36px;
`;
export const ImagemCOntainerCircle = styled.div`
   width: 88px;
  height: 88px;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const IconTrash = styled.img`
  width: 20px;
  height: 20px;
`;
