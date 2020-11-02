import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 516px;
  margin-top: 80px;
  position: relative;
  span {
    position: relative;
    top: -10px;
  }
  @media (max-width: 560px) {
    max-width: 400px;
  }
  @media (max-width: 400px) {
    width: 330px;
  }
`;

export const Post = styled.div`
  position: relative;
  height: 100%;
  overflow-wrap: break-word;
  max-width: 516px;
  max-height: 100%;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  padding: 56px 24px 24px 24px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  transition: 200ms ease-in-out;
  animation: fadein 200ms ease-in-out;
  word-wrap: break-word;
  @media (max-width: 560px) {
    max-width: 450px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
  }

  :hover {
    border: solid 1px #4b4b4b;
    transform: scale(1.01);
  }
  @keyframes fadein {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Content = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 25px;
`;
export const SendBy = styled.div`
  margin-top: 20px;
  flex: 1;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #5f5f5f;
  font-size: 12px;
  font-weight: 500;

  #name {
    width: 103px;
    height: 17px;
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
`;
export const ImageAvatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 40px;
  object-fit: contain;
  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;
export const Message = styled.p`
  flex: 3;

  padding-right: 40px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
  width: 350px;

  @media (max-width: 560px) {
    max-width: 300px;
  }

  @media (max-width: 400px) {
    width: 200px;
  }
`;

export const Exit = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;

  :hover {
    transform: scale(1.03);
  }
`;
export const ListPost = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media (max-width: 560px) {
    max-width: 400px;
  }
  @media (max-width: 400px) {
    width: 320px;
  }
`;
