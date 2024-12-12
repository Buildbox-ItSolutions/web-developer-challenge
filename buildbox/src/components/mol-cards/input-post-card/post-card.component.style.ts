import styled from "styled-components";
import { Spacing } from "../../../styles/global";
import { cardFieldBorderCss, cardFieldFormCss } from "../index.style";

export const InputPostCardStyled = styled.div`
  ${cardFieldBorderCss}
  ${cardFieldFormCss}
  padding: ${Spacing.Large};
  min-height: 353px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red[500]};
  margin-top: ${Spacing.XSmall};
`;
