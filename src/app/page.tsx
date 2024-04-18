

import styles from "./page.module.css"
import Link from 'next/link'



export default function Home() {
  return (
    <main className="main">
      <div className="content">
        <div className="m_title">
          <span><b>Log in to your account</b></span>
        </div>
        <div className="title">
            <h6>Welcome back! Please enter your details</h6>
        </div>
        
      </div>    
        
      <div className="all">  
      
        <div className="input">
          <input
            type="email"
            id="email"
            className="field"
            placeholder="Enter your email"
            
          />
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>
        <div className="input">
          <input type="password" id="pass" className="field" placeholder="********"/>
          <label htmlFor="pass" className="label">Password
          </label>
        </div>
        <div className="rememberForgot">
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>
          <div className="forgot">
            <a href="#"><u>Forgot password</u></a>
          </div>
        </div>
        <div className="action">
          <button className="signin" type = "submit">Sign in</button>
          <button className="googleSignin" type = "submit"><a href ="./google.accounts.com">Sign in with Google</a></button>
        </div>
    
        <div className="createAcc">
          
            <p>Don't have an account? <Link href ="/signup" id="linkCreateAccount">Sign up</Link>
            </p>
        </div>
      </div>
    </main>
  );
}


