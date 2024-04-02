"use client";

import { sf_pro_display, sf_pro_display_light } from "@/styles/fonts";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding: 24px 0 24px 0;

  background-color: var(--bg-header);
`;

const TitleStyled = styled.span`
  font-size: 24px;
  line-height: 29px;
  color: var(--title-header);
`;

const SubTitleStyled = styled.span`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.29px;
  color: var(--subtitle-header);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Box>
        <TitleStyled className={sf_pro_display.className}>buildbox</TitleStyled>
        <SubTitleStyled className={sf_pro_display_light.className}>
          WEB CHALLENGE
        </SubTitleStyled>
      </Box>
    </HeaderStyled>
  );
}
