import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { Card, Container } from "@mui/material";
import { useState } from "react";
import Todo from "./models/todo";
import Button from "@mui/material/Button";

const defaultTodos = [
  new Todo("Cortar cebolla", true),
  new Todo("Hacer el curso de Platzi"),
  new Todo("Hacer la maleta"),
  new Todo("Almorzar"),
];

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const filterTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleTodoToggle = (id) => {
    console.log("Toggle", id);
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.completed = !todo.completed;
    newTodos[index] = todo;
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    console.log("Delete", id);
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = () => {
    console.log("Add");
    const newTodo = new Todo(search);
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
    setSearch("");
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
              key={todo.id}
              todo={todo}
              onToggle={handleTodoToggle}
              onDelete={handleDelete}
            />
          ))}
        </TodoList>
      </Card>
      <Button variant="contained" fullWidth onClick={addTodo}>
        +
      </Button>
    </Container>
  );
}

export default App;
