import { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [resourceType, setResourceType] = useState('Posts');
  // useState returns an array of 2 values: the initial state value and a function to change to initial value
  const [count, setCount] = useState(0);
  useEffect(() =>{
    console.log('render');
  },[count]); // count state'inin degisikligine göre component render ediliyor

  
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
export default App;
