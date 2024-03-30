import styled from "styled-components";
import Input from "./Input";

const TextArea = styled(Input).attrs({ as: "textarea" })`
  height: 80px;
  resize: none;
`;

export default TextArea;
