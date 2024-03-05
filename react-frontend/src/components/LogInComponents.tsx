import styled from "styled-components";

export const PageContainer = styled.div`
    height: calc(100vh - 75px);
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: rgb(30, 30, 30);
    margin-bottom: 10%;
    border-radius: 1.5rem;
    padding: 40px;
    width: 25rem;
    
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

export const AddForm = styled.form`
    justify-content: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    


`


export const ResetButton = styled.input`
    width:50%;
    padding: 5px;
    background-color: rgb(255, 104, 109);
    border: 2px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    margin-bottom: 5px;
    outline: none;
    box-sizing: border-box;
    color: white;
    transition: 100ms ease-in-out;
    cursor: pointer;
    border-radius: 10px;
    
    &:hover{
        transform: scaleY(1.1) scaleX(1.05);
    }
`

export const Field = styled.input`
    width:100%;
    padding: 20px 20px;
    background-color: rgba(230, 230, 230, 0.91);
    border: 2px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    margin-bottom: 15px;
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

export const SubmitButton = styled.input`
    width:50%;
    padding: 5px;
    background-color: rgb(126, 255, 129);
    border: 2px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    margin-bottom: 5px;
    outline: none;
    box-sizing: border-box;
    color: white;
    transition: 100ms ease-in-out;
    cursor: pointer;
    border-radius: 10px;
    
    &:hover{
        transform: scaleY(1.1) scaleX(1.05);
    }

`

export const AlertContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    background: rgb(30, 30, 30);
    width: 25rem;
    border-radius: 1.5rem;
    top: 15em;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    text-align: left;
    font-family: Helvetica;
`

export const ValidFieldContainer = styled.div`
width: 100%;

`

export const AlertDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    

`

export const AlertData = styled.p`
    font-family: Helvetica,serif;
    color: white;
    
`