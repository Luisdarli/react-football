import React from 'react';

export const Teams = ({ currentTeams }: any) => {
    return (
        <ul>
            {currentTeams.map((team: any) => (
                <li key={team.team.id}>{team.team.name}</li>
            ))}
        </ul>
    );
}