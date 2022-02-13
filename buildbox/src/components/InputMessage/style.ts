import { Textarea } from "@chakra-ui/textarea";
import styled from "styled-components";

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
  @media screen and (max-width: 570px) {
    display: flex;
    margin: 0 auto 32px;
    width: 90%;
  }
`;
