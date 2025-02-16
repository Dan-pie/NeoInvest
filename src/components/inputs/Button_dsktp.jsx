import { useState } from "react";
import styled from "styled-components";

//Estilização do botão
const Button = styled.button`
    width: 100px;
    height: 40px;
    background-color: #0A5DA6;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: white;
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {    
        transform: scale(1.05);
        box-shadow: 0px 0px 10px #0A5DA6;
    }
    
    &:focus, &:active {
        outline: none;
    }

`;

export default function Button_dsktp({text}) {

    return (
        <Button>
            {text}
        </Button>
    )
}