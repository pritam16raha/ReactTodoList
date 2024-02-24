//import React from 'react'

import { useState } from "react"


// eslint-disable-next-line react/prop-types
export const TodoForm = ({addTodo}) => {

 const [task, setTask] = useState("")


//  const handleInput = (e) => {
//     const data = e.target.name;
//     const value = e.target.value;

//     console.log(data, value)

//     setTask({...task, [data]: value })
//  }



  const handleTask = (e) => {
     e.preventDefault(); 

      addTodo(task);

      setTask("");
  }

  return (
    <form className='TodoForm' onSubmit={handleTask}>
        <input autoComplete='off' name='inputBox' type='text' className='todo-input' value={task} placeholder='What is the task today' onChange={(e) => setTask(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
