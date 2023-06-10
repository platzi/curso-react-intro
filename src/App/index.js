import React from 'react'
import { AppUI } from './AppUI'
import { TodoProvider } from '../Components/TodoContext';


function App() {
return (
  <TodoProvider>
    <AppUI />
  </TodoProvider>
)
}
export default App;
