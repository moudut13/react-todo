import React, {useState} from 'react';
import './Form.css';

function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(' Form Submit');
        let userInfo = {
            name,
            email,
            password
        }
        console.log(userInfo);
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

export default Form;