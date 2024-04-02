import { Outlet, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { Header } from "../../components";
import { useEffect } from "react";

export const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/feed");
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};
