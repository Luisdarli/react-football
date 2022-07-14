import React from 'react';
import Select from 'react-select'

//Styles
import './style.css';

export const RFSelect = () => {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
    ]

    return (
        <Select
            defaultValue={[options[0]]}
            options={options}
        />
    )
}