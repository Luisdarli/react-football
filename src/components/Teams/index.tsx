import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './style.css'

//Interfaces

interface TeamProps {
    id: number;
    logo: string;
    name: string;
}

interface VenueProps {
    capacity: number;
    name: string;
    address: string;
    city: string;
}
interface CurrentTeamsProps {
    team: TeamProps;
    venue: VenueProps;
}
interface TeamsProps {
    currentTeams: CurrentTeamsProps[];
}

export const Teams = ({ currentTeams }: TeamsProps) => {
    return (
        <>
            {currentTeams.map((team: any) => (
                <Link to={`/team/${team.team.id}`}>
                    <div key={team.team.id} className='team-cards'>
                        <aside className='team-cards__aside'>
                            <img src={team.team.logo} alt="Logo" />
                        </aside>

                        <div className='team-cards__content'>
                            <div className="team-cards--content__header">
                                <h1 className='team-cards__title'>{team.team.name}</h1>
                                <span>Capacidade: <p className='team-cards__highlight'>{team.venue.capacity}</p></span>
                            </div>
                            <span className='team-cards__venue'>Estádio: <strong>{team.venue.name}</strong></span>
                            <p>{team.venue.address} - {team.venue.city}</p>
                        </div>

                    </div>
                </Link>
            ))
            }
        </>
    );
}