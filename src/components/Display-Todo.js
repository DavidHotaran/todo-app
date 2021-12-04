import React, { useState } from 'react';
import FormTodo from './FormTodo';
import Todos from './Todos';

const DisplayTodo = () => {
  
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || [{}]);
    
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
        window.localStorage.setItem('todos', JSON.stringify(newTodos));
      };

      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        window.localStorage.setItem('todos', JSON.stringify(newTodos));
        setTodos(newTodos);
      }

      const markDone = index => {
        const newTodos = [...todos];
        newTodos[index].done = true;
        window.localStorage.setItem('todos', JSON.stringify(newTodos));
        setTodos(newTodos);
      }

      const markUnDone = index => {
        const newTodos = [...todos];
        newTodos[index].done = false;
        window.localStorage.setItem('todos', JSON.stringify(newTodos));
        setTodos(newTodos);
      }

    return (
        <div className="col-9 mx-auto mt-5">
          <h1 className="display-4 mb-4 text-center">Grocery List:</h1>
          <FormTodo addTodo={addTodo}/>
          <div>
            {todos.map((todo, index) => (
                <Todos key={index} todo={todo} index={index} removeTodo={removeTodo} markDone={markDone}
                markUnDone={markUnDone}/>
            ))}
          </div>
        </div>
      );

};

export default DisplayTodo;