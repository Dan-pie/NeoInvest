import { useState } from 'react'
import Input_dsktp from './components/inputs/Input_dsktp.jsx'
import Button_dsktp from './components/Buttons/Button_dsktp.jsx'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import Logo from './components/logo.jsx'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Sf-pro';
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    color: black;
  }

  .block-Form {
    padding: 50px;
    background-color: white;
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .all nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    align-items: center;
    width: 250px;
  }

  .all .title {
    margin-bottom: 50px;
  }

  .buttonWrapper {
    margin-top: 43px;
    height: 65px;
    width: 150px;
  }

  h1 {
    font-family: 'Neutra';
    font-weight: lighter;
    font-size: 2.5vw;
  }

  h3 {
    font-family: 'Neutra';
    font-size: 1.1vw;
    font-weight: lighter;
    max-width: 250px;
    color: rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-family: 'Neutra';
    font-size: 2vw;
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.3s ease;
  }

  h2:hover {
    cursor: pointer;
    color: black;
  }

  .active {
    color: black;
    text-decoration: underline;
  }

  .blockLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 45%;
  }

  #forgot {
    width: 100px;
    color: rgba(0, 0, 0, 0.58);
    transition: color 0.3s ease;
  }

  #forgot:hover {
    cursor: pointer;
    color: black;
  }

  .input-checkbox {
    display: flex;
    align-items: center;
  }

  #checkbox {
    margin-right: 10px;
  }

  label, #checkbox:hover {
    cursor: pointer;
  }



  /* Responsividade */
  @media (max-width: 1024px) {
    main {
      flex-direction: column;
      height: auto;
    }

    .block-Form {
      width: 100%;
      padding: 30px;
    }

    .blockLogo {
      width: 100%;
      height: 200px;
    }

    h1 {
      font-size: 5vw;
    }

    h3 {
      font-size: 1.8vw;
    }

    h2 {
      font-size: 3vw;
    }

    .buttonWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    .all nav {
      width: 100%;
      justify-content: center;
      gap: 20px;
    }

    h1 {
      font-size: 6vw;
    }

    h3 {
      font-size: 3vw;
    }

    h2 {
      font-size: 4vw;
    }

    .buttonWrapper {
      width: 100%;
    }
  }
`;


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
  `

function App() {
  const [isCadastro, seIsCadastro] = useState(false);

  return (
    <main>
      <GlobalStyle/>
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
          
          <InputWrapper cad={isCadastro}>
            <Input_dsktp label='Email' pass_eye={false} type='email'/>
            <Input_dsktp label='Senha' pass_eye={true} type='password'/>
            {isCadastro && <Input_dsktp label='Confirmar Senha' pass_eye={false} type='password'/>}
          </InputWrapper>
            
          <RememberWrapper cad={isCadastro}>
            <div className="input-checkbox">
              <input type="checkbox" id='checkbox'/>
              <label htmlFor="checkbox">Remember me</label>
            </div>

            <p id='forgot'>Esqueceu sua senha?</p>
          </RememberWrapper>

          <div className="buttonWrapper">
              <Button_dsktp className='btn' text={isCadastro ? 'Cadastrar' : 'Login'}  fontsize='24px'/>
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
