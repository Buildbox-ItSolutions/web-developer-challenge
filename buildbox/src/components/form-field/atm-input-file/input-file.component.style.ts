import { Image, TrashSimple } from "phosphor-react";
import styled from "styled-components";
import { Border, Spacing } from "../../../styles/global";

export const InputFileStyled = styled.input`
  display: none;
`;
export const InputFileContainer = styled.div`
  width: 88px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 88px;
  border-radius: ${Border.RadiusLarge};
  background-image: url(http://localhost:5173/465cca45-4d71-4d4a-8c31-fbce35cb40e3);
  border: ${(props) => `${Border.Width} solid ${props.theme.colors.gray[100]}`};
`;

export const Landscape = styled(Image)`
  color: ${(props) => props.theme.colors.gray[100]};
  width: 24px;
  height: 24px;
`;

export const Trash = styled(TrashSimple)`
  color: ${(props) => props.theme.colors.red[500]};
  cursor: pointer;
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing.XSmall};
  justify-content: center;
  cursor: pointer;
`;
