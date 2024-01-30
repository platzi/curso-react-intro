function TodoList(props){
    return(
      <ul className='list-disc'>
        {props.children}
      </ul>
    )
  }
export { TodoList }