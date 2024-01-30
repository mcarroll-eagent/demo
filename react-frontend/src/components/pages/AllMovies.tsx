import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import styled from "styled-components";

interface Actor {
    id: number;
    name: string;
    movie: number;
}

interface Movie {
    id: number;
    name: string;
    actors: Actor[];
    releaseDate: Date
}

const TableFormat = styled.table`
    width: 100%;
`

const TableTitle = styled.th`
    height: 40px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    padding: 15px;
    font-family: "American Typewriter";
`

const TableEntry = styled.td`
    border-bottom: 1px solid #ddd;
    padding: 15px;
    font-family: "American Typewriter";
`

function AllMovies()
{
    const [ movies, setMovies ] = useState<Movie[]>([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/movies/')
            .then( (response: AxiosResponse<Movie[]>) => {
                setMovies(response.data);
            })
    }, []);
    return(
        <TableFormat>
            <tr>
                <TableTitle>ID</TableTitle>
                <TableTitle>Movie Title</TableTitle>
                <TableTitle>Release Date</TableTitle>
                <TableTitle>Actors</TableTitle>
            </tr>
            {
                movies.map(movie => {
                    return (
                        <tr>
                            <TableEntry> {movie.id} </TableEntry>
                            <TableEntry> {movie.name} </TableEntry>
                            <TableEntry> {movie.releaseDate.toString()} </TableEntry>
                            <TableEntry> {JSON.stringify(movie.actors)}</TableEntry>
                        </tr>
                    )
                })
            }
        </TableFormat>
    )
}

export default AllMovies;