import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButtom";
import { Card, Container } from "@mui/material";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Hacer el curso de Platzi", completed: false },
  { text: "Sacar a los gatos", completed: false },
  { text: "Hacer el almuerzo", completed: false },
];

function App() {
  return (
    <Container>
      <Card
        sx={{
          p: 2,
          my: 2,
        }}
      >
        <TodoCounter completed={16} total={25} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map((todo) => (
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
