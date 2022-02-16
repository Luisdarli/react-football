import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
        'x-apisports-key': '851f61a79c04ad6d9fb3f6ac4b7ba597'
    }
})