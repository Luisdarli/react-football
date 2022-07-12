import React from 'react';

//styles
import './style.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
    return (
        <div className='main-input'>
            <span>
                <input type="text" placeholder='Pesquise seu time' />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
        </div>
    )
}