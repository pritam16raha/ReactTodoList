//import React from 'react'
import { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {

  const[todoss, setTodo] = useState([])

  const addTodo = e => {
      setTodo([...todoss, {id: uuidv4(), task: e, completed: false, isEditing: false}])
      console.log(todoss)
      
  }

  const toggleComplete = id => {
      setTodo(todoss.map(todo => todo.id === id? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
      setTodo(todoss.map(todo => todo.id !== id ))
  }

  const editTodo = id => {
      setTodo(todoss.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} :todo ))
  }

  const editTodoTask = (task, id) => {
        setTodo(todoss.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
  }

  return (


    <div className='TodoWrapper'>          
        
        <h1> Get Things Done! </h1>
            <TodoForm addTodo={addTodo} />

                {todoss.map((todo , index) => (
                  todo.isEditing? (
                    <EditTodoForm editTodo={editTodoTask} task={todo} key={index}/>
                  )
                  :
                  (

                    <Todo task={todo} key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo} />

                  )
                ))}
    </div>
  )
}
