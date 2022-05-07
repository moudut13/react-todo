import React,{useState} from 'react';
import './Form.css'

function FormObjectSingle() {
    const [user,setUser] =useState({
        name : '',
        email : '',
        password : '',
    })
    const {name,email,password} = user;

    const handleChange = (e) =>{
        // const fileName = e.target.name;
        // if(fileName === 'name'){
        //     setUser({name : e.target.value, email,password});
        // }
        // if(fileName === 'email'){
        //     setUser({name, email : e.target.value,password});
        // }
        // if(fileName === 'password'){
        //     setUser({name, email,password : e.target.value});
        // }
        setUser({...user, [e.target.name] : e.target.value})
    }
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form Submited');
        console.log(user);
    }
    return (
        <div>
            <div className='container'>
                <div className='col-md-6 m-auto mt-4'>
                    <div>
                        <h1 className='text-uppercase'>Registration</h1>
                        <hr/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                name="name"
                                value={name}
                                onChange={handleChange}
                                type="text" 
                                className="form-control" 
                                placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                name="email"
                                value={email}
                                onChange={handleChange}
                                type="text" 
                                className="form-control" 
                                placeholder="email@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Email address</label>
                            <input 
                                name="password"
                                value={password}
                                onChange={handleChange}
                                type="text" 
                                className="form-control" 
                                placeholder="password"/>
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn btn-sm btn-primary'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormObjectSingle;