import "./../css/TodoCounter.css";

function TodoCounter({ completed }) {
  return <h1 className="TodoCounter">You have {completed} pending TODOs</h1>;
}

export { TodoCounter };
