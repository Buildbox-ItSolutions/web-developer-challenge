import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@pages/index';

import { RESOURCES } from './resources';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RESOURCES.Home.path} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
