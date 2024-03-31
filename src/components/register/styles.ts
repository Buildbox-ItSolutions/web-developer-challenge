import styled from 'styled-components';
import theme from '../../Theme';
import { CSSProperties } from "react";

const RegisterWrapper = styled.section`
  width: 516px;
  margin: 41px auto 0 auto;
  padding: 24px;
  border-radius: 3px;
  border:1px solid  ${theme.colors.border};
  background-color: ${theme.colors.box};

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const WrapperButtons = styled.div`
  width: 100%;
  height: 41px;
  margin-top: 2rem;
  text-align: right;
`;

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;

  &[type=submit] {
    width: 98px;
    height: 41px;
    background-color: ${theme.colors.dark_lime_green};
    color: ${theme.colors.white};
    border-radius: 8px;
    border: none;
    margin: 0;
  }

  &[type=reset] {
    border: none;
    background-color: transparent;
    color: ${theme.colors.link_grey};
    text-decoration: underline;
    text-weigth: bold;
    margin: 0 24px 0 0;
  }
`;

const ImageUpload: CSSProperties = {
    minWidth: 88,
    minHeight: 88,
    maxWidth: 88,
    maxHeight: 88,
    marginBottom: "1rem",
    objectFit: "contain",
    backgroundColor: "transparent",
    borderRadius: 36,
    border: `1px solid ${theme.colors.greyish_brown_three0}`,
    display: "flex",
    alignItems: "center",
  }

export { RegisterWrapper, WrapperButtons, Button, ImageUpload };
