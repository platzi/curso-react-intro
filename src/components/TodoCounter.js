import "./../css/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      {total == 0
        ? `Congratulations, you have no left TODOs :D`
        : ` You have completed ${completed} of ${total} total TODOs`}
    </h1>
  );
}

export { TodoCounter };
