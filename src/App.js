import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoItems />
      <ToDoItems />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos react!!
        </a>
      </header>
    </div>
  );
}

function ToDoItems() {
  return (
    <li>
      <span>V</span>
      <p>Ir a la comicon!</p>
      <span>X</span>
    </li>
  );
}

export default App;
