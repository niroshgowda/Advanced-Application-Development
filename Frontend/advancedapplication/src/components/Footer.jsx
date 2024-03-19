import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footfull'>
    <footer>
    <div class="container">
    
    <div class="footer-content1">
      
      <p>Email:Info@example.com</p>
      <p>Phone:+121 56556 565556</p>
      <p>Address:Your Address 123 street</p>
   </div>
  
   <div class="footer-content">
     <h3>QuickLinks</h3>
      <ul class="list">
         <li>Home</li>
         <li>About</li>
         <li>Academy</li>
         <li>Courses</li>
         <li>Classes</li>
      </ul>
  </div>
   <div class="footer-content">
     <h3>FollowUs</h3>
     <ul class="social-icons">
     
     <li><FaFacebook /></li>
     <li><FaSquareTwitter /></li>
     <li><FaInstagram /></li>
    </ul>
    
   </div>

   </div>

<div class="bottom-bar">
 <p>&copy; 2024 ZENYOGA . All rights reserved</p>
</div>

</footer>
</div>
  )
}
