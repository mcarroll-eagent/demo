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
    margin-top: 5px;
`

const TableTitle = styled.th`
    text-align: left;
    border-bottom: 1px solid #ddd;
    padding: 15px;
    font-family: "Helvetica Neue";
    color: #89CEFFFF;
`

const TableEntry = styled.td`
    border-bottom: 1px solid #ddd;
    padding: 15px;
    color: white;
    font-family: Helvetica;
`

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #121212;
    overflow: hidden;

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
        <>
        <Container>
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
                                <TableEntry> {movie.actors.map(actor => actor.name).join(", ")}</TableEntry>
                            </tr>
                        )
                    })
                }
            </TableFormat>

        </Container>
        </>

    )
}

export default AllMovies;