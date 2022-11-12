import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageRoutes } from "@/app/main/constants/page-routes";
import { MakeSignIn, MakeSignUp } from "@/app/main/factories/pages";
import { Home } from "@/app/presentation/pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<MakeSignUp />} />
      <Route path="/signin" element={<MakeSignIn />} />
      <Route path={`${PageRoutes.CreatePosts}/:userId`} element={<Home />} />
    </Routes>
  );
};

export default Router;
