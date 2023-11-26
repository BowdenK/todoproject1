import React from "react";
import {useState} from 'react';

function TodoList({todos, toggleCheckbox, removeTodo}){
    

    return (
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
    )
}

export default TodoList