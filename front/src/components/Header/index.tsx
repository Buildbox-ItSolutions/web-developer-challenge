import React from 'react';

import image from '../../assets/bx-logo.svg'
import './styles.css';

export function Header(){
    return(
        <header>
            <div id='logo'>
                <img src={image} alt="buildbox-challange logo" />
            </div>
        </header>
    );
}