import React, { useEffect, useState } from 'react';

//Styles
import './style.css'

//API
import { api } from '../../services/api'

//Interface
interface Team {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
}

interface Venue {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string
}

interface ResponseApi {
    team: Team;
    venue: Venue;
}

export const Home = () => {
    const [allTeams, setAllTeams] = useState<ResponseApi[]>([]);

    // useEffect(() => {
    //     api.get('/teams?country=brazil')
    //         .then((response) => {
    //             setAllTeams(response.data.response);
    //         })
    // }, [])

    return (
        <>
            <h1>Home</h1>
        </>
    )
}