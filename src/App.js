import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mi primera vez en este curso</p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <CountTodo />
        <TodoItem />
      </main>
    </div>
  );
}

function TodoItem() {
  return (
    <li style={{ listStyle: "none" }}>
      <span>V</span>
      <p>Hacer el curso</p>
      <span>X</span>
    </li>
  );
}

function CountTodo(){
  return(
    <h1>
      Completaste 3 de 5 ToDo
    </h1>
  );
}

export default App;
