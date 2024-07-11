import React from 'react'
import logo from '../../assets/bx-logo.png'
import './styles.css'



//criação do componente Cabeçalho
const Header = () =>{


    return (
        <div className= 'header-container'>
            <img src={logo}  alt="logo" />
        </div>
    )
}
export {Header}


