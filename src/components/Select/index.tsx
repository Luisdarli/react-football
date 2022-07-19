import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select'

//Styles
import './style.css';

//Interface
interface RFSelectProps {
    options: any[];
}

export const RFSelect: React.FC<RFSelectProps> = (props) => {
    const [formattedOptions, setFormattedOptions] = useState<any>([]);

    const formatOptions = useCallback(async () => {
        let result: any[] = [];
        props.options.forEach((option: any, idx: any) => {
            let obj = {
                label: option.league.name,
                value: idx
            }
            result.push(obj);
        })
        setFormattedOptions(result);
    }, [])

    useEffect(() => {
        formatOptions();
    }, [])


    return (
        <Select
            defaultValue={formattedOptions[0]}
            options={formattedOptions}
        />
    )
}