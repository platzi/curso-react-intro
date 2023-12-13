import logo from './platzi.webp';
import './App.css';

function App() {
  return ( // a partir de aqui no estamos incorporando html, sino JSX
    <div className="App">

  {/* ¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />  */}
    <TodoCount
      completed={3}
      total={5}
    />
    
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>

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
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoCount(props){
  return(
    <h1>Ya completaste {props.completed} de {props.total} TODO's</h1>
  )
}

function TodoItem(){ //componente
  return( //elemento
    <li>
      <span>V</span>
      <p>Llorar con la llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
