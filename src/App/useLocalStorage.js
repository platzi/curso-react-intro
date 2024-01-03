import React from 'react';

// Esta función maneja el uso del localStorage para un elemento específico
function useLocalStorage(itemName, initialValue) {
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
    
        // Usa React.useState para manejar el estado del item y su actualización
        const [item, setItem] = React.useState(parsedItem);

        // Función para guardar un nuevo item en el localStorage y actualizar el estado
        const saveItem = (newItem) => {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        };

      return [item, saveItem]; // Devuelve el estado actual del item y la función para actualizarlo
}

export { useLocalStorage }