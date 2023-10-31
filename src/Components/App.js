import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
import { ButtonAdd } from "./ButtonIcon";
import "../App.css";

function App() {
  return (
    <>
      <main className="App">
        <HeaderTodo />
        <ul>
          <TodoItem />
        </ul>
        <div>
          <ButtonAdd />
        </div>
      </main>
    </>
  );
}

export default App;
