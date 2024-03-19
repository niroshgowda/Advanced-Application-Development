import React from 'react';
import video from '../assets/video.mp4';
import './Home.css';
import Navbar from './Navbar.jsx';
import Courses from './Courses.jsx';
import Classes from './Classes.jsx';
import Academy from './Academy.jsx';
import Footer from './Footer.jsx';

export default function Home() {
  return (
    <div>
      <div className='video'>
        <Navbar/>
        <div className='overlay'></div>
        <video src={video} autoPlay loop muted />
        <div className='content'>
          <h1>Your Path to Inner Peace:<br/>Welcome to Our Yoga Academy Admission Portal</h1>
          <button className='get'>Explore now</button>
        </div>
      </div>
      <div className='tit'>
        <div className='title' style={{ textAlign: 'center' }}>
          <h1><span style={{ borderBottom: '2px solid #000' }}>Our Courses</span></h1>
          <p>Over 5,000 yoga and meditation classes and guided programs.</p>
        </div>
      </div>
      <Courses/>
      <div className='tit1'>
        <div className='title1' style={{ textAlign: 'center' }}>
          <h1><span style={{ borderBottom: '2px solid #000' }}>ZENYOGA ACADEMY ONLINE PORTAL</span></h1>
        </div>
      </div>
      <Academy/>
      <div className='tit1'>
        <div className='title1' style={{ textAlign: 'center' }}>
          <h1><span style={{ borderBottom: '2px solid #000' }}>CLASSES FOR EVERY LEVEL AND NEED</span></h1>
        </div>
      </div>
      <Classes/>
      <Footer/>
    </div>
  );
}
