import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

//Styles
import './style.css'

//API
import { api } from '../../services/api'
import { Teams } from '../../components/Teams';

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

export const Home: React.FC = () => {

    // const [allTeams, setAllTeams] = useState<ResponseApi[]>([]);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        api.get('/teams?country=brazil')
            .then((response) => {
                console.log('resposta', response);
                // const endOffset = itemOffset + itemsPerPage;
                // setCurrentItems(items.slice(itemOffset, endOffset));
            })
    }, [])


    //Get current posts

    return (
        <>
            <h1>Home</h1>
            <Teams currentTeams={currentPosts} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
            />
        </>
    )

}