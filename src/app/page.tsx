
import styles from "./page.module.css";



export default function Home() {
  return (
    <main className="wrapper">
      <div className="login_box">
        <div className="header">
          <span><b>Log in to your account</b></span>
        </div>
        <div className="subheader">
            <h6>Welcome back! Please enter your details</h6>
        </div>
        
          
        
        
      </div>
      <div className="input_box">
      <input
        type="email"
        id="email"
        className="input-field"
        placeholder="Enter your email"
        
      />
      <label htmlFor="email" className="label">
        <b>Email</b>
      </label>
    </div>
    <div className="input_box">
      <input type="password" id="pass" className="input-field" placeholder="********"/>
      <label htmlFor="pass" className="label"><b>Password</b>
      </label>
    </div>
    <div className="remember-forgot">
      <div className="remember">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember for 30 days</label>
      </div>
      <div className="forgot">
        <a href="#"><u>Forgot password</u></a>
      </div>
    </div>
    <div>
    <button className = "submit" type = "submit">Sign in</button>

    </div>
    <div >
      <button className = "google" type = "submit"><a href ="./google.accounts.com">Sign in with Google</a></button>
    </div>
    
    <div className="register">
      <a href ="./Form.tsx" id="linkCreateAccount">
        Don't have an account? <u>Sign up</u>
      </a>
    </div>

      
    </main>
  );
}


