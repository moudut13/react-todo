import React from 'react';
import TodoList from './Todo_list';

function Todos(props) {
    return (
        <div>
            {props.data.map((Todo,index) => (
                <TodoList key={index} todo={Todo}/>
            ))}
        </div>
    );
}

export default Todos;