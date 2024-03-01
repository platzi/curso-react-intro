import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import React from 'react';

function App() {

  
  return (

    <TodoProvider>
      <AppUI/>
    </TodoProvider>
   
  )
}



export default App;
