import {useForm} from "react-hook-form";
import {Field, FormContainer, ResetButton, SearchContainer, SubmitButton} from "../SearchComponents.tsx";


type MovieValues={
    name: string;
}

function Search() {
    const { register, handleSubmit } = useForm<MovieValues>()

    const onSubmit = (data: MovieValues) => {
        console.log("Form Submitted", data);
    }

    return (
        <SearchContainer>
            <FormContainer>
                <h2>Movie Search</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field type="text" placeholder="Search Keyword" {...register("name")}/>
                    <SubmitButton type="submit" value="Submit"/> <ResetButton type="reset"
                                                                                       value="Reset"/>
                </form>
            </FormContainer>
        </SearchContainer>
    )
}

export default Search;