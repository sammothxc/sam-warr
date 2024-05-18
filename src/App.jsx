import { useState } from 'react'
import mylogo from '/favicon.svg'
import swlogo from './assets/swlogo.svg'
import rrlogo from './assets/rrlogo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://sam-warr.com" target="_blank">
          <img src={swlogo} className="logo" alt="Sam Warr logo" />
        </a>
        <a href="https://rootrevolution.store" target="_blank">
          <img src={rrlogo} className="logo react" alt="RootRevolution logo" />
        </a>
      </div>
      <h1>sam-warr.com + rootrevolution.store</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the website logos to learn more
      </p>
    </>
  )
}

export default App
