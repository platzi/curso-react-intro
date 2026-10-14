# Tasklist React Intro

Este proyecto es una aplicación de lista de tareas construida con React usando Create React App. La idea principal es practicar los conceptos básicos de React, como componentes, estado, eventos, renderizado dinámico y almacenamiento local en el navegador.

## ¿De qué trata la aplicación?

La app permite:

- crear nuevas tareas
- marcar tareas como completadas
- eliminar tareas
- buscar tareas por texto
- mostrar cuántas tareas están hechas y cuántas faltan por completar
- guardar los datos en el navegador con localStorage

Es una pequeña práctica realista de una app de productividad, similar a una lista de compras o un gestor de pendientes.

## ¿Cómo se hizo?

Se construyó con React y se estructuró en componentes para separar responsabilidades:

1. El punto de entrada de la aplicación se encuentra en `src/index.js`.
2. La lógica principal vive en `src/App/index.js`.
3. La vista principal se organiza desde `src/App/AppUI.js`.
4. La persistencia de datos se maneja con `src/App/useLocalStorage.js`.
5. Cada bloque visual se divide en componentes individuales como contador, buscador, lista y cada tarea.

La aplicación usa estados para controlar:

- la lista de tareas
- el texto de búsqueda
- si el modal está abierto o cerrado
- cuántas tareas están completadas

Además, cada cambio en la lista se guarda en localStorage para que no se pierda al recargar la página.

## Estructura de archivos

```text
src/
├── index.css
├── index.js
├── App/
│   ├── AppUI.js
│   ├── app.css
│   ├── index.js
│   └── useLocalStorage.js
├── CreateTodoButton/
│   ├── CreateTodoButton.css
│   └── index.js
├── Modal/
│   ├── Modal.css
│   └── index.js
├── TodoCounter/
│   ├── TodoCounter.css
│   └── index.js
├── TodoItem/
│   ├── TodoItem.css
│   └── index.js
├── TodoList/
│   └── index.js
├── TodoSearch/
│   ├── Todosearch.css
│   └── index.js
└── ...
```

### Descripción de las principales carpetas

- `src/index.js`
  - es el archivo principal que inicializa la app en el navegador.

- `src/App/`
  - contiene la lógica central de la aplicación, como estados, búsqueda y funciones para agregar, completar y eliminar tareas.

- `src/App/AppUI.js`
  - organiza la interfaz: contador, buscador, lista y botón para crear nuevas tareas.

- `src/App/useLocalStorage.js`
  - encapsula la lectura y escritura de datos en `localStorage`.

- `src/TodoCounter/`
  - muestra cuántas tareas hay en total y cuántas están completadas.

- `src/TodoSearch/`
  - permite filtrar tareas con texto escrito por el usuario.

- `src/TodoList/`
  - renderiza la colección de tareas.

- `src/TodoItem/`
  - representa cada tarea individual y permite completarla o borrarla.

- `src/CreateTodoButton/`
  - botón para abrir un modal donde se agregan nuevas tareas.

- `src/Modal/`
  - formulario para crear la nueva tarea.

## Flujo de la aplicación

El flujo de la app es bastante simple:

1. El usuario escribe en el buscador.
2. El valor del campo cambia en el estado.
3. La lista se filtra según el texto ingresado.
4. El usuario puede marcar una tarea como hecha o eliminarla.
5. El estado se actualiza y se guarda en localStorage.
6. Cuando la página se vuelve a cargar, la app recupera la información guardada y la muestra de nuevo.

## Cómo ejecutar el proyecto

```bash
npm install
npm start
```

Esto abrirá la aplicación en el navegador en:

```text
http://localhost:3000
```

## Despliegue

El proyecto está preparado para ser desplegado en GitHub Pages con la ruta del repositorio correspondiente, por ejemplo:

```text
https://anyelo85.github.io/Tasklist-react-intro/
```

## Tecnologías usadas

- React
- JavaScript
- CSS
- localStorage
- Create React App

## Resumen

Este proyecto es una práctica básica pero completa de React: aprendemos a manejar estado, crear componentes, trabajar con eventos y guardar datos en el navegador. La estructura modular hace que el código sea más fácil de entender, mantener y ampliar en el futuro.

