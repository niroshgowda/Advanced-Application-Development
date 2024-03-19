import React, { useState } from 'react';
import './Academy1.css';
import serenity from '../assets/serenity.jpg';
import eternal from '../assets/eternal.jpeg';
import integral from '../assets/integral.jpg';
import harmony from '../assets/harmony.jpeg';
import kripalu from '../assets/kripalu.jpg';
import zenvibe from '../assets/zenvibe.jpg';

const jobs = [
  {
    title: "Serenity Springs Yoga School",
    image: serenity,
    details:
      "Emphasizes programs, guided by experienced instructors, harness yoga's healing potential for holistic well-being.",
  },
  {
    title: "Elevate Yoga Academy",
    image: eternal,
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
  },
  {
    title: "Integral Yoga Institute",
    image: integral,
    details:
      "Emphasizes the integration of yoga into daily life for physical, mental, and spiritual well-being.",
  },
  {
    title: "Harmony Haven Yoga Retreat ",
    image: harmony,
    details:
      "Ensconced in lush forests, provides immersive yoga retreats for rejuvenation and self-discovery, offering guests daily yoga, meditation, nourishing cuisine, and tranquil nature escapes.",
  },
  {
    title: "Kripalu Center for Yoga & Health",
    image: kripalu,
    details:
      "Known for its immersive yoga retreats and wellness programs,focuses on holistic health and personal transformation, offering guests transformative experiences in nurturing environments.",
  },
  {
    title: "ZenVibe Yoga Academy ",
    image: zenvibe,
    details:
      "It offers a range of yoga classes, workshops, and retreats aimed at promoting inner peace and holistic wellness.",
  },
];

const Job = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const createJobListingCards = () => {
    const filteredJobs = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredJobs.length === 0 && searchTerm.trim() !== '') {
      return (
        <div className="no-results">
          No results found for "{searchTerm}"
        </div>
      );
    }

    return filteredJobs.map((job, index) => (
      <div key={index} className="job">
        <img src={job.image} alt={job.title} />
        <h3 className="job-title">{job.title}</h3>
        <div className="details">{job.details}</div>
        <a href={job.link} className="details-btn">More Details</a>
      </div>
    ));
  };

  return (
    <div>
      <div className="jobs-list-container">
        <h2>{jobs.length} Yoga Academy</h2>
        <input 
          className="job-search" 
          type="text" 
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="jobs">
          {createJobListingCards()}
        </div>
      </div>
    </div>
  );
};

export default Job;
