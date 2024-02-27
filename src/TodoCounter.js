function TodoCounter({ completed, total }) {
  return (
    <h1>
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };