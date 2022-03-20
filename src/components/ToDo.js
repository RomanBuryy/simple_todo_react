import React from 'react';

const ToDo = ({todo, deleteTask}) => {
    return (
        <div >
            <div>{todo.id}</div>
            <div>{todo.task}</div>
            <div>{todo.complete}</div>
            <button onClick={()=>{
                deleteTask(todo.id);
            }}>delete</button>
        </div>
    );
};

export default ToDo;