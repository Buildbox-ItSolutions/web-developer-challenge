import styled from "styled-components";

export const ContainerPost = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 56px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const GridPost = styled.div`
  background-color: #313131;
  border: solid 1px #3b3b3b;
  border-radius: 3px;
  max-width: 516px;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const TextFeedPost = styled.span`
  width: 100%;
  max-width: 516px;
  margin-bottom: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #7a7a7a;
`;

export const HeaderRemovePost = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 12px;
  background-color: transparent;
`;

export const ButtonRemovePost = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

export const GridPostInfo = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;

  @media (max-width: 767px) {
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const TextoPublishPost = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  width: 348px;
  color: #9f9f9f;
  margin-bottom: 24px; 
  word-wrap: break-word;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImgPublishPost = styled.img`
  object-fit: cover;
  height: 88px;
  width: 88px;
  border-radius: 36px;
`;

export const RemoveImgPublishPost = styled.img`
  object-fit: cover;
`;

export const GridImgPublish = styled.div`
  height: 88px;
  width: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background: #343434;
  @media (max-width: 767px) {
    margin-left: 30px;
    margin-bottom: 8px;
  }
`;

export const GridTextsPost = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-bottom: 32px;
`;

export const TextSenderPost = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  color: #7a7a7a;
`;

export const TextNamePost = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`;

export const GridPusblishByWhom = styled.div`
  display: flex;
  flex-direction: column;
`;
