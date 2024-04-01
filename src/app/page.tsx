
import styles from "./page.module.css"
import Link from 'next/link'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.m_title}>
          <span><b>Log in to your account</b></span>
        </div>
        <div className={styles.title}>
            <h6>Welcome back! Please enter your details</h6>
        </div>
        
          
        
        
      </div>
      <div className={styles.input}>
        <input
          type="email"
          id="email"
          className={styles.field}
          placeholder="Enter your email"
          
        />
        <label htmlFor="email" className="label">
          Email
        </label>
      </div>
      <div className={styles.input}>
        <input type="password" id="pass" className={styles.field} placeholder="********"/>
        <label htmlFor="pass" className="label">Password
        </label>
      </div>
      <div className={styles.rememberForgot}>
        <div className="remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember for 30 days</label>
        </div>
        <div className="forgot">
          <a href="#"><u>Forgot password</u></a>
        </div>
      </div>
      <div className={styles.action}>
        <button className={styles.signin} type = "submit">Sign in</button>
        <button className={styles.googleSignin} type = "submit"><a href ="./google.accounts.com">Sign in with Google</a></button>
      </div>
    
      <div className={styles.createAcc}>
        <Link href ="/signup" id="linkCreateAccount">
          Don't have an account? <u>Sign up</u>
        </Link>
      </div>
      
    </main>
  );
}


