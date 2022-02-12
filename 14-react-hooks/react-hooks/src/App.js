import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [resourceType, setResourceType] = useState('Posts'); // useState returns an array of 2 values: the initial state value and a function to change to initial value
  const [count, setCount] = useState(0);
  useEffect(() =>{
    console.log('render');
  },[count]);

  
  return (
    <div className="container">
        <div>
          <button onClick={() => setResourceType('Posts')}>Posts</button>
          <button onClick={() => setResourceType('Users')}>Users</button>
          <button onClick={() => setResourceType('Comments')}>Comments</button>
          <button onClick={() => setCount(count => count +1)}>Increment</button>
        </div>
        <h1>{resourceType}</h1>
        <h1>The count is {count}</h1>
      </div>
  )
}

/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      resourceType:'Posts',
      name :'Fred',
      age : 39
    }
  }
  setPosts = () =>{
    this.setState({
      resourceType: "Posts"
    })
  }
  setUsers = () =>{
    this.setState({
      resourceType: "Users"
    })
  }
  setComments = () =>{
    this.setState({
      resourceType: "Comments"
    })
  }
  render(){
    return(
      <div className="container">
        <div>
          <button onClick={this.setPosts}>Posts</button>
          <button onClick={this.setUsers}>Users</button>
          <button onClick={this.setComments}>Comments</button>
        </div>
        <h1>{this.state.resourceType}</h1>
      </div>
    )
  }
} */

export default App;
