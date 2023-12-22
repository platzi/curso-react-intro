import React from "react";

function TodosLoading(){
    return (
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>
    );
  }

  export { TodosLoading };