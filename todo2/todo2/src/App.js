import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      input: '' 
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  addTask = () => {
    this.setState(state => ({
      tasks: [...state.tasks, state.input], 
      input: ''
    }));
  }

  removeTask = (event) => {
    const index = event.target.dataset.index;
    this.setState(state => {
      const tasks = [...state.tasks];
      tasks.splice(index, 1);
      return { tasks: tasks };
    });
  }

  render(){
    return (
      <div>
        <h1>Tasks</h1>
        <h2>You have {this.state.tasks.length} tasks</h2>
        <ul>
          {this.state.tasks.map((task, i) => (
            <li key={i}>
              {task}
              <button data-index={i} onClick={this.removeTask}>Done</button>
            </li>
          ))}
        </ul>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }
  }

export default App;
