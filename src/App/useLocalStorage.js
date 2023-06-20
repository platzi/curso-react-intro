import React from "react"


//Custom Hooks
function useLocalStorage(itemName, initialValue) {
     //create state for localStorage
    const [sincronizedItem, setSincronizedItem] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(()=>{
            try{
                const localStorageItem = localStorage.getItem(itemName)//obtener todos
                let parsedItem
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem)
                setLoading(false)
                setSincronizedItem(true)
            } catch(error) {
            setError(error)
            }
        }, 3000)
    }, [sincronizedItem,itemName,initialValue])


    //function actualized localStorage y State
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem);
        } catch(error) {
        setError(error);
        }
    }
    const sincronizeItem = () => {
        setLoading(true)
        setSincronizedItem(false)
    }
    return {
        item, 
        saveItem,
        loading,
        error,
        sincronizeItem
    }
}
export { useLocalStorage }

//We made a variable with array to create properties
//const defaultTodos = [
  //{text: 'I am Venezuela', completed: false},
  //{text: 'I am Col', completed: false},
  //{text: 'I am Ven', completed: false},
  //{text: 'I am Colombia', completed: false},
  //{text: 'estates derivation', completed: false},
//]
//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
//localStorage.removeItem('TODOS_V1')