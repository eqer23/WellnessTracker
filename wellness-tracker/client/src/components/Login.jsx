import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('admin')
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        axios.post('http://localhost:3001/auth/login',{username, password, role})
        .then(res => {
            if (res.data.login && res.data.role === 'admin') {
                navigate('/dashboard')
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <div className='wrapper'>
            <div className="login-container">
                <h2>Login</h2> <br />
                <div className='input-box'>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" placeholder='Enter Username' required onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='input-box'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' placeholder='Enter Password' required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='role'>Role:</label>
                    <select name='role' id='role' onChange={(e) => setRole(e.target.value)}>
                        <option value='admin'>Admin</option>
                        <option value='client'>Client</option>
                    </select>
                </div>
                <button className='btn-login' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
};

export default Login;