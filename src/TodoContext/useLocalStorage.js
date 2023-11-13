import React from "react";

function useLocalStorage (itemName, initialValue){

  // mostrar el skeleton y el valor inicial de localStorage
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showCounter, setShowCounter] = React.useState(false);
  const [showGraphic, setShowGraphic] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(() =>{
      try{
        const localStorageItem = localStorage.getItem(itemName); 
    
        let parsedItem;
        
        if(!localStorageItem){ 
          localStorage.setItem(itemName, JSON.stringify(initialValue)); 
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true)
        }
    }, 2000);
  }, []);

  React.useEffect(() => {
    if(!loading){
      setShowSearch(true);
      setShowCounter(true);
      setShowGraphic(true);
    }
  }, [loading]);


    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    return {
            item, 
            saveItem, 
            loading, 
            error,
            showSearch,
            showCounter,
            showGraphic,
          };
  };

export {useLocalStorage};

//localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Introcción a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'LALA', completed: true },
//   { text: "el filtro de todos || completados || faltan", completed : false },
//   { text: 'reto - diga felicidades ya terminaste todo', completed: false },
//   { text: 'las leyendas e instrucciones', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
