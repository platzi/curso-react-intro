import React from 'react';
import './TodoItem.css'
import { BsFillDashCircleFill, BsCheckSquareFill, BsPencilSquare, BsBullseye, BsList } from "react-icons/bs";

function TodoItem(props) {
    const [isDraggable, setIsDraggable] = React.useState(false);

    return (
      <li 
        className={`TodoItem ${props.isFocused ? 'TodoItem--focused' : ''} ${props.isDragging ? 'TodoItem--dragging' : ''} ${props.isDragOver ? 'TodoItem--drag-over' : ''}`}
        draggable={isDraggable}
        onDragStart={props.onDragStart}
        onDragOver={props.onDragOver}
        onDrop={props.onDrop}
        onDragEnd={(e) => {
          setIsDraggable(false);
          props.onDragEnd(e);
        }}
      >
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

        <div className="TodoItem-actions">
          <span 
            className="Icon Icon-drag"
            onMouseDown={() => setIsDraggable(true)}
            onMouseUp={() => setIsDraggable(false)}
            onTouchStart={() => setIsDraggable(true)}
            onTouchEnd={() => setIsDraggable(false)}
            title="Arrastrar para reordenar"
          >
            <BsList/>
          </span>

          <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            title="Completar tarea"
          >
            <BsCheckSquareFill/>
          </span> 

          <span 
            className={`Icon Icon-focus ${props.isFocused ? 'Icon-focus--active' : ''}`}
            onClick={props.onFocus}
            aria-label="Enfocar tarea"
            title="Enfocar tarea"
          >
            <BsBullseye/>
          </span>

          <span 
            className="Icon Icon-edit"
            onClick={props.onEdit}
            aria-label="Editar tarea"
            title="Editar tarea"
          >
            <BsPencilSquare/>
          </span>

          <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            title="Eliminar tarea"
          >
            <BsFillDashCircleFill/>
          </span>
        </div>
      </li>
    );
  }

export { TodoItem };
