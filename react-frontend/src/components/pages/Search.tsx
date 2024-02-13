import {useForm} from "react-hook-form";
import {Field, FormContainer, ResetButton, SearchContainer, SearchForm, SubmitButton} from "../SearchComponents.tsx";
import axios, {AxiosResponse} from "axios";
import {useState} from "react";
import {useNavigate} from "react-router";


type MovieValues={
    name: string;
}

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



function Search() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<MovieValues>()
    const [ movieResponse, setMovieResponse ] = useState<Movie[]>([])
    const onSubmit = (data: MovieValues) => {

        console.log("Form Submitted", data);
        axios.get("http://localhost:8080/api/v1/movies/results", { params: data })
            .then(response => {
                console.log(response.data)
                setMovieResponse(response.data)

            })

        navigate('/searchresults', { state: movieResponse })
    }



    return (
        <SearchContainer>
            <FormContainer>
                <h2>Movie Search</h2>
                <SearchForm onSubmit={handleSubmit(onSubmit)}>
                    <Field type="text" placeholder="Search Keyword" {...register("name")}/>
                    <SubmitButton type="submit" value="Search"/>
                    <ResetButton type="reset" value="Reset"/>
                </SearchForm>
            </FormContainer>
        </SearchContainer>
    )
}

export default Search;
