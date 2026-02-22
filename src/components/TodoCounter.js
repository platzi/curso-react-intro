// Props: completed, total
// Este componente recibe datos desde fuera y los muestra.
// Nota: NO tiene estado propio todavía, solo muestra lo que le pasan.
function TodoCounter({ completed, total }) {
     return (
          <h1>Has completado <span>{completed}</span> de <span>{total}</span> tareas</h1>
     );
}

export { TodoCounter };
