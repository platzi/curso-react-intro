import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
import { ButtonAdd } from "./ButtonIcon";
import "../App.css";

function App() {
  return (
    <>
      <main className="App">
        <HeaderTodo completed={16} total={20} />
        <section>
          <TodoItem />
        </section>
        <div>
          <ButtonAdd />
        </div>
      </main>
    </>
  );
}

export default App;
