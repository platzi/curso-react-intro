import "./../css/TodoInputSearch.css";

function TodoInputSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoInputSearch"
      placeholder="Study react"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoInputSearch };
