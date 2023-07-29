import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if(inputValue.trim() === ""){
      setErrorMessage("Todo can't be empty, please add a todo.")
      return;
    }
    setTodos([...todos, {todoText:inputValue}])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.todoId !== id));
  }

  return (
    <div className='App'>
     <div className="container">
      <Form
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <p className='errorMessage'>{errorMessage}</p>
      <TodoItem removeTodo={removeTodo} todos={todos} />
     </div>
    </div>
  )
}

export default App
