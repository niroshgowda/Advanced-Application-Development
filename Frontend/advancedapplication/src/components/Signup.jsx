import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [userType, setUserType] = useState('user'); // Default to 'user'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (name.trim() === '' || email.trim() === '' || mobileNumber.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all fields.'); 
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.'); 
            return;
        }
    };

    return (
        <div>
        <img className="yoga" src="https://i.pinimg.com/564x/7d/ec/94/7dec942161c4990446a3d47cc06df988.jpg" height={500} />
        
        <div className="container1">
            <div className="body1">
                <div className="signup">
                    <div className="container1">
                        <h1>Sign Up</h1>
                        <select value={userType} onChange={handleUserTypeChange}>
                            <option value=" ">Enter User or Admin</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <input type="email" placeholder="Enter Email" value={email} onChange={handleEmailChange} />
                        <input type="text" placeholder="Enter Name" value={name} onChange={handleNameChange} />
                        <input type="tel" placeholder="Enter Mobilenumber" value={mobileNumber} onChange={handleMobileNumberChange} />
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} /><br />
                        <p>Already a user? <Link to="/"> Login</Link></p>
                        <button onClick={handleSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignupPage;
