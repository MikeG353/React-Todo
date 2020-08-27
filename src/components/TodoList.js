import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(task => (
                <Todo 
                key={task.id} 
                task={task}
                completed={task.completed}
                toggleComplete={props.toggleComplete}
                />
            ))}
            <button className="clear-btn" onClick={() => props.clearCompleted()}>
                Clear Completed
            </button>
        </div>
    )
}
export default TodoList;