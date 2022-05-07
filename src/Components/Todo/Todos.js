import React from 'react';
import './BootStrap.css';
import Todo from './Todo';

function Todos(props) {
    return (
        <div style={{background: '#3a3838', borderRadius: '20px', margin: '10px 20px' , padding: '25px 0px' }}>
            {props.todo.map((todo)=><Todo key={todo.id} id={todo.id} todo={todo.getTodo} onRemoveItem={props.onTodoRemove}/>)}
        </div>
    );
}

export default Todos;