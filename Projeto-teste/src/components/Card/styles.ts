import styled from 'styled-components';

export const Card = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 516px;
  height: 353px;
  margin-top: 134px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 88px;
  height: 88px;
  margin-top: 24px;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  z-index: 1;
`;

export const UserImgPrev = styled.img``;

export const UserImg = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 36px;
`;

export const IconTrash = styled.div`
  position: absolute;
  font-size: 24px;
  top: 30px;
  left: 100px;
  color: #ee6723;

  :hover {
    cursor: pointer;
  }
`;

export const InputImg = styled.input`
  position: absolute;
  width: 88px;
  height: 88px;
  padding: 32px;
  border-radius: 36px;
  outline: none;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  opacity: 0;
  z-index: 2;
`;

export const InputUser = styled.input`
  width: 468px;
  height: 40px;
  margin-top: 16px;
  padding: 12px 16px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
  outline: none;
  border-style: none;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;
  color: #fff;

  ::placeholder {
    width: 101px;
    height: 17px;
    color: #9f9f9f;
  }

  @media (max-width: 800px) {
    width: 376px;
  }

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const InputMessage = styled.textarea`
  width: 468px;
  height: 80px;
  padding: 12px 16px 0px 16px;
  margin-top: 8px;
  border-radius: 8px;
  background-color: #494949;
  resize: none;
  outline: none;
  overflow: auto;
  border-style: none;
  font-size: 14px;
  line-height: 1.29;
  font-family: Roboto;
  text-align: left;
  color: #fff;

  ::placeholder {
    width: 70px;
    height: 17px;
    color: #9f9f9f;
  }

  @media (max-width: 800px) {
    width: 376px;
  }

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const GridButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 468px;
  height: 41px;
  margin-top: 32px;

  @media (max-width: 800px) {
    width: 376px;
  }

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const ButtonClear = styled.div`
  background-color: transparent;
  width: 55px;
  height: 17px;
  margin-right: 24px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: #5f5f5f;
  border: none;
  border-bottom: 1px solid #5f5f5f;

  :hover {
    cursor: pointer;
  }
`;

export const ButtonPost = styled.div`
  width: 98px;
  height: 41px;
  padding: 12px 24px;
  border-radius: 8px;
  border-style: none;
  font-size: 14px;
  background-color: #5f5f5f;
  line-height: 1.29;
  color: #313131;

  :hover {
    cursor: pointer;
    background-color: #71bb00;
    color: #ffff;
  }
`;
