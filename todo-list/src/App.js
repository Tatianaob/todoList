import './App.css';
import { useState } from "react";
import {Task} from "./Task";
import {Text} from "./Text";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showText, setShowText] = useState(false);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
  };

  // when we want to delete something, we want to use the filter function
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    );
  };


  return (
    <div className="App">

      <div className="addTask">
        <input onChange={handleChange}/> 
        <button onClick={addTask}>Add a Task</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return( <Task 
          taskName={task.taskName} 
          id={task.id} 
          completed={task.completed}
          deleteTask={deleteTask}
          completeTask={completeTask}
          />
          );
        })} 
      </div>
      <button onClick={() => {
        setShowText(!showText);
      }}> Show Text

      </button>
      {showText && <Text/>}

    </div>
  );
}

export default App;
