import { useState } from 'react'
import './App.css'
import Input_dsktp from './components/inputs/Input_dsktp.jsx'
import Button_dsktp from './components/inputs/Button_dsktp.jsx'

function App() {

  return (
    <main>
      <h1>Componentes</h1>
      <div className="card">
        <Input_dsktp  type="email" label="Email"/>
        <Input_dsktp  type="password" label="Senha" pass_eye={true}/>
      </div>
      <div className="container">
        <Button_dsktp text="Entrar"/>
      </div>
      
    </main>
  )
}

export default App
