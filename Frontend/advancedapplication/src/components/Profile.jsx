import React from 'react'
import './Profile.css'
import Dashboard from './Dashboard'

export default function Profile() {
  return (
    <div className="wrapper">
    <Dashboard/>
    <div className="profile-card">
      <div className="profile-header">
        <img src="https://i.imgur.com/X2oObC4.png" alt="" />
      </div>
      <div className="profile-body">
        <div className="author-img">
          <img src="https://cdn0.iconfinder.com/data/icons/woman-user-human-avatar-person-profile-business/100/02-1User_14-512.png" alt="" />
        </div>
        <div className="name">Nirosh Gowda M</div>
        <h2>B.Tech Information Technology</h2>
        <div className="intro">
          <p>
          Passionate Frontend Developer skilled in creating responsive and user-friendly web experiences. Proficient in HTML, CSS, and JavaScript
          </p>
        </div>
        <div className="social-icon">
          <ul>
            <li>
              <a>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
              </a>
            </li>
            <li>
              <a>
              <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="" />

              </a>
            </li>
            <li>
              <a>
                <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"></img>
              </a>
            </li>
            <li>
              <a>
                <img src="https://i.pinimg.com/736x/40/e2/6b/40e26beab6a4049d7d52cee459a7dbb8.jpg"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  )
}
