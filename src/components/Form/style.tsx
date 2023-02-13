import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 37vw;
  max-width: 550px;
  background-color: #3b3b3b;
  padding: 24px;
  gap: 40px;
  margin: 40px auto 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: white;
  gap: 24px;
`;

export const ImgWrapper = styled.div`
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  margin: 0 auto 16px;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  cursor: pointer;
  position: relative;
`;

export const FileInput = styled.input`
  opacity: 0;

  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";

  /* IE 5-7 */
  filter: alpha(opacity=0);

  /* Netscape or and older firefox browsers */
  -moz-opacity: 0;

  /* older Safari browsers */
  -khtml-opacity: 0;
  font-size: 0;
  position: absolute;
  width: 88px;
  height: 88px;
  cursor: pointer;
  z-index: 99;
`;

export const UploadedImg = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 36px;
`;

export const NameInput = styled.input`
  width: 34vw;
  max-width: 470px;
  border-radius: 8px;
  padding: 12px;
  outline: none;
  background-color: #494949;
  color: #9f9f9f;
  outline: none;
  margin-bottom: 8px;
  border: none;
  font-family: "Roboto";
`;

export const MessageInput = styled.textarea`
  width: 34vw;
  max-width: 470px;
  border-radius: 8px;
  padding: 12px;
  outline: none;
  background-color: #494949;
  color: #9f9f9f;
  outline: none;
  margin-bottom: 8px;
  border: none;
  font-family: "Roboto";
  min-height: 80px;
  resize: none;
`;
