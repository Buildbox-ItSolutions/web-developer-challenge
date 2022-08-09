import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </Router>
    );
}