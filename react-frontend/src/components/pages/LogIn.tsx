import {PageContainer, ValidFieldContainer, AddForm, Error, ResetButton, SubmitButton, Field, FormContainer} from "../LogInComponents.tsx";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {LogInSuccess, setUserInfo} from "../../Context/slices/logSlice.tsx";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")

});

type Credentials={
    username: string;
    password: string;
}

function LogIn(){

    const { register, handleSubmit, formState: {errors} } = useForm<Credentials>({ resolver: yupResolver(schema) })
    const navigate = useNavigate();

    const dispatch = useDispatch();


    const onSubmit = (data: Credentials) => {
        console.log("attempting to log in")
        try{
            axios.post("http://localhost:8080/auth/login", data)
                .then(response => {
                    dispatch(LogInSuccess(response.data.user.username));
                    console.log(response.data);
                    console.log("USERNAME", response.data.user.username);
                    dispatch(setUserInfo(response.data));
                    sessionStorage.setItem('token', response.data.jwt)
                    navigate("/allmovies")
                })
        } catch(error){
            console.log("error occurred while trying to log in")
            navigate("/login")
        }

    }

    return(
        <>
            <PageContainer>

                <FormContainer>
                    <h2>Log In</h2>
                    <AddForm onSubmit={handleSubmit(onSubmit)}>
                        <ValidFieldContainer>
                            <Field type="text" placeholder="Username" {...register("username")}/>
                            <Error>{errors.username?.message}</Error>
                        </ValidFieldContainer>
                        <ValidFieldContainer>
                            <Field type="text" placeholder="Password" {...register("password")}/>
                            <Error>{errors.password?.message}</Error>
                        </ValidFieldContainer>
                        <SubmitButton type="submit" value="Log In"/>
                        <ResetButton type="reset" value="Reset"/>
                    </AddForm>
                </FormContainer>
            </PageContainer>

        </>

    );
}

export default LogIn;