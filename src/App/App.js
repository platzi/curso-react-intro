import React from "react";
import { Logica } from "./logica";
import {TodoProvider} from "../Contexts/todoContext"
function App() {

  //se separan entre statefull y stateless
  return (
    <TodoProvider>
      <Logica/>
    </TodoProvider>
   
  );
}

export default App;
