import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.'); 
            return;
        }
    };

    return (
        <div className="container">
        <div className="body">
            <div className="login">
                <div className="container">
                    <h1>Log in</h1>
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
                    <button onClick={handleSubmit}>Log in</button>
                </div>
            </div>
            <div className="register">
                <div className="container">
                    <img src="https://st.depositphotos.com/1067125/1852/v/450/depositphotos_18527291-stock-illustration-beautiful-lotus-flower-and-yoga.jpg" height={100} alt="Welcome Image" />
                    <h2>Welcome!</h2> 
                    <p>Enter your personal details and start journey with us</p>
                    <button><Link to='/signup'>Sign Up </Link><i className="fas fa-arrow-circle-right"></i></button>
                </div>
            </div>  
        </div>
        </div>




    );
};

export default LoginPage;
