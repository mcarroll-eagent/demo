import {useEffect, useState} from "react";
import {Field, FormContainer, SearchContainer} from "../DynamicSearchComponents.tsx";
import axios, {AxiosResponse} from "axios";
import styled from "styled-components";

interface Movie{
    id: number;
    name: string;
    actors: Actor[];
    releaseDate: Date
}

interface Actor {
    id: number;
    name: string;
    movie: number;
}

const TableFormat = styled.table`
    width: 100%;
`

const TableTitle = styled.th`
    height: 40px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    padding: 15px;
    padding-right: 100px;
    font-family: "Helvetica Neue";
    color: #89CEFFFF;
    white-space: nowrap;
`

const TableEntry = styled.td`
    border-bottom: 1px solid #ddd;
    padding: 15px;
    font-family: Helvetica, sans-serif;
    color: white;
`

function DynamicSearch() {
    const [nameList, setNameList] = useState<Movie[]>([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/movies/")
            .then((response: AxiosResponse<Movie[]>)=>{
                setNameList(response.data);
            })
    }, []);

    return (
        <>
            <FormContainer>
                <Field type={"text"} placeholder={'Type to search...'} onChange={(e) => setSearch(e.target.value)}/>
            </FormContainer>
            <SearchContainer>

            <TableFormat>
                <tr>
                    <TableTitle>ID</TableTitle>
                    <TableTitle>Movie Title</TableTitle>
                    <TableTitle>Release Date</TableTitle>
                    <TableTitle>Actors</TableTitle>
                </tr>
                {nameList.filter((item) => {
                    if (search === "") {
                        return item;
                    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    }

                }).map(item => {
                    return (
                        <tr>
                            <TableEntry> {item.id} </TableEntry>
                            <TableEntry> {item.name} </TableEntry>
                            <TableEntry> {item.releaseDate.toString()} </TableEntry>
                            <TableEntry> {item.actors.map(actor => actor.name).join(", ")}</TableEntry>
                        </tr>
                    );
                })}


            </TableFormat>
        </SearchContainer></>
    )
}

export default DynamicSearch;