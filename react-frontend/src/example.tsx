import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {SubStyledHelloWorld} from "./NewComponent.tsx";
import styled from "styled-components";
import axios, {AxiosResponse} from "axios";


const StyledHelloWorld = styled.p`
    color: red;
    font-size: 2rem;
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


function Example() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Hello World!")
    }, [count])

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/movies/')
            .then( (response: AxiosResponse<Movie[]>) => {
                setMovies(response.data);
            })
    }, []);

    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Movie Title</th>
                    <th>Release Date</th>
                    <th>Actors</th>
                </tr>
                {
                    movies.map( movie => {
                        return (
                            <tr>
                                <td> {movie.id} </td>
                                <td> {movie.name} </td>
                                <td> {movie.releaseDate.toString()} </td>
                                <td> {JSON.stringify(movie.actors)}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <pre>
                {JSON.stringify(movies)}
            </pre>
            <SubStyledHelloWorld $fontSize={4}>
                Hello World!
            </SubStyledHelloWorld>
            <StyledHelloWorld>
                Hello World!
            </StyledHelloWorld>
            <p>
                Hello World!
            </p>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Example
