import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
    text-transform: none;
    background-color: #71bb00;
    color: #ffffff;
    font-size: 14px;
    line-height: 17px;
    padding: 12px 24px;
    border-radius: 8px;
  }
  &&:hover {
    background-color: #5f9d00;
  }
  &&:disabled {
    background: #5f5f5f;
    color: #313131;
  }
`;
