import React from "react";
import { LayoutStyle } from "@/app/presentation/common/components/Layout/styled-components/style";

export interface LayoutInterface {
  children: JSX.Element;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
