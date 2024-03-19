import React from 'react';
import './About.css';
import Navbar from './Navbar.jsx';
import about from '../assets/about.jpg';
import download from '../assets/download.jpg';
import aboo from '../assets/aboo.jpg';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className='aboutContent'>
        <div className='aboutheading'>
          <h1>ABOUT US</h1>
          <div className='about'>
            <div className='about-left'>
              <img src={download} alt="" className='about-img' />
            </div>
            <div className='about-right'>
              <h2>What is ZenYoga?</h2>
              <p>ZenYoga is a comprehensive yoga academy admission portal dedicated to providing a <br/>transformative learning experience for individuals seeking to deepen their practice and <br/>understanding of yoga. Through ZenYoga, students gain access to a diverse range of courses, workshops, and resources curated by expert instructors. Whether you're a novice exploring the foundations of yoga or an experienced practitioner seeking advanced studies, ZenYoga offers a supportive community and personalized guidance to help you embark on a journey of self-discovery <br/>and holistic well-being.</p>
              <p>At ZenYoga, we believe that yoga is not just a physical practice but a path to inner growth and self-realization. Our platform fosters a culture of mindfulness, compassion, and self-care, empowering individuals to cultivate balance and harmony in their lives. Join us on this enriching journey to unlock your full potential and cultivate a deep sense of well-being in mind, body, and spirit.</p>
            </div>
          </div>
          <div className='about'>
            <div className='about-right'>
              <h2>Our Purpose</h2>
              <p>Our highly trained, passionate teachers aim to make yoga accessible to all, and offer a practice that can be applied both on and off the mat - and ZenYoga is what we created to achieve that.</p>
              <p>Yoga makes you feel more connected with yourself and others, so we truly believe that the more people practice yoga, the better place the world will be. No matter your age, ability, or lifestyle, we have yoga classes that will suit your needs.</p>
              <p>Our diverse range of classes cater to individuals at every stage of their yoga journey, from beginners to advanced practitioners. With a focus on holistic well-being, we provide a nurturing environment where you can cultivate mindfulness, strength, and inner peace</p>
            </div>
            <div className='about-left'> 
              <img src={about} alt="" className='about-img' />
            </div>
          </div>
          <div className='aboo'>
  <img src={aboo} alt="" />
  <div className="aboo-content">
    <h2>1. Free Content</h2>
    <p>Almost 50% of our content is free, no strings attached, and we continue to post free content.</p>
    <h2>2. Diversity</h2>
    <p>In body size and shape, people of color.</p>
    <h2>3. True to Yoga</h2>
    <p>We honor what yoga was originally meant to be - honest, generous, community-focused, service-oriented, and transformative.</p>
    <h2>4. Plastic-free Yoga</h2>
    <p>We have a mission to reduce the embarrassing amount of plastic that the yoga industry is producing.</p>
    <h2>5. We Like Being Small</h2>
    <p>Owned by two brothers David and Sean Procyshyn, they like being small enough to provide the attention and community feel that people appreciate, even as the community grows.</p>
    <h2>6. Social Purpose</h2>
    <p>We aren’t a profit-driven corporation, yet we aren’t a nonprofit; somewhere in between. We care about people and the planet while we strive to earn a good living.</p>
       </div>
        </div>      
            </div>
            </div>
        </div>
  );
}
