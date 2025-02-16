import { useState } from 'react'
import Input_dsktp from './components/inputs/Input_dsktp.jsx'
import Button_dsktp from './components/Buttons/Button_dsktp.jsx'
import { createGlobalStyle } from 'styled-components'
import Logo from './components/logo.jsx'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Sf-pro';
    }

  main {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    color: black;
  }

  .blockForm{
    padding: 50px;
    box-sizing: border-box;
    background-color :white;
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
  }

   .all >nav{
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    align-items: center;
    width: 250px;
  }

  .all >.title{
    margin-bottom: 50px;
  }

  .all > .card{
  margin-bottom: 20px;
  width: 480px;
  height: 130px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .ctn-button{
    height: 10%;
    width: 20%;

  }

  .buttonWrapper{
    height: 65px;
    width: 150px;
  }

  h1{
    font-family: 'Neutra';
    font-weight: lighter;
    font-size: 40px;
  }

  h3{
    font-family: 'Neutra';
    font-size: 18px;
    font-weight: lighter;
    width: 250px;
    color: rgba(0, 0, 0, 0.5);
  }

  h2{
    font-family: 'Neutra';
    font-size: 25px;
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.3s ease;
    
  }

  h2:hover{
    cursor: pointer;
    color: black;
  }

  .active{
    color: black;
    underline: 1px;
    text-decoration: underline;
  }

  .blockLogo{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 45%;
  }

  #logo{
    width: 40px;
    height: 80px;
  }

  .remember{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 480px;
    margin-bottom: 50px;
  }

  #forgot{
    width: 100px;
    color:rgba(0, 0, 0, 0.58);
    transition: color 0.3s ease;
  }
  
  #forgot:hover{
    cursor: pointer;
    color: black;
  }

  .inpt-checkbox{
    display: flex;
    align-items: center;
  }

  #checkbox{
    margin-right: 10px;
  }

  label ,#checkbox:hover{
    cursor: pointer;
  }


` 

function App() {

  return (
    <main>
      <GlobalStyle/>
      <div className="blockForm">
        <div className="all">
          <nav>
            <h2 className='active'>Login</h2>
            <h2>Cadastro</h2>
          </nav>
          <div className="title">
            <h1>Bem vindo de volta!</h1>
            <h3>Estávamos ansiosos pela sua volta</h3>
          </div>
          
          <div className="card">
            <Input_dsktp label='Email' pass_eye={false} type='email'/>
            <Input_dsktp label='Senha' pass_eye={true} type='password'/>
          </div>
            
          <div className="remember">
            <div className="inpt-checkbox">
              <input type="checkbox" id='checkbox'/>
              <label htmlFor="checkbox">Remember me</label>
            </div>

            <p id='forgot'>Esqueceu sua senha?</p>
          </div>

          <div className="buttonWrapper">
              <Button_dsktp className='btn' text='Login' fontsize='24px'/>
          </div>

        </div>
        
      </div>

      <div className='blockLogo'>
      
        <Logo/>

      </div>
    </main>
  )
}

export default App
