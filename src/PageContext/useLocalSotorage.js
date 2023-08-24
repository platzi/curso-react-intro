import React from "react"

// CUSTOM HOOK

function useLocalStorage(itemName, intialValue){

  const [item, setItem] = React.useState(intialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
    // LOCAL STORAGE
    React.useEffect(()=>{ // conesta funcion que es un custom hook, en react es la manera de ejecutar una funcion asincrona
      setTimeout(()=>{ // Esta es la forma de ejecutar una funcion asincrona con React, aunque lo que estamos haciendo es un custom hook pero con asincronismo
        try {
          const localStorageItem = localStorage.getItem(itemName)
  
          let parsedItem
  
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(intialValue))
            parsedItem = intialValue
          } else{
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)
        }catch(error){
          setError(true)
          setLoading(false)
        }
      }, 2000)
    }, [])
  
    const saveItem = (newItem)=>{ // Esta funcion actualiza el estado y el localStorage
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return {
      item, 
      saveItem, 
      loading, 
      error}
}

export { useLocalStorage }
