import React, { useState } from 'react';
import './Signup.css';
import{Link } from 'react-router-dom'

export default function SignUp() {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!userType || !email || !username || !mobileNumber || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    console.log('User Type:', userType);
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Mobile Number:', mobileNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    setUserType('');
    setEmail('');
    setUsername('');
    setMobileNumber('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='nirosh'>
    <div className="sign-up-page">
      <div className="form">
        <div className='sign-up-text'>
          <p>Sign Up</p>
        </div>
        <form className="sign-up-form" onSubmit={handleSignUp}>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            placeholder="Select User/Admin"
          >
            <option value="">Select User/Admin</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit"><Link to="/">Sign Up</Link></button>
          <p className="message">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
