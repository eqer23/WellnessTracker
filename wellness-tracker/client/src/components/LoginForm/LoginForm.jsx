import React, { useState } from "react";
import "./LoginForm.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('admin')
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        axios.post('http://localhost:3001/auth/login',{username, password, role})
        .then(res => {
            if (res.data.login &&  res.data.role === 'admin') {
                console.log(res)
                navigate('/dashboard')
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="wrapper">
            <div>
                <h1>Login</h1>

                {/* username input textbox */}
                <div className="input-box">
                    <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
                    <FaUserAlt className="icon" />
                </div>

                {/* password input textbox */}
                <div className="input-box">
                    <input type="password" placeholder="Password" required  onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon" />
                </div>
                <div className='form-group'>
                    <label htmlFor='role'>Role:</label>
                    <select name='role' id='role' onChange={(e) => setRole(e.target.value)}>
                        <option value='admin'>Admin</option>
                        <option value='client'>Client</option>
                    </select>
                </div> <br/>
                {/* forgot password check box and text */}
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#"> Forgot Password?</a>
                </div>

                {/* login button */}
                <button className='btn-login' onClick={handleSubmit}>Login</button>

                {/* temporary dashboard link -- will eventuallly want to connect to the login button*/}
                <Link to="/Dashboard" className="button" >
                    Click to dashboard page
                </Link>

                {/* will link to a redister page */}
                <div className="register-link">
                    <p>
                        Don't have an account? {/* <a href="#"> Register</a> */}
                        <Link to="/Role" className="button">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
