import React, { useState } from "react";


function Todo(){
    const [Number,setNumber] = useState(2);
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState('');


    const handleAddTask = ()=>{
        if(task ===''){
            alert("Task should not be empty");
        }else{
            setTodoList(prev=>([...prev,task]));
            setTask('');
        }
        
    }

    return(<div>
        <h1>
            Daily Todo
        </h1>
        <input value={task} name="todo-list" style={{"height":"40px"}} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAddTask} style={{"marginLeft":"5px"}} >
            Add Task
        </button>
        {todoList.map((item)=><p>{item}</p>)}
    </div>)
};


export default Todo;