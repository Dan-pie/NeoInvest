import { useState, useEffect } from 'react'
//importação de componentes
import Input_dsktp from './components/inputs/Input_dsktp.jsx'
import Button_dsktp from './components/Buttons/Button_dsktp.jsx'
import Button_google from './components/Buttons/Button_google.jsx'
import Button_twitter from './components/Buttons/Button_twitter.jsx'
import ForgotPassword from './components/Buttons/forgot_pass.jsx'
import Logo from './components/logo.jsx'
//importação de estilos
import styled from 'styled-components'
import './styles/App.css'
//importação do firebase
import { auth,db } from './firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, getDoc } from "firebase/firestore";



const InputWrapper = styled.div`
    margin-bottom: 20px;
    width: 480px;
    height: ${({cad}) => (cad ? '195px' : '130px')};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

const RememberWrapper = styled.div`
    display: ${({cad}) => (cad ? 'none' : 'flex')};
    justify-content: space-between;
    align-items: center;
    width: 480px;
    margin-bottom: 50px;


    @media (max-width: 600px){
      width: 350px;
    }
  `



function App() {
  const [isCadastro, seIsCadastro] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Handleregister = async(e) =>{
    e.preventDefault();
    if (!email || !senha || !nome) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    try{
      const UserCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = UserCredential.user

      await setDoc(doc(db, "users", user.uid),{
        name: nome,
        email: email,
      })

      alert('FOI SEU PUTO')
    } 
    catch(error){

      if (error.code == 'auth/email-already-in-use'){
        alert('Email já em uso!');
      }
      else{
        alert('Ocorreu o erro: ' + error.code);
      }
    }
  }

  const Handlelogin = async(e) => {
    e.preventDefault();
    try{
      const UserCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = UserCredential.user
      alert('LOGADO')
    }
    catch(error){
      alert('verifique suas credenciais')
    }
  }
  


  return (
    <main>

      <div className="block-Form">
        <div className="all">
          <nav>
            <h2 className={!isCadastro ? 'active' : ''} onClick={() => seIsCadastro(false)}>Login</h2>
            <h2 className={isCadastro ? 'active' : ''} onClick={() => seIsCadastro(true)}>Cadastro</h2>
          </nav>
          <div className="title">
            <h1>{ isCadastro ? 'Junte-se a nós!' : 'Bem vindo de volta!'}</h1>
            <h3>{ isCadastro ? 'Mal podemos esperar para ver o que você conquistará' : 'Estávamos ansiosos pela sua volta'}</h3>
          </div>
          
          <form onSubmit={isCadastro ? Handleregister : Handlelogin}>
            <InputWrapper className='custom-input-wrapper' cad={isCadastro}>
              <Input_dsktp 
                onChange={isCadastro ? (e) => setNome(e.target.value) : (e) => setEmail(e.target.value)} 
                label={isCadastro ? 'Nome' : 'Email'} 
                pass_eye={false} 
                type={isCadastro ? 'text' : 'email'}
                value={isCadastro ? nome : email}
                />

                
              <Input_dsktp 
              onChange={isCadastro ? (e) => setEmail(e.target.value) : (e) => setSenha(e.target.value)} 
              label={isCadastro ? 'Email' : 'Senha'} 
              pass_eye={isCadastro ? false : true} 
              type={isCadastro ? 'email' : 'password'}
              value = {isCadastro ? email : senha}
              />

              {isCadastro && <Input_dsktp 
              label='Senha' 
              pass_eye={true} 
              type='password'
              value={senha}
              onChange={(e) => setSenha(e.target.value)} 
              />}
            </InputWrapper>
            
            <RememberWrapper cad={isCadastro}>
              <div className="input-checkbox">
                <input type="checkbox" id='checkbox'/>
                <label htmlFor="checkbox">Lembrar de mim</label>
                
              </div>
              <ForgotPassword/>
            </RememberWrapper>
            <div className="buttonWrapper">
                <Button_dsktp className='btn' text={isCadastro ? 'Cadastrar' : 'Login'}  fontsize='24px'/>
            </div>
            <div className='extra'>
                <Button_google/>
                <Button_twitter/>
                
            </div>
          </form>

        </div>
        
      </div>

      <div className='blockLogo'>
      
        <Logo/>

      </div>
    </main>
  )
}

export default App
