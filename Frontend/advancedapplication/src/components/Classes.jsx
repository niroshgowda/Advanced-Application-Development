import React from 'react';
import './Classes.css';
import snowMountains from '../assets/snowMountains.jpg';
import desert from '../assets/desert.jpg';
import canyons from '../assets/canyons.jpg';

export default function Classes() {
  return (
    <div className='niro'>
    <div className="grid">
      <div className="card">
        <img className="card__img" src={snowMountains} alt="Snowy Mountains" />
        <div className="card__content">
          <h1 className="card__header">Yoga on time</h1>
          <div className="card__text-wrapper">
            <p className="card__text">Energise your morning, re-focus at lunchtime, unwind in the evening, sleep deeply at night.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card__img" src={desert} alt="Desert" />
        <div className="card__content">
          <h1 className="card__header">Top-level Teachers</h1>
          <div className="card__text-wrapper">
            <p className="card__text">Learn from and connect with passionate yoga and meditation experts.</p>
          </div>
            </div>
      </div>
      <div className="card">
        <img className="card__img" src={canyons} alt="Canyons" />
        <div className="card__content">
          <h1 className="card__header">Styles to suit you</h1>
          <div className="card__text-wrapper">
            <p className="card__text">Find your flow with Vinyasa, go inward with Yin, develop presence with meditation, move energy with Qigong.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
