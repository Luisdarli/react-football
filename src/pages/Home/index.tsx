import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

//Styles
import './style.css'

//API
import { api } from '../../services/api'

//Components
import { Teams } from '../../components/Teams';
import { Search } from '../../components/Search';

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

    const [allTeams, setAllTeams] = useState<ResponseApi[]>([]);

    const [currentItems, setCurrentItems] = useState<ResponseApi[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {

        // const fetchData = async () => {
        //     const response = await api.get('/teams?country=brazil');
        //     console.log(response);
        //     const endOffset = itemOffset + itemsPerPage;
        //     setAllTeams(response.data.response);
        //     setCurrentItems(response.data.response.slice(itemOffset, endOffset));
        //     setPageCount(Math.ceil(response.data.response.length / itemsPerPage))
        // }

        // fetchData()
        //     .catch((err) => console.log(err));

    }, [])

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % allTeams.length;
        setItemOffset(newOffset);

        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(allTeams.slice(itemOffset, endOffset));
        console.log('comeco', itemOffset);
        console.log('fim', endOffset);
    };


    //Get current posts

    return (
        <>
            <Search />
            <Teams currentTeams={currentItems} />

            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                containerClassName={"pagination"}
                activeClassName={"active"}
            /> */}
        </>
    )

}