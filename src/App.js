import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <TodoItem completed={3} total={10} />
        <TodoItem completed={5} total={10} />
        <TodoItem completed={8} total={10} />  
        
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

function TodoItem(props) {
    return(
        <h2>
            Completed {props.completed} of {props.total} TODOs
        </h2>
    );
}

export default App;
