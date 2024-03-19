import React from 'react'
import './Profile.css'
import Dashboard from './Dashboard'

export default function Profile() {
  return (
    <>
    <Dashboard/>
    <div className='profileee'>
  <div className="card-container">
    
    <img
      className="round"
      src="https://randomuser.me/api/portraits/women/79.jpg"
      alt="user"
    />
    <h3>Nirosh Gowda M</h3>
    <p>
      B.Tech Information Technology
    </p>
    <div className="buttons">
      <button className="primary">Edit</button>
      <button className="primary ghost">Logout</button>
    </div>
    
    </div>
  </div>
</>

  )
}
