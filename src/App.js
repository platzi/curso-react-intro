import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList name={'christian'}>
      </TodoList>
      {/* clase 2 creando la aplicacion  */}
      <TodoList name={'Juan'} />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

function TodoList(props){
  return (
<div>
  <h1>Tarea 34</h1>
  <p> tu nombre es {props.name}</p>
</div>

  );
}

export default App;
