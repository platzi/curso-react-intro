import React from 'react'
const useLocalStorage = (itemName, initialValue)=>{
    let parsedItem;
      const localStorageItem = localStorage.getItem(itemName)
    
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue))
        parsedItem = initialValue
      }else{
        parsedItem = JSON.parse(localStorageItem)
      }
    
      const [item, setItem] = React.useState(parsedItem) 
      const saveItem = (newTodos)=>{
          localStorage.setItem(itemName, JSON.stringify(newTodos))
          setItem(newTodos)
      }
    
      return [item, saveItem]
    }

    export {useLocalStorage}