import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer-page'>
      <div className="footer-flex">
        <div className="company">
        <i class="bi bi-bar-chart-steps"></i>
        <h2 className='name'>SURVEY HERE</h2>
          <p className='slogan' style={{color:"white",marginLeft:'0.3vw'}}>Your Vision Your Impact</p>
        </div>
        <div className="links">
        <nav className='Footer'>
            <ul>
                <li><p className='learn-more'>Explore More</p></li>
                <li><i class="bi bi-chevron-right">    </i><Link to='/AboutUs' >About Us</Link></li>
                <li><i class="bi bi-chevron-right">    </i><Link to='/ContactUs' >Contact Us</Link></li>
                <li><i class="bi bi-chevron-right">    </i><Link to='/TermsAndCondition' >Terms And Conditions</Link></li>  
                <li><i class="bi bi-chevron-right">    </i><Link to='/' >Logout</Link></li>
            </ul>
        </nav>
        </div>
        <div className="social">
          <h1 className='follow'>Follow Us On:</h1>
          <div className="socialLink">
          <a href='https://www.facebook.com/'><i class="bi bi-facebook" style={{fontSize:"25px"}}></i></a>
          <a href='https://www.instagram.com/'><i class="bi bi-instagram" style={{fontSize:"25px"}}></i>  </a>
          <a href='https://x.com/'><i class="bi bi-twitter-x" style={{fontSize:"25px"}}></i></a>  
          <a href='https://www.youtube.com/'><i class="bi bi-youtube" style={{fontSize:"25px"}}></i></a>
            
          
          
          
          </div>
        </div>
      </div>
      <center><p style={{color:"white"}}>&copy; 2025 Survey Here. All Rights are Reserved</p></center>
    </div>
  )
}
