import React, { useState } from 'react';

function NewTodo(props) {

    const [Todo,setTodo] = useState('');
    const handleChange = (e) =>{
        setTodo(e.target.value)
    }
    const onHandleSubmit =(e) =>{
        e.preventDefault();
        props.newData(Todo);
    }
    
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="name">Name : </label>
                <input 
                name="name"
                value={Todo}
                onChange={handleChange}
                type="text" 
                placeholder="Add Todo..."/>
                <button type='submit'>Todo</button>
            </form>
        </div>
    );
}

export default NewTodo;