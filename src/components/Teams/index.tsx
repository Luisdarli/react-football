import React from 'react';

//styles
import './style.css'
export const Teams = ({ currentTeams }: any) => {
    return (

        <div className='team-cards'>
            {/* <ul>
            {currentTeams.map((team: any) => (
                <li key={team.team.id}>{team.team.name}</li>
            ))}
        </ul> */}
            <aside className='team-cards__aside'>
                <img src={require('../../assets/logo.png')} alt="Logo" />
            </aside>

            <div className='team-cards__content'>

                <div className="team-cards--content__header">
                    <h1 className='team-cards__title'>Corinthians</h1>
                    <span>Capacidade: <p className='team-cards__highlight'>76212</p></span>
                </div>

                <span className='team-cards__venue'>Estádio: <p>Néo Quimica Arena</p></span>
                <p>Rua, Cidade - Estado, número </p>
            </div>

        </div>
    );
}