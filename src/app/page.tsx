
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="login_box">
        <div className="header">
          <span><h1>Log in to your account</h1></span>
        </div>
        <div className="subheader">
            <p>Welcome back! Please enter your details</p>
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
        Email
      </label>
    </div>
    <div className="input_box">
      <input type="password" id="pass" className="input-field" placeholder="********"/>
      <label htmlFor="pass" className="label">Password
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
      <button className = "google" type = "submit">Sign in with Google</button>
    </div>
    <div className="register">
      <a href ="./Form.tsx" id="linkCreateAccount">
        Don't have an account? <u>Sign up</u>
      </a>
    </div>

      
    </main>
  );
}


