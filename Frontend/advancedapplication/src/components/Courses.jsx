import React from 'react';
import './Courses.css';
import yoga from '../assets/yoga.jpg';
import meditation from '../assets/meditation.jpg';
import pilates from '../assets/pilates.jpg';

export default function Courses() {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={yoga} alt="" />
        <div className='caption'>
          <p>Yoga</p>
          <p>Find your perfect match - Explore
          Vinyasa,Hatha,Yin and more.</p> 
        </div>
      </div>
      <div className='program'>
        <img src={meditation} alt="" />
        <div className='caption'>
          <p>Meditation</p>
          <p>Cultivate calmness and presence with our
          video meditations.</p> 
        </div>
      </div>
      <div className='program'>
        <img src={pilates} alt="" />
        <div className='caption'>
          <p>Pilates</p>
          <p>Improve your core stability,muscular 
          strength and confidence.</p>
        </div>
      </div>
    </div>
    
  );
}
