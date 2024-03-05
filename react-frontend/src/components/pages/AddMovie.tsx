import styled from "styled-components";
import {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {AlertBanner} from "@diversecomputing/react-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const PageContainer = styled.div`
    height: calc(100vh - 75px);
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: rgb(30, 30, 30);
    margin-bottom: 10%;
    border-radius: 1.5rem;
    padding: 40px;
    width: 25rem;
    
    h2 {
        position: relative;
        color: rgb(137, 206, 255);
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 20px;
        font-family: "Kohinoor Bangla", serif;
        font-weight: bold;
        margin-bottom: 10%;
    }

`

const AddForm = styled.form`
    justify-content: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    


`


const ResetButton = styled.input`
    width:50%;
    padding: 5px;
    background-color: rgb(255, 104, 109);
    border: 2px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    margin-bottom: 5px;
    outline: none;
    box-sizing: border-box;
    color: white;
    transition: 100ms ease-in-out;
    cursor: pointer;
    border-radius: 10px;
    
    &:hover{
        transform: scaleY(1.1) scaleX(1.05);
    }
`

const Field = styled.input`
    width:100%;
    padding: 20px 20px;
    background-color: rgba(230, 230, 230, 0.91);
    border: 2px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    margin-bottom: 15px;
    outline: none;
    transition: 0.3s;
    box-sizing: border-box;
    border-radius: 10px;
    
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);

    }
    
    &:focus{
        background-color: #fff;
        border: 2px solid rgba(30, 85, 250, 0.47)
    }
`

const SubmitButton = styled.input`
    width:50%;
    padding: 5px;
    background-color: rgb(126, 255, 129);
    border: 2px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    margin-bottom: 5px;
    outline: none;
    box-sizing: border-box;
    color: white;
    transition: 100ms ease-in-out;
    cursor: pointer;
    border-radius: 10px;
    
    &:hover{
        transform: scaleY(1.1) scaleX(1.05);
    }

`

const AlertContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    background: rgb(30, 30, 30);
    width: 25rem;
    border-radius: 1.5rem;
    top: 15em;
`

const Error = styled.p`
    color: red;
    font-size: 12px;
    text-align: left;
    font-family: Helvetica;
`

const ValidFieldContainer = styled.div
`
width: 100%;

`

const AlertDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    

`

const AlertData = styled.p`
    font-family: Helvetica,serif;
    color: white;
    
`

type MovieValues={
    name: string;
    releaseDate: string;
}

interface MovieResponse extends MovieValues {
    id: number;
}

const datePattern = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
const schema = yup.object().shape({
    name: yup.string().required("Movie name is required"),
    releaseDate: yup.string().required("Release date is required")
        .matches(datePattern, "Must be in YYYY-MM-DD format")

});



function AddMovie(){
    const [movieResponse, setMovieResponse] = useState<MovieResponse>();
    const { register, handleSubmit, formState: {errors} } = useForm<MovieValues>({ resolver: yupResolver(schema) })
    const onSubmit = (data: MovieValues) => {

        console.log("Form Submitted", data);
        axios.post("http://localhost:8080/api/v1/movies", data)
            .then(response => {
                console.log(response.data);
                setMovieResponse(response.data);

            })

    }
    console.log('errors', errors);
    return(
        <>
            <PageContainer>

                <FormContainer>
                    <h2>Add Movie</h2>
                    <AddForm onSubmit={handleSubmit(onSubmit)}>
                        <ValidFieldContainer>
                            <Error>{errors.name?.message}</Error>
                            <Field type="text" placeholder="Movie name" {...register("name")}/>
                        </ValidFieldContainer>
                        <ValidFieldContainer>
                            <Error>{errors.releaseDate?.message}</Error>
                            <Field type="text" placeholder="yyyy-mm-dd" {...register("releaseDate")}/>
                        </ValidFieldContainer>
                        <SubmitButton type="submit" value="Add"/>
                        <ResetButton type="reset" value="Reset"/>
                    </AddForm>
                </FormContainer>
                {
                    movieResponse ? (
                            <AlertBanner
                                variant={"success"}
                            >
                                <AlertContainer>
                                    <AlertDiv>

                                        <AlertData>{movieResponse?.name} was successfully added!</AlertData>
                                    </AlertDiv>
                                </AlertContainer>
                            </AlertBanner>
                        )

                        : null
                }

            </PageContainer>

        </>

    )
}

export default AddMovie;