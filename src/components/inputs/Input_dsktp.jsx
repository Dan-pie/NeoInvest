import { useState } from "react";
import styled from "styled-components";


//Estilização da div principal
const InputWrapper = styled.div`
   width: 100%;
   height: 50%;
   background-color: white;
   position: relative;


`;

//Estilização do input
const Input = styled.input`
    width: 100%;
    padding-left: 10px;
    padding-top: 7px;
    outline: none;
    background-color: white;
    color: black;
    border: 0.5px solid rgba(0, 0, 0, 0.18);
    height: 100%;
    font-size: 13px;
    overflow: hidden;
    box-sizing: border-box; 
    position: relative;
    z-index: 2;
    
`;

//Estilização do label
const InputLabel = styled.label`
    font-family: 'Neutra', sans-serif;
    position: absolute;
    padding: 5px 10px;
    margin: 0;
    color: rgba(0, 0, 0, 0.5);;
    cursor: text;
    left: 0;
    top: ${({isfocused, hasvalue}) => (isfocused  || hasvalue ? '1px' : '14px')};
    font-size: ${({isfocused, hasvalue}) => (isfocused || hasvalue ? '12px' : '16px')};
    transition: top 0.2s, color 0.2s, font-size 0.2s;
    z-index: 2;
`;

//Estilização da linha-lateral que acompanha o input
const Line = styled.div`
    width: 8px;
    height: 95%;
    background-color: #0A5DA6;
    position: absolute;
    bottom: 1.5px;
    left: -8px;
    border-radius: 5px 0 0 5px;
    transform: ${({isfocused}) => (isfocused ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out; 
`;

//Estilização do icone de olho
const EyeIcon = styled.i`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 20px;
    

`;


//Função principal
export default function Input_dsktp({type ,label, pass_eye}){
    const [isfocused, setIsfocused] = useState(false);
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    //função para visibilidade do password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //função para atualizar o input toda hora
    const HandleChange = (e) => {
        setValue(e.target.value);
    }


    return(
        <InputWrapper isfocused={isfocused}>
            <Line
                isfocused={isfocused}
            />
            <Input 
                id={label}
                type={showPassword ? 'text' : type} 
                isfocused={isfocused}
                value={value}
                onFocus={() => setIsfocused(true)}
                onChange ={HandleChange}
                onBlur={() => setIsfocused(false)}

            />
            <InputLabel
                htmlFor={label}
                isfocused={isfocused} 
                hasvalue={value.length > 0}>
                    {label}
            </InputLabel>
            {pass_eye && (
                <EyeIcon 
                    className={`fa-regular fa-eye${showPassword ? '' : '-slash'}`} 
                    id="eye"
                    onClick={togglePasswordVisibility}
                />
            )}
                            
        </InputWrapper>
    )
}
