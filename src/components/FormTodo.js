import React, { useState } from 'react';

const FormTodo = ({ addTodo }) => {
    
    const [value, setValue] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        value && addTodo(value) // only add value if input  submit is not blank
        setValue('')
    }

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <input
              type="text"
              value={value}
              placeholder="Enter item.."
              onChange= {handleChange}
              className="form-control"
            />
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
      </form>
    );
};

export default FormTodo;