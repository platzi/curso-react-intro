import { useLocalStorage } from "../components/TodoContext/useLocalStorage";
import React from "react";
import { AppUI } from "./AppUI";
import "./css/body.css";
import "./css/button-input.css";
import { TodoProvider } from "../components/TodoContext/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
