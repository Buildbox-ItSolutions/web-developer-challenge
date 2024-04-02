import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../styles/GlobalStyle";

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};
