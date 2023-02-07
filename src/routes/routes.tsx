import { createBrowserRouter, Outlet } from 'react-router-dom'
import TopBar from '../components/molecules/top-bar/TopBar';
import Posts from '../pages/posts/Posts'

const AppBar = () => (
    <>
        <TopBar />
        <Outlet />
    </>
);
const AppRoutes = createBrowserRouter([
    {
        element: <AppBar />,

        children: [
            {
                path: '/',
                element: <Posts />
            }
        ]
    }
])

export default AppRoutes