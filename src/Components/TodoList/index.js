import React from 'react'
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render

    return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ul className='TodoList'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onCreate()}
        {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearchResults(props.searchText)}      
        
        {(!props.loading && !props.error) && props.filteredTodos?.map(renderFunc)} 
    </ul>
  )
}

export { TodoList }