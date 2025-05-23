import React, { useState } from "react";
import { TodoList } from "./TodoList";


function Todo(){
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");
    
    const handleAddTask = () =>{
     if(task == "") {
        alert("Task should not be empty")
     }else{
        setTodoList((prev) => [...prev, task]);
        setTask("");

     }  
    } 

 return(
    <div>
        <h1>Todo app</h1>
        <input value={task} name="todo-list" style={ {height :"40px", width:"520px"}} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAddTask} style={{ marginLeft: "5px", backgroundColor:"green", color:"white"}}>Add Task</button>
        <div style={{ margin: "10px 0" }}>
            {todoList.map((item,index) => (
          <TodoList key={index} index={index} item={item} setTodoList={setTodoList} />
        ))}

        </div>
    </div>
 )   

};


export default Todo;