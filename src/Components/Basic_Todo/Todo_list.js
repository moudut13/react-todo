import React from 'react';

import './Todo.css';

function TodoList(props) {
    return (
        <div className='TodoList'> 
            <p>{props.todo}</p>
        </div>
    );
}

export default TodoList;