import React from 'react';

//styles
import './style.css'

//components
import { Aside } from '../../components/Aside';

export const MainTemplate = ({ ...props }) => {
    return (
        <>
            <Aside />
            <section className='wrapper'>
                <main className='content'>
                    {props.children}
                </main>
            </section>
        </>
    )
}