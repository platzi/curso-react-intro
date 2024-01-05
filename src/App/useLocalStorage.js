import React from 'react';

// Esta función maneja el uso del localStorage para un elemento específico
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loanding, setLoanding] = React.useState(true);     //estado de cargando
    const [error, setError] = React.useState(false);          //estado de error
    
    React.useEffect(() => { //ahora es asincrona (se demorara)
        // Extrae el elemento del localStorage
        const localStorageItem = localStorage.getItem(itemName);
        
        let parsedItem;

        // Comprueba si no hay datos en el localStorage
        if (!localStorageItem) {
            // Si no hay datos, establece el valor inicial y lo almacena en el localStorage
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue; // Establece el valor inicial
        } else {
            // Si hay datos en el localStorage, los convierte de formato string a formato de arreglo usando JSON.parse()
            parsedItem = JSON.parse(localStorageItem);
        }
    });

    // Función para guardar un nuevo item en el localStorage y actualizar el estado
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item, 
        saveItem, 
        loanding, 
        error
    }; // si tenemos mas de DOS ELEMENTOS que queremos RETORNAR dentro de  los CustomHoocks; es mucho mas recomendable que enviemos un objeto{} que un array()
}

export { useLocalStorage }