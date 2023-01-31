import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';

function App() {
  const array = ["allright", "bey", "del"]
  return (
    <div className="App">
      <header className="App-header">
        {array.map((v, i) => {
          return <Nav text={v}/>
        })}
        <Nav text="Allright?"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
