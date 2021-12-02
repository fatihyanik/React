import './App.css';
import React,{useState, useEffect} from 'react';

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) ||[]);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleToDo = () =>{
    setTasks([...tasks, input]);
    setInput("");
  }

  const removeTask = (index) =>{
    setTasks(tasks.filter((task,i) => task[i] !== task[index]))
  }



  return (
    <div className="App">

        <h1>Tasks</h1>
        <h2>You have {tasks.length} {tasks.length === 1 ? "task" : "tasks"}</h2>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              <button onClick={() => removeTask(i)}>Done</button>
            </li>
          ))}
        </ul>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleToDo}>Add</button>
      </div>
  )
}

export default App;
