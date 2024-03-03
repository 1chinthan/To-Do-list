import React from 'react'
import './todo.css'
const TodoList = () => {
const [tasks,setTasks]=React.useState([]);
const [newtask,setNewtask]=React.useState("");
function handleInputChange(event)
{
    setNewtask(event.target.value);
}

function addTask()
{   
    if(newtask.trim()!=="")
    {
        setTasks(t=>[...t,newtask]);
        setNewtask("");
    }
    
}

function deleteTask(i)
{
    const updatedTask=tasks.filter((element,index)=>index!==i);
        setTasks(updatedTask);
}

function moveTaskUp(i)
{
    if(i>0)
    {
        const updatedTask=[...tasks];
        [updatedTask[i],updatedTask[i-1]]=[updatedTask[i-1],updatedTask[i]];
        setTasks(updatedTask);
    }
}

function movetaskDown(i)
{
    if(i<tasks.length-1)
    {
        const updatedTask=[...tasks];
        [updatedTask[i],updatedTask[i+1]]=[updatedTask[i+1],updatedTask[i]];
        setTasks(updatedTask);
    }
}
  return (
    <div className='todo-list'>
        <h1>To-Do List</h1>   
        <div className='add-task-input'>
            <input type="text" name="task" id="task" placeholder='Add a task...' value={newtask} onChange={handleInputChange}/> 
            <button className='add-button' onClick={addTask}>ADD</button>   
        </div>  

        <ol>
           {tasks.map((task,index)=>(
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={()=>deleteTask(index)}>&#x1F5D1;</button>
                <button className='move-up-button' onClick={()=>moveTaskUp(index)}>☝</button>
                <button className='move-down-button' onClick={()=>movetaskDown(index)}>👇</button>
            </li>
          ))}   
        </ol>
    </div>
  )
}

export default TodoList