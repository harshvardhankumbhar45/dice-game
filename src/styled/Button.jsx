import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
padding: 10px 18px;
border: 1px solid transparent;
outline: none;
border-radius: 5px;
cursor: pointer;

width: 220px;
height: 44px;

background-color: black;
color: white;
font-size: 16px;
transition: 0.5s background ease-in;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.5s background ease-in;
}
`;
export const OutlineButton = styled(Button)`

background-color: white;
color: black;
font-size: 16px;
transition: 0.5s background ease-in;
border: 1px solid black;

&:hover{
    background-color: black;
    color: white;
    transition: 0.6s background ease-in;
}
`;