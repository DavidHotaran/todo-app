import React from 'react';

const Todo = ({todo, index, removeTodo, markDone, markUnDone}) => {

    return(
        <div>
            {todo.text && /* only render if there are items added*/
                <div className="card mb-3" style={{backgroundColor : todo.done ? "#a9a9a9" : ""}}>
                        <div className="card-body d-flex">
                        <p className="flex-grow-1 text-capitalize" style={{textDecoration: todo.done ? "line-through" : ""}}>{todo.text}</p>
                        {todo.done 
                            ? <button className="btn btn-success me-2" onClick={() => markUnDone(index)}>✓</button> 
                            : <button className="btn btn-success me-2" onClick={() => markDone(index)}>✓</button>
                        }
                        <button className = "btn btn-danger" onClick={() => removeTodo(index)}>✗</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Todo