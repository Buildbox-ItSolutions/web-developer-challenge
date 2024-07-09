import { Routes } from 'react-router'
import { Route, } from 'react-router-dom'

import * as pages from '../pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />} />
      <Route path="*" element={<pages.NotFound />} />
    </Routes>
  )
}

export default AppRoutes
