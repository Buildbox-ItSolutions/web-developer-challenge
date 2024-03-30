import styled from 'styled-components';
import { CSSProperties } from "react";
import theme from '../../Theme';

export const Wrapper  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 41px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  width: 480px;
  height: 305px;
  border-radius: 3px;
  background-color: ${theme.colors.box};
  border:1px solid  ${theme.colors.border};
`;

export const FieldsWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 20px 0 32px 0;
`;

export const ButtonsWrapper  = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  width: 100%;
  height: 41px;

  > button[type=reset] {
    border: none;
    background-color: transparent;
    color: ${theme.colors.link_grey};
    text-decoration: underline;
    text-weigth: bold;
    margin: 0 24px 0 0;
    cursor: pointer;
  }

  > button[type=submit] {
    width: 98px;
    height: 41px;
    background-color: ${theme.colors.dark_lime_green};
    color: ${theme.colors.white};
    border-radius: 8px;
    border: none;
    margin: 0;
    cursor: pointer;

  }
`;

export const Feed = styled.div`
  
`;

export const styleUpload: CSSProperties = {
  minWidth: 88,
  minHeight: 88,
  maxWidth: 88,
  maxHeight: 88,
  margin: 0,
  objectFit: "contain",
  backgroundColor: "transparent",
  borderRadius: 36,
  border: `1px solid ${theme.colors.greyish_brown_three0}`,
  display: "flex",
  alignItems: "center",
}