import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase"; // Adicionei 'db' para Firestore
import { sendPasswordResetEmail } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore"; // Importações do Firestore

import X_icon from "../x_icon";

const PopupWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.47);
  backdrop-filter: blur(7px);
  z-index: 2;
`;

const PopupContent = styled.div`
  color: white;
  background-color: #1E2F3A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  padding: 20px 40px;
  position: relative;
  border-radius: 10px;
`;

const HeaderForgot = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MainForgot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  color: white;
  border: 3.5px solid ${({ sucess }) => 
  sucess === null ? "white" : sucess ? "green" : "red"};
  border-radius: 5px;
  height: 100%;
  font-size: 16px;
  overflow: hidden;
  box-sizing: border-box; 
  background-color: #1E2F3A;
  padding-left: 10px;
`;

const StyledTitle = styled.div`
  width: 80%;
  height: 100px;
  margin-bottom: 30px;

  & h2 {
    color: white;
    font-size: 30px;
    font-family: Sf-pro;
    font-weight: bold;
  }

  & h2:hover {
    cursor: default;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  width: 40%;
  height: 60px;
  background-color: #ffffff;
  color: #1E2F3A;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 19px;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.39);
    transform: scale(1.05);
  }
`;

export default function ForgotPasswordPopup() {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Digite um email válido!");
      setSucess(false);
      return;
    }

    try {
      // Verificar se o e-mail existe no Firestore
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const userExists = usersSnapshot.docs.some(doc => doc.data().email === email);

      if (!userExists) {
        setMessage("Sem registro no site");
        setSucess(false);
        return;
      }

      // Se o usuário existe, enviar o e-mail de redefinição
      await sendPasswordResetEmail(auth, email);
      setMessage("Email de redefinição enviado!");
      setSucess(true);
    } catch (error) {
      setMessage("Erro ao enviar email. Tente novamente!");
      setSucess(false);
    }
  };

  return (
    <>
      <p id="forgot" onClick={() => setIsOpen(true)}>Esqueceu sua senha?</p>

      <PopupWrapper isOpen={isOpen}>
        <PopupContent>
          <HeaderForgot>
            <StyledTitle>
              <h2 id="redefinir">Redefinir senha</h2>
              <p>Iremos mandar um link para redefinir a senha no seu email</p>
              <p>{message}</p>
            </StyledTitle>
            <X_icon onClick={() => setIsOpen(false)} />
          </HeaderForgot>
          <MainForgot>
            <InputWrapper>
              <Input
                sucess={sucess}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-mail"
              />
            </InputWrapper>
            <Button onClick={handleResetPassword}>Enviar</Button>
          </MainForgot>
        </PopupContent>
      </PopupWrapper>
    </>
  );
}
