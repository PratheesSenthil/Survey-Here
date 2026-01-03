import React from 'react'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className='AboutUs-page'>
      <center><h1 className='abttit'>ABOUT US</h1></center>
      <div className='whoweare'>
        <h3 style={{color:'darkslateblue',fontWeight:"bolder"}}>WHO WE ARE?</h3>
        <p>Welcome to <strong>SURVEY HERE</strong>, an innovative online survey platform designed to make feedback collection effortless, insightful, and efficient. We understand the power of data-driven decisions, and our goal is to provide individuals and organizations with a seamless way to create, distribute, and analyze surveys.</p>
        <p>At <strong>SURVEY HERE</strong>, we strive to simplify the survey process while ensuring maximum flexibility, customization, and security for our users.</p>
      </div>
      <div className='Vision'>
        <h3 style={{color:'darkslateblue',fontWeight:"bolder"}}>OUR VISION</h3>
        <p>We envision a world where collecting, analyzing, and acting on feedback is a fundamental driver of growth and improvement. Surveys are not just forms; they are powerful tools that help individuals, businesses, and organizations make informed decisions that shape the future. At [Your Survey Platform Name], our vision is to make feedback accessible to everyone, whether for research, customer insights, or employee engagement. We strive to promote data-driven decision-making by transforming raw survey data into meaningful insights that help users make smarter choices. </p>
      </div>
      <div className='Mission'>
        <h3 style={{color:'darkslateblue',fontWeight:"bolder"}}>OUR MISSION</h3>
        <p>Our mission is simple yet impactful: To provide an efficient, secure, and user-friendly platform that enables individuals and organizations to create, distribute, and analyze surveys seamlessly.
We believe that surveys are a crucial tool for gathering insights that drive innovation, improvement, and meaningful change. By making surveys easy to create and analyze, we empower users to collect valuable feedback from their target audience and use that data to make better decisions.</p>
      </div>
      <div className='chooseus'>
        <h3 style={{color:'darkslateblue',fontWeight:"bolder"}}>WHY CHOOSE US?</h3>
        <p><i class="bi bi-caret-right-square-fill"></i><b> Easy-to-Use Interface –</b> Our platform is designed for everyone, from beginners to professionals. You don’t need any technical knowledge to create engaging surveys.</p>
        <p><i class="bi bi-caret-right-square-fill"></i><b>Customizable Surveys –</b> Tailor surveys to fit your specific needs, with multiple question types, branding options, and survey logic to guide responses effectively.</p>
        <p><i class="bi bi-caret-right-square-fill"></i><b>Secure & Confidential –</b> We take data privacy seriously. Every response is encrypted, and we provide anonymous response options to ensure users feel comfortable sharing honest feedback.</p> 
        <p><i class="bi bi-caret-right-square-fill"></i><b> Real-Time Analytics – </b> Get instant insights with real-time response tracking, visual charts, and exportable reports to make analysis easier and more effective.</p>
      </div>
      <div className='Joinus'>
        <h3 style={{color:'darkslateblue',fontWeight:"bolder"}}>JOIN US ON OUR JOURNEY</h3>
        <p>At <strong>SURVEY HERE</strong>, we are more than just a survey tool – we are a community of innovators, learners, and problem-solvers dedicated to simplifying the way feedback is collected and analyzed. As we continue to grow and improve, we invite you to join us in shaping the future of surveys.</p>
      </div>
    </div>
  )
}
