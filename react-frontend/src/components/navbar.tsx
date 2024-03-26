import {Link} from "react-router-dom";
import {Logo, NavLinks, TopNav} from "./NavBarComponents.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Context/store.tsx";
import { LogOutSuccess} from "../Context/slices/logSlice.tsx";
import {useNavigate} from "react-router";

function Navbar() {
    const navigate = useNavigate();
    const loggedIn = useSelector((state: RootState) => (state.isLoggedIn.value))
    const dispatch = useDispatch();

    const onSubmit = () => {
        try{
            sessionStorage.removeItem('token');
            dispatch(LogOutSuccess());
        } catch(error){
            console.log("error occurred while trying to log out")
            navigate("/login")
        }

    }


    return (

        <>
            <TopNav>
                <Logo>
                    <a href="/" className="logoTitle">My Movie</a>
                </Logo>
                <NavLinks>

                        <>

                        </>

                    {loggedIn ? (
                        <>
                            <li><Link to={"/Allmovies"}>All Movies</Link></li>
                            <li><Link to={"/searchV2"}>Search V2</Link></li>
                            <li><Link to={"/search"}>Search</Link></li>
                            <li><Link to={"/addmovie"}>Add Movie</Link></li>
                            <li><Link to={"/"} onClick={onSubmit}>Log Out</Link></li>
                            </>
                    ):
                        (
                            <li><Link to={"/login"}>Log In</Link></li>
                        )
                    }

                </NavLinks>

            </TopNav>

        </>

    )
}

export default Navbar;