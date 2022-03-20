import './App.css';
import {useState} from "react";

import data from './db/data.json'
import ToDoList from "./components/ToDoList";

function App() {

    const [todoList, setTodoList] = useState(data);
    const [userInput, setUserInput] = useState('');

    const addTask = (task) =>{
        let copyList = [...todoList];
        copyList = [...copyList, {id:todoList.length+1, task: task, complete: false}];
        setTodoList(copyList)
    }

    const deleteTask = (id)=>{
        let copyList = [...todoList];
        let filtered = copyList.filter(value => !value.complete);
        setTodoList(filtered)
        console.log(id)
    }



    const userInputHandler = (e)=>{
        setUserInput(e.currentTarget.value);
   }

    const submit = (e) =>{
        e.preventDefault();
        addTask(userInput);
        setUserInput('')
        console.log(todoList)
    }

    return (
        <>
            <ToDoList todoList={todoList} deleteTask={deleteTask}/>

            <form onSubmit={submit}>
                <label>Task: <input type="text" value={userInput} onChange={userInputHandler}/></label>
                <button>Submit</button>
            </form>
        </>
    );
}

export default App;
