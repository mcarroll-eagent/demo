import Navbar from "./components/navbar.tsx";
import {Route, Routes} from "react-router-dom";
import AllMovies from "./components/pages/AllMovies.tsx";
import styled from "styled-components";

const AppWrapper = styled.div`
    background-color: #fefefe;
    height: 100vh;
    width: 100%;
`

function App(){
    return (
        <AppWrapper>
            <Navbar/>
            <Routes>
                <Route path={"/allmovies"} element={<AllMovies/>}/>
            </Routes>
        </AppWrapper>

    );
}

export default App;