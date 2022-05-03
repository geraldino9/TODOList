import React from 'react'

export default function TodoItem( {todo, toggleTodo}) {
    const {id, task, completed} = todo;

    const handleTodoClick = () =>{
        toggleTodo(id);
        console.log('hola')
    }
  return (
    <li>
        <input type='checkbox' checked={completed} onChange={handleTodoClick}/>
        {task}
    </li>
  )
}
