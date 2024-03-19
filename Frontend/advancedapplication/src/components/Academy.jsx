import React from 'react'
import academy from '../assets/academy.jpg';
import './Academy.css'
import {Link} from 'react-router-dom'

export default function Academy() {
  return (
    <div className='about'>
            <div className='about-left'>
              <img src={academy} alt="" className='about-img' />
            </div>
            <div className='about-right'>
              <h2>ENROLLMENT</h2>
              <p>Join our Yoga Academy Portal today and embark on a journey <br/>towards inner peace and well-being. Enroll now to access a diverse <br/>range of yoga classes, meditation sessions, and expert guidance <br/>tailored to your needs.</p>
              <button className="enroll-button"><Link to="/academy1">Enroll</Link></button>
              </div>
          </div>
  )
}
