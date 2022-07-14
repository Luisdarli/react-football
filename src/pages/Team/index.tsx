import React, { useEffect, useState } from 'react';
import { RFSelect } from '../../components/Select';

//Styles
import './style.css';


export const Team: React.FC = () => {
    const [scoreColor, setScoreColor] = useState('red');

    useEffect(() => {
        setScoreColor('#21f793');
    }, [])

    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <header className="team_header">
                <img src="https://media.api-sports.io/football/teams/131.png" alt="Team Logo" />
                <h1 className='team_title'>S.C.C.P Sport Club Corinthians Paulista</h1>
            </header>

            <section className="player_content">
                <aside className='player_aside'>
                    <div className="player_info">
                        <div className="player_photo">
                            <img src="https://media.api-sports.io/football/players/10229.png" alt="Player"></img>
                        </div>
                        <div className="player_age">
                            <h6 className="player_name">Cassio Ramos</h6>
                            <div className='player_details'>
                                <p>Idade: 36</p>
                                <p>Nasc.: Brazil</p>
                                <p>Altura: 195 cm</p>
                                <p>Peso: 92 kg</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className='player_status'>
                    <header className='player_status-header'>
                        <h1>Status temporada {getYear()}</h1>
                    </header>
                    <div className='select-content'>
                        <RFSelect />
                    </div>


                    <div className="player_games">
                        <h3>Jogos ⚽</h3>

                        <div className='player_games-grid'>
                            <p>Relacionado: 12</p>
                            <p>Jogos: 12</p>
                            <p>Minutos: 1080</p>
                        </div>
                    </div>

                    <div className='player_games'>
                        <h3>Gols 🥅</h3>

                        <div className='player_games-grid'>
                            <p>Total: 2</p>
                            <p>Assist.: 3</p>
                            <p>Defesas: 48</p>
                        </div>
                    </div>

                    <div className='player_games'>
                        <h3>Cartões 🟥</h3>

                        <div className='player_games-grid'>
                            <span>🟥: 0</span>
                            <span>🟨: 2</span>
                        </div>
                    </div>
                    <h1 className='player_score'>Nota: <strong style={{ color: scoreColor }}>7.2</strong></h1>
                </div>
            </section>
        </>
    );
}