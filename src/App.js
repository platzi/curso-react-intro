import React from 'react';
import { AppUI } from './app/AppUI';
import { TodoProvider } from './components/TodoContext';

function App() {

  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
