import React from "react";
import "./LoginForm.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Login</h1>

                {/* username input textbox */}
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUserAlt className="icon" />
                </div>

                {/* password input textbox */}
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                {/* forgot password check box and text */}
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#"> Forgot Password?</a>
                </div>

                {/* login button */}
                <button type="submit">Login</button>

                {/* temporary dashboard link -- will eventuallly want to connect to the login button*/}
                <Link to="/Dashboard" className="button">
                    Ckick to dashbord page
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
            </form>
        </div>
    );
};

export default LoginForm;
