import { XCircle } from "phosphor-react";
import styled from "styled-components";
import { Spacing } from "../../../styles/global";
import { cardFieldBorderCss, cardFieldFormCss } from "../index.style";

export const ReadPostCardContainerStyled = styled.div`
  padding: ${Spacing.Large};
  ${cardFieldBorderCss}
  ${cardFieldFormCss}
`;

export const CloseButton = styled(XCircle)`
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  top: -10px;
  left: calc(100% - 8px);
  color: ${(props) => props.theme.colors.red[500]};
`;
