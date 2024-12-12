import { Home } from "./pages/Home/home"
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter } from "react-router-dom";

export function App(){
  return (
    <BrowserRouter>
    <Header/>
    <Home/> 
    </BrowserRouter>
  )
}

