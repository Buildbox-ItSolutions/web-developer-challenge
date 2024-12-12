import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Error404 from './pages/error/404'
import Layout from './components/layout/main'

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home title="Home" />} />
                <Route path="error404" element={<Error404 title="Erro 404" />} />
              </Routes>
            </Layout>
          }
        />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/*" element={<Error404 title="Erro 404" />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default MainRoutes
