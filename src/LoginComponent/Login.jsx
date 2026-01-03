import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { login,Signup } from '../SurveyComponent/SurveyList';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Conpassword,setConPassword]= useState('')
  const [newuser,setnewuser]= useState('');
  const[newpassword,setnewpassword]= useState('')
  const [newEmail,setnewEmail]=useState("");
  const [errorEmail,seterrorEmail]= useState(null)
  const [errorpass,seterrorpass]= useState(null)
  const [errorname,seterrorname]= useState(null)
  const [logeduser,setlogeduser]= useState({uname:"",pwd:""});
  const navigate = useNavigate();
  const[signup,setsignup]=useState(false)
  const sup=(event)=>{
    setsignup(true)
    event.preventDefault();
  }
  const log=(event)=>{
    setsignup(false)
    event.preventDefault();
  }

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    
    const checkusername= Signup.findIndex(user=>user.uname===username||user.emailId===username ) ;
    const checkuserpass= Signup.find(user=>user.userpass===password ) ;
  
    
    
    if(checkusername>-1){
      if(checkuserpass){  
        logeduser.uname=Signup[checkusername].uname;
        logeduser.pwd=password;
        localStorage.setItem("logeduser",JSON.stringify(logeduser))   
        navigate('/Home')
      }else{
        alert("Wrong Password ")
      }
    }
    else{
      alert("Wrong Username or Password")
    } 
    
  };


  // const signupinserver=()=>{
  //   axios.post("http://127.0.0.1:3001/signup",{newEmail,newuser,newpassword})
  //   .then(result=>console.log(result)
  //  .catch(error){
  //   console.error(error.)
    
  //  }
  //   )
  // }

  const handleSignIn=(event)=>{
    event.preventDefault();
    const modelEmail=/\S+@\S+\.\S+/;
    console.log(modelEmail.test(newEmail))
    console.log(newpassword.length>7)
    console.log(newuser.length<9)
    if(modelEmail.test(newEmail)&& (newpassword.length>7)&&(newuser.length<13)){
      seterrorEmail(null)
    const userfind=Signup.find(user => user.uname === newuser);
    const findemail=Signup.find(user=>user.emailId==newEmail);
    seterrorpass(null)
    if(Conpassword===newpassword){
      
      if(userfind){
        alert("User name already exist")
      }else if(findemail){
        alert("Email already registered. Try logging in.")
      }
      else{
        const uname=newuser;
      const userpass= newpassword;
      const emailId=newEmail;
      const newsignup={emailId,uname,userpass}
      Signup.push(newsignup);
      console.log(Signup)
      setConPassword("");
      setnewpassword("");
      setnewuser("");
      setnewEmail("");
        setsignup(false)
        
      }
     }else{
      alert("Paswords must be same");
     }
    
    
  }else{
    if(! modelEmail.test(newEmail)){
    seterrorEmail("Please provide a valid email address")
    }else{seterrorEmail(null)}
    if(!(newpassword.length>7)){
      seterrorpass("Minimum 8 characters required.")
    }else{seterrorpass(null)}
    if(!(newuser.length<13)){
      seterrorname("Please enter a maximum of 13 characters")
    }else{seterrorname(null)}
  }
  }
  return (
    <div className="page">
      <div className="head">
        <center><h1 style={{color:"bisque"}}><i className="bi bi-bar-chart-steps"/><span>{ }</span> <b>SURVEY HERE</b></h1></center>
      </div>
    <div className="login">
    <div className="login-page">
      {
        !signup?(<><div className="login-container">
          <div className="welcome-section">
            <h1>Welcome Back!</h1>
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
              alt="Welcome"
            />
            <p>Your opinion matters. Log in to make your voice heard.</p>
          </div>
          <div className="form-section">
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Username or E-mail"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
              <p className="signup-text">
                Not registered?{' '}
                <a href="/" onClick={sup}>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div></>):(<><div className="signup-container">
        
        <div className="form-section">
          <form onSubmit={handleSignIn}>
            <h2>Sign up </h2>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="text"
                placeholder="E-mail"
                value={newEmail}
                onChange={(e) => setnewEmail(e.target.value)}
                required
              />
            </div>
            {errorEmail&&<p className='errorEmail'><span style={{fontSize:"20px"}}>!</span>  {errorEmail}</p>}
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                value={newuser}
                onChange={(e) => setnewuser(e.target.value)}
                required
              />
            </div>
            {errorname&&<p className='errorEmail'><span style={{fontSize:"20px"}}>!</span>  {errorname}</p>}
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="text"
                placeholder="Password"
                value={newpassword}
                onChange={(e) => setnewpassword(e.target.value)}
                required
              />
            </div>
            {errorpass&&<p className='errorEmail'><span style={{fontSize:"20px"}}>!</span>  {errorpass}</p>}
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type=" text"
                placeholder="Confirm Password"
                value={Conpassword}
                onChange={(e) => setConPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button" >
             Sign UP
            </button> 
            <p className="signup-text">
            Already signed up?{' '}
                <a href="/" onClick={log}>
                  Login 
                </a>
              </p>       
          </form>
        </div>
        <div className="welcome-section">
          <h1>Welcome !</h1>
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            alt="Welcome"
          />
          <p>Sign up today and make your voice heard!</p>
        </div>
      </div></>)
}
      
    </div>
    </div>
    </div>
  );
}
