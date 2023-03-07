// import React from 'react';
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="form">
                    <h1>Register</h1>
                    <form action="">
                        <div className="name">
                            <input type="text" id="fname" name="fname" placeholder="First Name" required/>
                            <input type="text" id="lname" name="lname" placeholder="Last Name" required/>
                        </div>
                        <div className="contact">
                            <input type="email" id="email" name="name" placeholder="Email" required/>
                            <input type="tel" id="number" name="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number" required/>
                        </div>
                        <div className="dobPsw">
                            <input type="date" id="dob" name="dob" placeholder="Date of Birth" required/>
                            <input type="password" id="password" name="password" placeholder="Password" minlength="8" maxlength="25" required/>
                        </div>
                        <div className="gender">
                            <div className="male">
                                <label for="male">Male</label>
                                <input type="radio" id="male" name="gender" />
                            </div>
                            <div className="female">
                                <label for="female">Female</label>
                                <input type="radio" id="female" name="gender" />
                            </div>
                            </div>
                        <div className="button">
                            <button>Register</button>
                            <Link to="/login">
                                <button type="submit">Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
