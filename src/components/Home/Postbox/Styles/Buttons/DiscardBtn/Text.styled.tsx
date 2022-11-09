import styled from "styled-components";
import { gray_100 } from "../../../../../../styles/colors/colors";

export const DiscardBtnText = styled.span`
  @media (max-width: 905px) {
    margin: 0;
    display: block;
    margin-top: 10px;
  }

  width: 60px;
  height: 17px;
  margin: 12px 24px 12px 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: ${gray_100};
  text-decoration-line: underline;
  cursor: pointer;
`;
