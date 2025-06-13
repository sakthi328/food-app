import React, { useState,useCallback, useId, } from "react";
import { TodoList } from "./TodoList";


function Todo(){
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");
    
    const handleAddTask = () =>{
      console.log(todoList)
     if(task == "") {

        alert("Task should not be empty")
     }else{
        setTodoList((prev) => [...prev, task]);
        setTask("");
console.log(todoList)
     }  
    } 
    const handleDelete = useCallback((id)=>{
      setTodoList(prev=>prev.filter((item, index)=>index !==id));
  },[])
  const id = useId();

 return(
    <div  className=" max-w-3xl mx-auto">
        <h1 className="text-center text-3xl font-bold">Todo list</h1>
        <div className="mt-4 ">
         <label className="block text-xl font-bold mb-2" htmlFor={id}>Task</label>
        <input  className="border px-2 mr-4 h-12 focus:border-1 focus-visible:!border-1 focus-visible:!border-green-800 focus:border-green-900 hover:border-green-600 shadow-md rounded-md w-full max-w-xl" value={task} name="todo-list" id={id} style={ {height :"40px"}} onChange={(e) => setTask(e.target.value)} />

        <button className="bg-green-800 text-white px-6 rounded-md py-3" onClick={handleAddTask} style={{ marginLeft: "5px"}}>Add Task</button>
        </div>
        <div style={{ margin: "10px 0" }}>
            {todoList.map((item,index) => (
          <TodoList key={index} index={index} item={item} setTodoList={setTodoList} handleDelete={handleDelete} />
        ))}

        </div>
    </div>
 )   

};


export default Todo;