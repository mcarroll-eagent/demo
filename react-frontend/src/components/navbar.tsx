import {Link} from "react-router-dom";
import {Logo, NavLinks, TopNav} from "./NavBarComponents.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../Context/store.tsx";

function Navbar() {

    const loggedIn = useSelector((state: RootState) => (state.isLoggedIn.value))



    return (

        <>
            <TopNav>
                <Logo>
                    <a href="/" className="logoTitle">My Movie</a>
                </Logo>
                <NavLinks>

                        <>
                            <li><Link to={"/Allmovies"}>All Movies</Link></li>
                            <li><Link to={"/searchV2"}>Search V2</Link></li>
                            <li><Link to={"/search"}>Search</Link></li>
                            <li><Link to={"/addmovie"}>Add Movie</Link></li>
                        </>

                    {loggedIn ? (
                        <li><Link to={"/"}>Log Out</Link></li>
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