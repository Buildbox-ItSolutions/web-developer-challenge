import styled from "styled-components";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
export const FormContainer = styled.div`
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  .photo {
    margin: 0 auto;
    width: 68px;
    height: 68px;
    border: 10px solid red;
    border-radius: 50%;
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
  }
  #message {
    overflow: hidden;
    resize: none;
  }
`;

export const StyledInputName = styled(Input)`
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  width: 436px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #494949;
  margin: 16px 0 8px;
  :focus {
    outline: 1px solid #ffffff;
  }
`;
export const StyledMessageTextArea = styled(Textarea)`
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  width: 436px;
  margin-bottom: 32px;
  color: #ffffff;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  resize: none;
  background-color: #494949;
  :focus {
    outline: 1px solid #ffffff;
  }
`;
