import styled from "styled-components";

const TopNav = styled.nav`
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #121212;
    overflow: hidden;
    width: 100%;
    height: 75px;
    z-index: 9;
    box-shadow: 0 2px 10px 0 rgb(137, 206, 255);
    position: sticky;

`

const NavLinks = styled.ul`
    display: flex;
    justify-content: space-around;

    li {
        position: relative;
        list-style: none;
        padding: 0px 30px;
        line-height: 75px;
        z-index: 2;
    }
    li a {
        font-family: "Kohinoor Bangla", serif;
        color: rgb(137, 206, 255);
        display: block;
        text-align: center;
        text-decoration: none;
        letter-spacing: 3px;
        transition: color 300ms ease-in-out;
    }

    li a::before{
        content: "";
        position: absolute;
        background-image: linear-gradient(#89ceff, dodgerblue);
        /*background-image: linear-gradient(#50B6FFFF, dodgerblue);*/ /* sick colors */
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;

        transition: transform 300ms ease-in-out;
        transform: scaleX(0);
        transform-origin: left;
    }

    li a:hover, .nav-links li a:focus {
        color: #ffffff;
    }

    li a:hover::before{
        transform: scaleX(1);
    }
    
`

const Logo = styled.div`
    color: rgb(137, 206, 255);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 20px;
    padding-left: 30px;
    font-family: "Kohinoor Bangla", serif;
    font-weight: bold;
    text-decoration: none;

    background: linear-gradient(#e2f6ff, dodgerblue);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

export { Logo }
export { NavLinks }
export { TopNav }