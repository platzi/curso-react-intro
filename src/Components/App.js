import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
import { SectionAddTodo } from "./ButtonIcon";
import "../App.css";

const App =() => {
  return (
    <>
      <main className="App">
        <section className="todoApp">
          <HeaderTodo completed={16} total={20} />
          <div>
            <TodoItem />
          </div>
        </section>
        <section className="addTodo">
          <SectionAddTodo />
        </section>
      </main>
    </>
  );
}

export default App;
