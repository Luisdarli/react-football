import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import './style.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export const Aside = () => {
    return (

        <aside className='aside-navbar'>


            <nav className='aside-navbar__nav'>
                <ul>
                    <li>
                        <Link to="/">
                            <div className='aside-navbar__items'>
                                <div className='aside-navbar__icon'>
                                    <FontAwesomeIcon icon={faHouse} />
                                    <span>Home</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}