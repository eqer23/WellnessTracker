import "./ClientRegistration.css";
import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'
import axios from 'axios'
let REGISTER_URL = "http://localhost:3001/cregister"


const ClientRegistration = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')
    // const navigate = useNavigate()

    const handleSubmit = () => {
        if (username && password && role) {
            event.preventDefault();
            axios.post(REGISTER_URL, { username, password, role })
                .then(res => {
                    if (res.data.role === 'user') {
                        console.log(res)
                    }
                })
                .catch(err => console.log(err))
        }
    };

    return (
        <div className="wrapper">
            <form>
                <h1>Client Registration</h1>

                <div className="username">
                    <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="password">
                    <input type="text" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor='role'>Role:</label>
                    <select name='role' id='role' onChange={(e) => setRole(e.target.value)}>
                        <option value='user'>User</option>
                        <option value='client'>Client</option>
                    </select>
                </div> <br />

                <div className="client-name">
                    {/* <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required /> */}
                </div>

                <div className="other-info">
                    {/* <imput type="text" placeholder="Gender" />
                    <input type="number" placeholder="Age" required />
                    may be incorrect syntax */}
                </div>

                <button className='btn-register' onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
};

export default ClientRegistration;
