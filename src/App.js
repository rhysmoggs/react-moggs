import logo from './logo.svg'
import './App.css'
import Nav from './Nav'
import { useState } from 'react'
import Table from './Table'

function App() {
  const [count, setCount] = useState({
    count: 10,
    name: 'james',
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
        <h2>{count.count}</h2>
        <button onClick={() => setCount((prevState) => prevState.count + 1)}>
          Add
        </button>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>

        <Table />
      </header>
    </div>
  )
}

export default App
