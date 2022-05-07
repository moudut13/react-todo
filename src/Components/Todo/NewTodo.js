import React, { useState } from 'react';
import './BootStrap.css';

function NewTodo(props) {
    const[todo,setTodo] = useState({
        title : '',
        desc : '',
    });

    const { title , desc } = todo;

    const handleInputChange = (e) =>{
        const name = e.target.name;
        setTodo((oldTodo) => {
            return{
                ...oldTodo,[name]: e.target.value
            };
        }
    )};


    const handleSubmit = (e) =>{
        e.preventDefault();
        props.getTodo(todo);
        setTodo({ title: "", desc : ""});
    };

    return (
        <>
            <div className="card m-auto col-md-8" style={{color: 'white', background:'#3a3939', border: 'none', borderRadius: '12px'}}>
                <div className="card-body" style={{background: '#383838',borderRadius: '10px'}}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="todo" className="form-label">Todo</label>
                            <input 
                                name='title' 
                                onChange={handleInputChange}
                                value={title}
                                type="text" 
                                className="form-control" 
                                id="todo" style={{background: '#524f4f',border: 'none',fontSize: '18px',color: 'white'}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="todoDesc" className="form-label">Description</label>
                            <textarea 
                                name='desc' 
                                value={desc}
                                onChange={handleInputChange}
                                className="form-control" 
                                id="todoDesc" rows="3" 
                                style={{background: '#524f4f',border: 'none',fontSize: '16px',color: 'white'}}></textarea>
                        </div>
                        <button type='submit' className='btn btn-sm btn-dark'>Add Todo</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewTodo;