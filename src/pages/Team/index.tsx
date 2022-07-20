import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RFSelect } from '../../components/Select';
import { api } from '../../services/api';

//Styles
import './style.css';


//Interfaces
interface AllPlayersProps {
    age: number;
    id: number;
    name: string;
    number: number;
    photo: string;
    position: string;
    formattedPosition: string;
}

interface CurrentTeamProps {
    id: number,
    name: string,
    logo: string,
}

interface TeamProps {
    id: number,
    name: string,
    logo: string
}

interface LeagueProps {
    id: number,
    name: string,
}

interface GamesProps {
    appearences: number,
    lineups: number,
    minutes: string,
    rating: number
}

interface GoalsProps {
    total: number,
    conceded: number,
    assists: number,
    saves: number
}

interface CardsProps {
    yellow: number,
    red: number
}
interface PlayerStatusProps {
    team: TeamProps,
    league: LeagueProps,
    games: GamesProps,
    goals: GoalsProps,
    cards: CardsProps
}

//Enums
enum PlayerPosition {
    Goalkeeper = "Goleiro",
    Defender = "Defensor",
    Midfielder = "Meio-campista",
    Attacker = "Atacante",
}

export const Team: React.FC = () => {
    const { id } = useParams();

    const [scoreColor, setScoreColor] = useState('red');
    const [allPlayers, setAllPlayers] = useState<AllPlayersProps[]>([]);
    const [currentTeam, setCurrentTeam] = useState<CurrentTeamProps>();
    const [playerStatus, setPlayerStatus] = useState<PlayerStatusProps[]>([]);
    const [selectedChampionship, setSelectedChampionship] = useState(0);


    const getYear = useCallback(() => {
        return new Date().getFullYear();
    }, [])

    const getPlayersBySquad = useCallback(async () => {
        const resp = await api.get(`/players/squads?team=${id}`);

        resp.data.response[0].players.forEach((el: any) => {
            const position = el.position
            el.formattedPosition = PlayerPosition[position as keyof typeof PlayerPosition];
        })

        setAllPlayers(resp.data.response[0].players);
        setCurrentTeam(resp.data.response[0].team);
    }, [])

    const getPlayerStatusPerSeason = useCallback(async (player: any) => {
        const response = await api.get(`/players?id=${player}&season=${getYear()}`);
        setPlayerStatus(response.data.response[0].statistics);
    }, [])

    const handleSelectedChampionship = useCallback((championShip) => {
        console.log(championShip);
        setSelectedChampionship(championShip);
    }, [])

    useEffect(() => {
        getPlayersBySquad()
            .catch(err => console.log(err));

        getPlayerStatusPerSeason('10229')
            .catch(err => console.log(err));
    }, []);


    return (
        <>
            <header className="team_header">
                <img src={currentTeam?.logo} alt="Team Logo" />
                <h1 className='team_title'>{currentTeam?.name}</h1>
            </header>

            <section className="player_content">
                <aside className='player_aside'>
                    {allPlayers.map((player) => (
                        <div key={player.id} className="player_info">
                            <div className="player_photo">
                                <img src={player.photo} alt="Player"></img>
                            </div>

                            <div className='player_wrapper'>
                                <div className='player_details'>
                                    <span>
                                        <h5 className="player_name">{player.name}</h5>
                                    </span>
                                    <span>#{player.id}</span>
                                </div>

                                {player.number &&
                                    <div className="player_details-shirt">
                                        <FontAwesomeIcon icon={faShirt} />
                                        <span>{player.number}</span>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </aside>

                <div className='player_status'>
                    <header className='player_status-header'>
                        <h1>Status temporada {getYear()}</h1>
                    </header>
                    <div className='select-content'>
                        {
                            playerStatus.length > 0 && (
                                <RFSelect options={playerStatus} selectedItem={handleSelectedChampionship} />
                            )
                        }
                    </div>

                    {playerStatus.length > 0 && (
                        <>
                            <div className="player_games">
                                <h3>Jogos ⚽</h3>

                                <div className='player_games-grid'>
                                    <p>Relacionado: {playerStatus[selectedChampionship].games.appearences}</p>
                                    <p>Jogos: {playerStatus[selectedChampionship].games.lineups}</p>
                                    <p>Minutos: {playerStatus[selectedChampionship].games.minutes}</p>
                                </div>
                            </div>

                            <div className='player_games'>
                                <h3>Gols 🥅</h3>

                                <div className='player_games-grid'>
                                    <p>Total: {playerStatus[selectedChampionship].goals.total}</p>
                                    <p>Assist.: {playerStatus[selectedChampionship].goals.assists}</p>
                                    <p>Defesas: {playerStatus[selectedChampionship].goals.saves}</p>
                                </div>
                            </div>

                            <div className='player_games'>
                                <h3>Cartões 🟥</h3>

                                <div className='player_games-grid'>
                                    <span>🟥: {playerStatus[selectedChampionship].cards.red}</span>
                                    <span>🟨: {playerStatus[selectedChampionship].cards.yellow}</span>
                                </div>
                            </div>
                            <h1 className='player_score'>Nota: <strong style={{ color: scoreColor }}>7.2</strong></h1>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}