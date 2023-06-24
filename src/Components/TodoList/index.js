import "../../styles/todoList.css"

const TodoList = (props)=>{

    return(
      <ul className="TodoList">
        {props.children}
      </ul>
    )    
}

export {TodoList}
