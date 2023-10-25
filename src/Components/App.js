import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
import "../App.css";

function App() {
  return (
    <>
      <div className="App">
        <main>
          <HeaderTodo />
          <ul>
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
