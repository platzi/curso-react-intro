import React from "react";

//crear una funcion para contener todas las funcion es relacionadas con localStorage
function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    

    //ingreso por primera vez a la aplicacion
    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedTodosItem;
        
                if (!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedTodosItem = initialValue;
                }else{
                    parsedTodosItem = JSON.parse(localStorageItem);
                    setItem(parsedTodosItem);
                }
                setLoading(false);
                }catch(error){
                    setLoading(false);
                    setError(true);
                }  
        }, 2000);
    }, [initialValue, itemName]);    

    //funciona para actualizar locastorage y el estado.
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));    
        setItem (newItem);
    };

    return {
        item, 
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };