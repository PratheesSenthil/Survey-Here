
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import { login } from '../SurveyComponent/SurveyList';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [login,setlogin]=useState("");
  useEffect(()=>{
    const log=JSON.parse(localStorage.getItem("logeduser"));
    setlogin(log.uname);  
  },[])

  return (
    <div className='nes'>
      <div className="logo">
        <a href='/Home'><i className="bi bi-bar-chart-steps"></i></a> 
      </div>
      <div className='ttle'>
        <p  style={{ color: "bisque" }}>SURVEY HERE</p>
      </div>
      <div className="menu-sym" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className='navbar'>
        
          <div><NavLink to='/Home' className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></div>
          <div><NavLink to='/Create-Survey' className={({ isActive }) => isActive ? "active" : ""}>Create Survey</NavLink></div>
          <div><NavLink to='/MySurvey' className={({ isActive }) => isActive ? "active" : ""}>My Survey</NavLink></div>
          <div><NavLink to='/Surveys' className={({ isActive }) => isActive ? "active" : ""}>Surveys</NavLink></div>
          <div><NavLink to='/'>Logout</NavLink></div>
          <div className='user'>
            <p className='username' style={{ color: "bisque" }}>
              <i className="bi bi-person" style={{ fontSize: "20px", paddingRight: "4px" }}></i>
              {login}
            </p>
          </div>
        
      </div>
      {menuOpen && (
        <div className="menubar">
          
            <div><NavLink to='/Home' onClick={() => setMenuOpen(false)}>Home</NavLink></div>
            <div><NavLink to='/Create-Survey' onClick={() => setMenuOpen(false)}>Create Survey</NavLink></div>
            <div><NavLink to='/MySurvey' onClick={() => setMenuOpen(false)}>My Survey</NavLink></div>
            <div><NavLink to='/Surveys' onClick={() => setMenuOpen(false)}>Surveys</NavLink></div>
            <div><NavLink to='/' onClick={() => setMenuOpen(false)}>Logout</NavLink></div>
            <div className='user'>
              <p className='username'>
                <i className="bi bi-person" style={{ fontSize: "20px", paddingRight: "4px" }}></i>
                {login}
              </p>
            </div>
    
        </div>
      )}
    </div>
  );
}
