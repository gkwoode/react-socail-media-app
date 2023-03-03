// import React from 'react';
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>WELCOME to GKsocial</h1>
                    <span>
                        Connect with family, friends and the world around you on GKsocial.
                    </span>
                    <p>Don't you have an account?</p>
                    <Link to="/login">
                        <button type="submit">Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Create an Account</h1>
                    <form action="">
                        <input type="email" placeholder="Email" />
                        <input type="passworrd" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
