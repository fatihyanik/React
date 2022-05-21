import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Form = () => {
  const user = useContext(UserContext);

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          onChange={e => user.setName(e.target.value)}
        />
      </div>
      
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
          onChange={e => user.setLocation(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;