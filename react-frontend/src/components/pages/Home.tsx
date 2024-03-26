import styled, {keyframes} from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../Context/store.tsx";

const HomeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 75px);
    background-color: #121212;
    overflow: hidden;
`
const Glow = keyframes`
    0%
    {
        opacity: 0;
    }
    
    100%{
        opacity: 1;
    }
`
const Logo = styled.p`
    color: rgb(137, 206, 255);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 80px;
    font-family: "Kohinoor Bangla", serif;
    font-weight: bold;
    text-decoration: none;
    background: linear-gradient(#e2f6ff, dodgerblue);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-reflect: below 1px -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.37));
    line-height: 58px;
    margin: 0;
    
    
    animation: ${Glow} 2s linear 1;
`

const Text = styled.p`
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 50px;
    font-family: "Kohinoor Bangla", serif;
    font-weight: bold;
    text-decoration: none;
    margin: 0;
`

const Welcome = styled.p`
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 20px;
    font-family: "Kohinoor Bangla", serif;
    font-weight: bold;
    text-decoration: none;
    margin: 0;
`

function Home()
{

    const loggedIn = useSelector((state: RootState) => (state.isLoggedIn.value))
    const user = useSelector((state: RootState) => (state.isLoggedIn.username))

    return(
        <>
            <HomeContainer>
                { loggedIn && <Welcome>Hello {user}</Welcome>}
                <Text>Welcome to</Text>
                <Logo>My Movie.</Logo>


            </HomeContainer>


        </>
    )
}

export default Home;