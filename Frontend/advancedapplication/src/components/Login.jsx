import React, { useState } from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom'


export default function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const nav=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginUsername.trim() === '') {
      alert('Please enter your username.');
      return;
    }
    if (loginPassword.trim() === '') {
      alert('Please enter your password.');
      return;
    }
    else{
    console.log('Username:', loginUsername);
    console.log('Password:', loginPassword);
    setLoginUsername('');
    setLoginPassword('');
    if(loginUsername==="admin@gmail.com" && loginPassword==="adminPassword") nav("/dashboard")
    else nav("/") 
    }
  };

  return (
    <div className='nirosh'>
    <div className="login-page">
      <div className="form">
      <div className='login-text'>
      <p>Login</p>
      </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button type="submit" onClick={handleLogin}>Login</button>
          <p className="message">
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
        </div>
      </div>
    </div>
    
  );
}
