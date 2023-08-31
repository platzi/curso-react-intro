import React from "react";
import "./TodoInputSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoInputSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
