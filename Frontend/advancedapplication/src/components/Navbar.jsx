import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'


export default function Navbar() {

    const [yoga,setYoga] = useState("home");
  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt="" style={{ width: '100px', height: 'auto' }} />
    <p>ZENYOGA</p>
    </div>
    <ul className='nav-menu'>
    <li onClick={()=>{setYoga("home")}}><Link to="/">Home</Link>{yoga==="home"?<hr/>:<></>}</li>
    <li onClick={()=>{setYoga("about")}}><Link to="/about">About</Link>{yoga==="about"?<hr/>:<></>}</li>
    <li onClick={()=>{setYoga("academy")}}><Link to="/academy1">Academy</Link>{yoga==="academy"?<hr/>:<></>}</li>
    <li onClick={()=>{setYoga("courses")}}><Link to="/courses1">Courses</Link>{yoga==="courses"?<hr/>:<></>}</li>
    <li onClick={()=>{setYoga("classes")}}><Link to="/classes1">Classes</Link>{yoga==="classes"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
    <button className='login11'><Link to="/login">Login</Link></button>
    <button className='signup11'><Link to="/signup">Sign Up</Link></button>
    </div>
    </div>
  )
}
