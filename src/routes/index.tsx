import React from 'react';

import { Route, Routes as SwitchRoutes } from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <SwitchRoutes>
    <Route path="/" element={<Home />} />
  </SwitchRoutes>
);

export default Routes;
