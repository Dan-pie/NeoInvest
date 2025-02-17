import { useState } from "react";
import styled from "styled-components";

//Estilização do botão
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Neutra';
    width: 100%;
    height: 100%;
    background-color: #0A5DA6;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: regular;
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

export default function Button_dsktp({text,fontsize}) {

    return (
        <Button style={{fontSize: fontsize}}>
            {text}
        </Button>
    )
}