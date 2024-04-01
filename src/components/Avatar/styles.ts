import styled, { css } from "styled-components";
import { AvatarStyledProps } from "./types";
import Icon from "@components/Icon";

export const Wrapper = styled.div`
  position: relative;
`;

export const AvatarStyled = styled.div<AvatarStyledProps>`
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;

  ${(props) => css`
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: ${props.radius || 0}px;
    border: 1px solid ${props.theme.colors.greyish_brown};
  `}

  &.selection {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const BtnClean = styled(Icon)`
  top: 50%;
  right: 0;
  cursor: pointer;
  position: absolute;
  transition: all 0.5s ease-in-out;
  transform: translate(calc(100% + 16px), -50%);

  &.visible {
    opacity: 1;
  }

  &.hidden {
    opacity: 0;
  }

  &.disabled {
    display: none;
  }
`;
