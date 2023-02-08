import { useRoutes } from "react-router-dom";
import { HomePage } from "../pages/Home";

export const MainRoutes = () => {
  return useRoutes([{ path: "/", element: <HomePage /> }]);
};
