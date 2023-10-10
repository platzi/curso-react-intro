import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButtom";
import { Card, Container } from "@mui/material";
import { useState } from "react";
import { Filter } from "@mui/icons-material";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Hacer el curso de Platzi", completed: false },
  { text: "Sacar a los gatos", completed: false },
  { text: "Hacer el almuerzo", completed: false },
];

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const filterTodos = todos.filter((todo) => todo.text.includes(search));
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Container>
      <Card
        sx={{
          p: 2,
          my: 2,
        }}
      >
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={search} update={handleChange} />
        <TodoList>
          {filterTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </Card>
      <CreateTodoButton />
    </Container>
  );
}

export default App;
