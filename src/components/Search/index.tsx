import React, { useState } from 'react';

//styles
import './style.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

//Interfaces
interface SearchProps {
    filter: (item: any) => void;
}

export const Search = ({ filter }: SearchProps) => {
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className='main-input'>
            <span>
                <input type="text" placeholder='Pesquise seu time' name='search' onChange={(event) => setSearchInput(event.target.value)} value={searchInput} />
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => filter(searchInput)} />
            </span>
        </div>
    )
}