import React from 'react';

//styles
import './style.css'

//components
import { Aside } from '../../components/Aside';

export const MainTemplate = ({ ...props }) => {
    return (
        <div className='wrapper'>
            <Aside />
            <section className='main-section'>
                <main className='content'>
                    {props.children}
                </main>
            </section>
        </div>
    )
}