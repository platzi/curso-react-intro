import React from "react"


//Custom Hooks
function useLocalStorage(itemName, initialValue) {
     //create state for localStorage
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
                    setItem(parsedItem)
                }
                setLoading(false)
            } catch(err) {
            setError(true)
            }
        }, 4000)
    }, [itemName, initialValue])


    //function actualized localStorage y State
    function saveItem(newItem) {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem) //guardant los primeros todos en localStorage y en el estate
    }
    return {
        item, 
        saveItem,
        loading,
        error,
    }
}
export { useLocalStorage }