import React from "react";

function useLocalStorage (itemName, initialValue){

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