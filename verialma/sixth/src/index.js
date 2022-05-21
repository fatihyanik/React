import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import Name from './Name';
import Location from './Location';
import UserForm from './UserForm';

import './styles.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <UserForm /> 
        <Name />
        <Location />
      </div>

    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  rootElement
);