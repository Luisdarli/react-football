import React from 'react';

//style
import './style.css'

export const Header = () => {
    return (
        <div className='aside-navbar__logo'>
            <span>React<b className='highlight'>Football</b></span>
            <img src={require('../../assets/logo.png')} alt="Logo" />
        </div>
    )
}