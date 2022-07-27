import React from 'react';

//styles
import './style.css'

//components
import { Aside } from '../../components/Aside';
import { Header } from '../../components/Header';

export const MainTemplate = ({ ...props }) => {
    return (
        <>
            <div className='content'>
                <Header />
                <div className='wrapper'>
                    <Aside />
                    <section className='main-section'>
                        <main className='content'>
                            {props.children}
                        </main>
                    </section>
                </div>
            </div>
        </>
    )
}