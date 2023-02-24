export const Task = (props) => {
    return (
    <div className="task"
        style={{backgroundColor: props.completed ? "greenyellow": "beige"}}
    >
        <h1>{props.taskName}</h1>
        <button onClick={()=> props.deleteTask(props.id)}>x</button>
        <button onClick={()=> props.completeTask(props.id)}>✅</button>
    </div>
    );
}