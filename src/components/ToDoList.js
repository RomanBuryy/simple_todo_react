import React from 'react';

import ToDo from "./ToDo";

const ToDoList = ({todoList, deleteTask}) => {
    return (
        <div>
            {todoList.map(todo => <ToDo key={todo.id} todo={todo} deleteTask={deleteTask}/>)}
        </div>
    );
};

export default ToDoList;