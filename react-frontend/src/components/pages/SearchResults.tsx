import styled from "styled-components";
import {useLocation} from "react-router";

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

function SearchResults () {
    const location = useLocation();
    console.log(location.state)
    return (
        <>
            <TableFormat>
                <tr>
                    <TableTitle>ID</TableTitle>
                    <TableTitle>Movie Title</TableTitle>
                    <TableTitle>Release Date</TableTitle>
                    <TableTitle>Actors</TableTitle>
                </tr>
                {
                    location.state.movieResponse.map((movie : Movie) => {
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
        </>
    )
}

export default SearchResults;