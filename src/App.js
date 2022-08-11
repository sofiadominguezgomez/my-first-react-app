import logo from './logo.svg';
import './App.css';
import satisfied from './assets/satisfied.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={satisfied} className="App-logo" alt="logo" />
        <p>
          Mi primer proyecto con React
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
