import React from 'react';
import './TodoLoading.css';

function TodosLoading() {
  return(
    <article>
    <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text">Cargando....</p>
    <span className="LoadingTodo-deleteIcon"></span>
    </div>

    <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text">Cargando....</p>
    <span className="LoadingTodo-deleteIcon"></span>
    </div>

    <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text">Cargando....</p>
    <span className="LoadingTodo-deleteIcon"></span>
    </div>

    <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text">Cargando....</p>
    <span className="LoadingTodo-deleteIcon"></span>
    </div>
    </article>
    );
}

export { TodosLoading };