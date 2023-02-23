import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1: [todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  };

  // when we want to delete something, we want to use the filter function
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">

      <div className="addTask">
        <input onChange={handleChange}/> 
        <button onClick={addTask}>Add a Task</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return <div>
            <h1>{task.taskName}</h1>
            <button onClick={()=> deleteTask(task.id)}>x</button>
            
            </div>;
        })} 
      </div>

    </div>
  );
}

export default App;
