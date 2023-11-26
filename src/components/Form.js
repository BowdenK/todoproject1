import React from "react";
import {useState} from 'react';

function Form(){
    const [newTask, setNewTask] = useState('')
    //newTask is set as ('')
    //use setNewTask to change and update newTask.
    //using onChange attribute eventListener, we trigger setNewTask
    //Changes are triggered by eventListeners, pass functions to events.

    const[todos, setTodos] = useState([])
    //todos is initially set as an empty array ([])
    
    function handleSubmit(e){
        e.preventDefault()

        setTodos(currentTodos => {
            return [
                ...currentTodos,
                {id: crypto.randomUUID(), title: newTask, completed: false},
            ]
        })

        setNewTask('') //blanks input box on submit
    }

    function toggleCheckbox(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id) {
                    return { ...todo, completed}
                }
                return todo
            })
        })
    }

    function removeTodo(id){
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='newForm'>
                <div className="formBlock">
                    <label htmlFor="item">Enter New Task</label>
                    <input 
                        value={newTask} 
                        onChange={(e) => setNewTask(e.target.value)}
                        type="text" 
                        id="item"></input>
                    <button className="btn">Add to Todo</button>
                </div>
            </form>
            <h1 className="title">Todo List</h1>
            <ul className="list">
                {todos.length === 0 && "Let's get to work"}
                {todos.map(todo => {
                    return <li key={todo.id}>
                    <label>
                        <input type="checkbox" 
                        checked={todo.completed}
                        onChange={(e) => toggleCheckbox(todo.id, e.target.checked)}
                        />
                        {todo.title}
                    </label>
                    <button 
                        onClick={()=> removeTodo(todo.id)}
                        className="btn-remove">Remove</button>
                </li>
                })}                
            </ul>
                        
        </>
    )
}

export default Form;