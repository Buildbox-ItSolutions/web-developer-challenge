"use client";

import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding: 24px 0 24px 0;

  background-color: var(--bg-header);
`;

const TitleStyled = styled.span`
  font-family: "SFProDisplay";
  font-size: 24px;
  font-weight: 900;
  line-height: 29px;
  color: var(--title-header);
`;

const SubTitleStyled = styled.span`
  font-family: "SFProDisplayLight";
  font-size: 12px;
  font-weight: 300;
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
        <TitleStyled>buildbox</TitleStyled>
        <SubTitleStyled>WEB CHALLENGE</SubTitleStyled>
      </Box>
    </HeaderStyled>
  );
}
