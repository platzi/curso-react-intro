import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="TodoItem--Loading">
      <div className="TodoItem--checkbox--loading"></div>
      <div className="TodoItem--textbox--loading"></div>
      <div className="TodoItem--delete--loading"></div>
    </div>
  );
}

export { TodosLoading };
