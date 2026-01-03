import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleStartCreatingSurveys = () => {
    navigate('/create-survey'); 
  };

  const handleParticipateInSurveys = () => {
    navigate('/Surveys'); 
  };

  return (
    <div className='Home-page'>
      
      <div className="home-container">
        <div className='home-style'>
         <div className="hero-section">
          <h3 className="hero-title">Transform Insights into Action!</h3>
          <p className="hero-subtitle">
            Create professional surveys, gather valuable feedback, and make data-driven decisions with confidence.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleStartCreatingSurveys}>
              Start Creating Surveys
            </button>
          </div>
         </div>
         <div className='home-img'>
         <img className='note-img' src='./home-img.png' alt='notepad'></img>
         </div>
        </div>

        <div className="cta-section">
          <h2 >Want to Share Your Opinion?</h2>
          <p>
            Participate in surveys created by others and contribute to valuable insights. Help shape decisions and make 
            your voice heard.
          </p>
          <button className="parti-button" onClick={handleParticipateInSurveys}>
            Participate in Surveys
          </button>
        </div>
        
        <div className="features-section">
          <h2>Our Core Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Customizable Survey Builder</h3>
              <p>Design tailored surveys with advanced customization options, ensuring they meet your specific needs.</p>
            </div>
            <div className="feature-item">
              <h3>Targeted Survey Distribution</h3>
              <p>Reach the right audience with precision targeting tools, ensuring meaningful and accurate responses.</p>
            </div>
            <div className="feature-item">
              <h3>Comprehensive Analytics</h3>
              <p>Gain actionable insights through real-time reporting, visual dashboards, and in-depth analytics.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Join the Community of Professionals</h2>
          <p>
            Trusted by businesses, researchers, and individuals worldwide, <strong>Survey here</strong> is your gateway 
            to better insights and smarter decisions. Sign up today and experience the difference.
          </p>
        </div>
      </div>
    </div>
  );
}
