import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editaaa SISISIIS el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn LOL React
        </a>
      </header>
    </div>
  );
}
function TodoItem(){
  return(
    <li>
      <span>V</span>
      <p>aprender react</p>
      <span>X</span>
    </li>
  );
}
export default App;
