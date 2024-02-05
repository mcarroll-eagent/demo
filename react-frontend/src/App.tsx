import Navbar from "./components/navbar.tsx";
import {Route, Routes} from "react-router-dom";
import AllMovies from "./components/pages/AllMovies.tsx";
import styled from "styled-components";
import Search from "./components/pages/Search.tsx";
import DynamicSearch from "./components/pages/DynamicSearch.tsx";
import { Helmet } from "react-helmet";
import Home from "./components/pages/Home.tsx";

const AppWrapper = styled.div`
    background-color: #121212;
    height: 100vh;
    width: 100%;
`

function App(){
    return (
        <>
            <Helmet>
                <title>My Movie with React</title>
                <link rel={'icon'} type="image/png" href={"./MyMovieIcon.png"}/>
            </Helmet>

        <AppWrapper>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/allmovies"} element={<AllMovies/>}/>
                <Route path={"/search"} element={<Search/>}/>
                <Route path={"/searchv2"} element={<DynamicSearch/>}/>
            </Routes>
        </AppWrapper>
        </>
    );
}

export default App;