import React from 'react'
import './ContactUs.css'
export default function ContactUs() {
  return (
    <div className='contactUs-page'>
      <center><h1 className='contit'>CONTACT US</h1></center>
      <center><h3 className='quote'>Your thoughts matter—let’s talk!</h3></center>
      <div className='contact-flex'>
        <div className='contact-img'>
          <img  className='image' src='https://instacks.co/assets/images/contact_us_2.svg'
          alt='Contact us img'/>
        </div>
        <div className='contact-info'>
         <div className='call'>
          <h3><i class="bi bi-telephone-fill"></i>  Call Us</h3>
          <h3>+91 9874561230</h3>
         </div>
         <div>
          <h3><i class="bi bi-envelope-fill"></i>   Mail Us</h3>
          <h3>surveyheredmin@gmail.com</h3>
         </div>
         <div>
          <h3><i class="bi bi-building-fill"></i>   Communication Address</h3>
          <h3>Karpagam College of Engineering,Myleripalayam Village, Othakkal Mandapam, Tamil Nadu 641032</h3>
         </div>
        </div>
      </div>
    </div>
  )
}
