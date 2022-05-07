import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

import './Todo.css';

//Data list
const data = ["Todo 1"];

function Todo() {

    const onGetData = newData =>{
        setTodo([...Todo,newData]);
    }
    
    const [Todo ,setTodo] = useState(data);


    return (
        <div className='Todo'>
            <NewTodo newData={onGetData} />
            <Todos data={Todo}/>
        </div>
    );
}

export default Todo;