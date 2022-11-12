import React from "react";
import { HeaderStyle } from "@/app/presentation/common/components/Header/styled-components";
import ReactComponent from "@/app/presentation/assets/icons/bx-logo.svg";
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <HeaderStyle>
      <img src={ReactComponent} alt="logo" />
    </HeaderStyle>
  );
};

export default Header;
