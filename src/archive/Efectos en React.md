>**PROBLEMA: LOGICA PESADA**
Hay partes de la logica de nuestros componentes que son mas complejas o pesadas. Podemos tener momentos donde partes de esa logica pueden demorarse algunos segundos (consultas a API, condicionales, etc).

Al tener que volver a renderizar nuestro componente, toda la logica, incluso la complicada tiene que volver a renderizarse y por tanto repetir esa logica pesada.

Si esa logica solo teniamos que aplicarla una vez, la primera renderizada, lo mejor es no tener que volverla a realizar.

>**SOLUCION: EFECTOS EN REACT**
Los efectos son una herramienta que nos permite encapsular una logica pesada o demorada y protegerlos para que unicamente se ejecuten cuando lo necesitamos.

Al iniciar la pagina por primera vez se ejecutan todas las funciones, pero al cambiar el estado no siempre se va a volver a correr el codigo dentro del useEffect, sino que este se volver a correr unicamente cuando cambie un estado especifico que le digamos.

Ejemplo usando console.log

Tenemos dentro de la logica de nuestro componente estas tres funciones de ejemplo. Una dentro de el useEffect y dos por fuera.

```
    console.log(1)
    React.useEffect(()=>{
            console.log(2)
    })
    console.log(3)
```
Los tres log aparecen, pero el ultimo en aparecer es el log 2. Al encapsularlo en el efecto: se ejecuta al final.

*React.useEffect* recibe como primer argumento una funcion que es la logica pesada. Como segundo argumento recibe un Array, si le pasamos un Array vacio y actualizamos cualquier estado no va a volver a correr ese codigo al renderizar. Si por otro lado el Array contiene un estado o varios estados, entonces la logica se volvera a correr unicamente cuando el render sea ocasionado por cambios en esos estados que especificamos dentor del Array.

Puede ser cualquier estado, bien sea un estado como tal o un estado derivado.

>**CUAL ES EL USO DEL EFECTO?**
Por ejemplo si tenemos un componente que debe cargar una informacion mediante una API de manera asincrona, esta informacion tarda en llegar y mientras tanto, que pasa con nuestro componente? El usuario que observa? un mensaje cargando, un icono?

En cambio, si usamos el efecto podemos encapsular el llamado a la API, para que ocurra al final una vez se ha cargado por primera vez nuestro componente y llame un re-renderizado para que cambie nuestro mensaje temporal de cargando…. por la informacion necesaria.

Ademas al pasarle el Array vacio no haremos nuevos llamados innecesarios a la API

----------------------------------------------------------------------------------------------------------------------------------------


**Que son los efectos en React?** Es una función que actúa como una tarea secundaria después que el componente se haya renderizado esto es perfecto para realizar peticiones a una API que sabemos que tardaran unos algunos segundos en traerse los datos para luego montarlos en un componente para ser renderizados. También se utiliza para otras cosas como actualizar el estado de un componente, suscribirse a eventos o manipular el DOM.

El efecto (en React el hook se llama useEffect) recibe dos parametros:

1. Una función que define el efecto a realizar
2. Una lista de dependencias que determinan cuándo se debe volver a ejecutar el efecto. Esta lista especifica las variables que el efecto depende y si y solo si alguna de estas variables cambia entre renderizaciones, el efecto se ejecutará de nuevo. Es importante recalcar que SI NO HAY ninguna variable en la lista de dependencias, el efecto se ejecutará en cada renderización. SPOILER: React estalla XD
Un ejemplo

```
    <import React, { useState, useEffect } from 'react';

    function ExampleComponent() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            document.title = `Count is ${count}`;
        }, [count]);

        function handleClick() {
            setCount(count + 1);
        }

        return (
            <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment Count</button>
            </div>
        );
    }> 
```

En este ejemplo, useEffect se utiliza para actualizar el título de la página con el valor actual del contador. La función de efecto se ejecuta después de cada renderizado del componente porque se ha especificado [count] como la lista de dependencias para el useEffect. Esto significa que el efecto solo se ejecutará si el valor de count ha cambiado desde la última renderización.

Cada vez que el usuario hace clic en el botón "Increment Count", el valor de count se incrementa en 1 y se llama a la función setCount para actualizar el estado del componente. Como resultado, se vuelve a renderizar el componente y se ejecuta la función de efecto, lo que actualiza el título de la página con el nuevo valor del contador.
