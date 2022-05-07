import React,{useState} from 'react';
import './Form.css';
function FormObject() {
    const [user,setUser] =useState({
        name : '',
        email : '',
        password : '',
    })
    const {name,email,password} = user;

    const handleNameChange = (e) =>{
        setUser({name : e.target.value, email,password});
    }
    const handleEmailChange = (e) =>{
        setUser({email : e.target.value, name ,password});
    }
    const handlePasswordChange = (e) =>{
        setUser({password : e.target.value, name ,email});
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
                                onChange={handleNameChange}
                                type="text" 
                                className="form-control" 
                                placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                type="text" 
                                className="form-control" 
                                placeholder="email@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Email address</label>
                            <input 
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
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

export default FormObject;