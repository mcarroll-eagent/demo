import {Link} from "react-router-dom";
import {Logo, NavLinks, TopNav} from "./NavBarComponents.tsx";

function Navbar() {
    return (
        <TopNav>
            <Logo>
                <a href="/" className="logoTitle">My Movie</a>
            </Logo>
            <NavLinks>
                <li><Link to={"/Allmovies"}>All Movies</Link></li>
                <li><Link to={"/search"}>Search</Link></li>
                <li><Link to={"/addmovie"}>Add Movie</Link></li>
            </NavLinks>

        </TopNav>
    )
}

export default Navbar;