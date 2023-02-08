import { lazy, ReactNode, Suspense, ElementType } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import MainLayout from '../layouts/MainLayout';


const load = (Component: ElementType) => () => {
  return (
    <Suspense fallback={<LoadingScreen />} >
      <Component />
    </Suspense>
  )
}

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {element: <Navigate to="/home" replace/>, index: true},
        {path: 'home', element: <Home/>}
      ],
    },
    {
      path: '*',
      element: <Navigate to={'/'} />
    }
  ])
}

export default Router;

const Home = load(lazy(() => import('../pages/Home')))

