import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from "axios";

const baseURL2 = "https://mio-back-test.azurewebsites.net/api/test";
const baseURL = "https://api7miodev.tasa.com.pe/api/get-all-users-plants";

function App() {
  const [text, setText] = useState('-');

  const onClick = () => {
      axios.get(baseURL).then((response) => {
        console.log(response.data);
        setText(response.data.length);
      });
  }

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
      <div className="card">
        <button onClick={() => onClick()}>
          Get Test
        </button>

        <h1>{text}</h1>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
