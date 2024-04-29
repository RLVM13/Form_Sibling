import { useState } from 'react'
import Form from './components/Form/';
import Head from './components/Head/';
import Card from './components/Card/';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [fom, setFormulario] = useState('');
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <Form setMessage={setMessage} />
        <Head message={message} />
        <Card fom={setFormulario} />
      </div>
    </>
  )
}

export default App
