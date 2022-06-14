import styled from 'styled-components';

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  width: 516px;
  height: 353px;
  margin: 134px 425px 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  margin: 0 8px 16px 190px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  z-index: 1;
`;

export const UserImgPrev = styled.img``;

export const UserImg = styled.img`
  position: relative;
  z-index: 1;
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 36px;
`;

export const InputImg = styled.input`
  position: absolute;
  width: 88px;
  height: 88px;
  margin: 0 8px 16px 190px;
  padding: 32px;
  object-fit: contain;
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
  margin: 16px 0 8px;
  padding: 12px 16px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
  outline: none;
  border-style: none;

  ::placeholder {
    width: 101px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.29;
    text-align: left;
    color: #9f9f9f;
  }
`;

export const InputMessage = styled.textarea`
  width: 468px;
  height: 80px;
  margin: 8px 0 32px;
  padding: 12px 16px 0px 16px;
  border-radius: 8px;
  background-color: #494949;
  resize: none;
  outline: none;
  overflow: auto;
  border-style: none;

  ::placeholder {
    width: 70px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    text-align: left;
    color: #9f9f9f;
  }
`;

export const GridButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 41px;
`;

export const ButtonDel = styled.button`
  background-color: transparent;
  width: 60px;
  height: 17px;
  margin: 12px 24px 12px 0;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: #5f5f5f;
  border: none;
  border-bottom: 1px solid #5f5f5f;

  :hover {
    /* cursor: pointer; */
  }
`;

export const ButtonPost = styled.button`
  width: 98px;
  height: 41px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #5f5f5f;
  border-style: none;
  font-size: 14px;
  line-height: 1.29;
  color: #313131;

  :hover {
    /* cursor: pointer; */
  }
`;
