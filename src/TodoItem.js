import React from 'react';

//Los camponentes de react comienzan con mayus, a diferencia de los elementos header por ej que son html
function TodoItem(props) {
    return (
      <li>
        <span> V </span>
        <p> {props.text} </p>
        <span>X</span>
      </li>
    );
  }

  export {TodoItem};