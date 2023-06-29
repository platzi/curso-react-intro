import './TodoSearch.css';

function TodoSearch() {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) =>{
        console.log("escribiuste ")
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
      }}
    />
  );
}

export { TodoSearch };