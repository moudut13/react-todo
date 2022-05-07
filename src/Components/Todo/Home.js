import React ,{useState} from 'react';
import {v4 as uuidv4} from "uuid";

import './BootStrap.css';
import './bootstrap.min.css.map';
import NewTodo from './NewTodo';
import Todos from './Todos';

function Home() {
    const [todo,setTodo] = useState([]);

    const getNewTodo = (getTodo) =>{
      setTodo((prevTodo) =>{
        return[
          ...prevTodo,{id: uuidv4(),getTodo}
        ]
      });
    }

    const handleRemoveTodo = (id) =>{
      setTodo((prevTodo) => {
        const filterTodo = prevTodo.filter((todo) =>todo.id !== id);
        return filterTodo;

      });
    }

    return (
        <>
          <div className='container-fluid' style={{ background: '#2e2e2e' , display: 'block', minHeight: '100vh'}}>
            <div className='container '>
              <div className='row'>
                <div className='col-md-8 m-auto'>
                  <div>
                    <h1 className='mt-4' style={{textAlign: 'center',color: '#afafaf' ,textTransform: 'uppercase'}}>Todo App</h1>
                  </div>
                  <div className='mt-4 mb-3'>
                    <NewTodo getTodo={getNewTodo}/>
                  </div>
                  <div className='mb-5'></div>
                  <Todos todo={todo} onTodoRemove={handleRemoveTodo}/>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default Home;