import React from 'react';

//styles
import './style.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export const Aside = () => {
    return (
        <aside className='aside-navbar'>
            <div className='aside-navbar__logo'>
                <span>React<b className='highlight'>Football</b></span>
                <img src={require('../../assets/logo.png')} alt="Logo" />
            </div>

            <nav className='aside-navbar__nav'>
                <ul>
                    <li>
                        <div className='aside-navbar__items'>
                            <div className='aside-navbar__icon'>
                                <FontAwesomeIcon icon={faHouse} />
                            </div>
                            <span>Home</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}