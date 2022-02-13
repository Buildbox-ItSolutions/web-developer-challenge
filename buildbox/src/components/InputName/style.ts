import { Input } from "@chakra-ui/input";
import styled from "styled-components";

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
  @media screen and (max-width: 570px) {
    display: flex;
    margin: 16px auto 8px;
    width: 90%;
  }
`;
