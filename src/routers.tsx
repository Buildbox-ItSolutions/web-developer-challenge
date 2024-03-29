import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error/404";

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Routes>
              <Route index element={<Home title="Home" />} />
              <Route path="error404" element={<Error404 title="Erro 404" />} />
            </Routes>
          }
        />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
