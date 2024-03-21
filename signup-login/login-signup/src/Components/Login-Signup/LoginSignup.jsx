import React, { useState } from 'react';
import './loginsignup.css';

import userIcon from '../Assets/user-icon.png';
import email from '../Assets/email-icon.png';
import password from '../Assets/password-icon.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");  // Corrected "sign Up" to "Sign Up"

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={userIcon} alt="" />
          <input type="text" placeholder='Name' />
        </div>}
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder='password' />
        </div>
      </div>
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forget Password? <span>Click Here</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
