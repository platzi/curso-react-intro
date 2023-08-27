import "./../css/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      You have completed {completed} of {total} total TODOs
    </h1>
  );
}

export { TodoCounter };
