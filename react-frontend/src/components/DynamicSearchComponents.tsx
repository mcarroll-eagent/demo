import styled from "styled-components";

const SearchContainer = styled.div`
    position: relative;
    justify-content: center;
    background-color: #121212;
    height: 100vh;
`

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgb(30, 30, 30);
    width: 100%;
    overflow: hidden;
    
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

const Field = styled.input`
    width:25%;
    padding: 8px 20px;
    background-color: rgba(230, 230, 230, 0.91);
    border: 2px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    margin: 22px;
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


export {Field}
export { SearchContainer }
export { FormContainer }