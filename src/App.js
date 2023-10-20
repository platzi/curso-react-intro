import React from 'react';
import { ToDoCounter } from './Components/ToDoCounter';
import { ToDosearch } from './Components/ToDoSearch';
import { ToDoList } from './Components/ToDoList';
import { ToDoItem } from './Components/ToDoItem';
import { CreateToDoButton } from './Components/CreateToDoButton';

// const defaultToDos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Lalalala', completed: false },
//   { text: 'Bebe', completed: true }
// ];

// localStorage.setItem('todoish_v1', JSON.stringify(defaultToDos));
// localStorage.removeItem('todoish_v1');

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.
      stringify([initialValue]));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}



function App() {

  const [toDos, saveTodos] = useLocalStorage
    ('todoish_v1', []);

  const [searchValue, setSearchValue] =
    React.useState('');

  const completedToDos = toDos.filter(
    toDo => !!toDo.completed
  ).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter(
    (toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    }
  );

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos[toDoIndex].completed = true;
    saveTodos(newToDos);
  };

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);
    saveTodos(newToDos);
  };

  console.log('Los usuarios buscan to dos de ' + searchValue);

  return (
    <>
      <section className='container'>

        <ToDoCounter
          completed={completedToDos}
          total={totalToDos} />

        <ToDosearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <ToDoList>
          {searchedToDos.map(toDo => (
            <ToDoItem
              key={toDo.text}
              text={toDo.text}
              completed={toDo.completed}
              onComplete={() => completeToDo(toDo.text)}
              onDelete={() => deleteToDo(toDo.text)}
            />
          ))}

        </ToDoList>

        <CreateToDoButton />

      </section>
    </>
  );
}

export default App;