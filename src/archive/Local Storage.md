>**LocalStorage** es una forma de almacenar datos en el navegador web, que persisten aún después de que el usuario haya cerrado la ventana o salido del sitio web. Es útil para guardar información del usuario, como preferencias, configuraciones, entre otros. . Los métodos más comunes de LocalStorage son: 
>>- *localStorage.setItem(key, value):* Agrega un elemento con una clave y un valor al almacenamiento local. 
>>- *localStorage.getItem(key):* Recupera el valor de la clave especificada en el almacenamiento local. 
>>- *localStorage.removeItem(key):* Remueve un elemento del almacenamiento local según su clave. localStorage.clear(): Borra todos los elementos del almacenamiento local.

----------EN CONCLUSION:
    El Local Storage permite que se guarde la informacion de la pagina cuando el usuario borre lapestaña, la ventana del navegador o apagar su dipositivo... y aun asi cuando vuelva a la pagina, esa informacion que dejo alli se mantenga sin modificafiones hasta que el usuario lo permita 

------------------------------------------------------------------------------

si nosotros colocamos en la consola del navegador ↓

```javascript
    const defaultTodos = [
        { text: 'Cortar cebolla', completed: false },
        { text: 'Tomar el Curso de Intro a React.js', completed: true },
        { text: 'Usar estados derivados', completed: false },
        { text: 'Cortar berenjena', completed: false },
        { text: 'Tomar la ruta de JavaScript a pronfundidad', completed: false },
        { text: 'Llorar con la Llorona', completed: false },
        { text: 'LALALALALA', completed: false },
        {text: 'cortarte las uñas', completed: false},
    ]

    localStorage.setItem('TODOS_V1', defaultTodos) 
```

y luego colocamos:

    ```localStorage```

no nos va a aparecer el array creado TODO_V1, y si lo preguntamos directamene:

    ```localStorage.getItem('TODOS_V1')```

tampoco va a aparecer nada, solamente un string un poco extraño diciendo consecutivamente  Object.... ya que el **localStorage** no  puede guardar estructuras complejas, solamente, si o si puros *strings*
Entonces, la herramienta que utilizaremos para convertir cualquier objeto de javascript en string es ↓

    ```JSON.stringify(defaultTodos)```

 y para saber la cantidad de los caracteres:
    
    ```JSON.stringify(defaultTodos).length```

            para tenerlo mas facil de leer: ```const stringifiedTodos = JSON.stringify(defaultTodos)```

Y la otra herramienta que utilizaremos para convertir stringt en objetos javascript (viceversa), es ↓

    ```JSON.parse(stringifiedTodos)```
