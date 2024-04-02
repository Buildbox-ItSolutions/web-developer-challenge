import { Outlet, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { Header } from "../../components";

export const Layout = () => {
  const navigate = useNavigate();
  navigate("./feed");

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};
